import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSql, logActivity } from "@/lib/db";
import { LEAD_STATUSES, FUNNEL_STAGES, statusClass, statusLabel, statusStyle, stageInfo, fmtTime } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Leads — BizDrive Admin", robots: { index: false, follow: false } };

const PAGE_SIZE = 100;

async function bulkAction(formData) {
  "use server";
  const action = String(formData.get("action") || "");
  const idsRaw = formData.getAll("lead_ids").map((x) => Number(x)).filter((n) => Number.isInteger(n) && n > 0);
  if (idsRaw.length === 0) {
    redirect("/admin/leads?bulk=empty");
  }
  const sql = getSql();

  if (action === "mark_contacted") {
    await sql`UPDATE leads SET contacted_at = COALESCE(contacted_at, NOW()), last_activity_at = NOW() WHERE id = ANY(${idsRaw})`;
    await Promise.all(idsRaw.map((id) => logActivity(id, "bulk_contacted", null)));
  } else if (action.startsWith("set_status_")) {
    const status = action.slice("set_status_".length);
    const allowed = LEAD_STATUSES.map((s) => s.value);
    if (!allowed.includes(status)) redirect("/admin/leads?bulk=invalid");
    await sql`UPDATE leads SET status = ${status}, last_activity_at = NOW() WHERE id = ANY(${idsRaw})`;
    await Promise.all(idsRaw.map((id) => logActivity(id, "bulk_status_changed", { to: status })));
  } else if (action === "delete") {
    await sql`DELETE FROM leads WHERE id = ANY(${idsRaw})`;
  } else {
    redirect("/admin/leads?bulk=invalid");
  }

  revalidatePath("/admin/leads");
  revalidatePath("/admin");
  redirect(`/admin/leads?bulk=ok&n=${idsRaw.length}`);
}

export default async function AdminLeadsList({ searchParams }) {
  const sp = await searchParams;
  const statusFilter = typeof sp?.status === "string" && LEAD_STATUSES.some((s) => s.value === sp.status) ? sp.status : null;
  const planFilter = typeof sp?.plan === "string" && sp.plan.length <= 64 ? sp.plan : null;
  const q = typeof sp?.q === "string" && sp.q.length <= 120 ? sp.q.trim() : "";

  const sql = getSql();
  const leads = await sql`
    SELECT id, email, name, phone, plan_slug, source, status, utm_source, utm_campaign, created_at, contacted_at, last_activity_at
    FROM leads
    WHERE
      (${statusFilter}::text IS NULL OR status = ${statusFilter})
      AND (${planFilter}::text IS NULL OR plan_slug = ${planFilter})
      AND (${q}::text = '' OR email ILIKE ${`%${q}%`} OR COALESCE(name, '') ILIKE ${`%${q}%`} OR COALESCE(notes, '') ILIKE ${`%${q}%`})
    ORDER BY created_at DESC
    LIMIT ${PAGE_SIZE}
  `;

  return (
    <div className="bx-container max-w-[1280px]">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-[1.6rem] font-extrabold text-ink">Leads</h1>
          <p className="text-[14px] text-muted">{leads.length} รายการ (สูงสุด {PAGE_SIZE})</p>
        </div>
        <a href="/api/admin/leads/export" className="btn btn-outline text-[13px]" style={{ minHeight: "38px", padding: "8px 16px" }}>
          Export CSV
        </a>
      </header>

      <form className="mb-5 grid grid-cols-[1fr_180px_180px_auto] gap-2 max-[900px]:grid-cols-1" action="/admin/leads">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="ค้นหา email / name / notes…"
          className="rounded-lg border-2 border-line bg-white px-4 py-2.5 text-[14px] text-ink outline-none focus:border-brand-blue"
        />
        <select name="status" defaultValue={statusFilter || ""} className="rounded-lg border-2 border-line bg-white px-3 py-2.5 text-[14px] text-ink outline-none focus:border-brand-blue">
          <option value="">ทุก status</option>
          {LEAD_STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <select name="plan" defaultValue={planFilter || ""} className="rounded-lg border-2 border-line bg-white px-3 py-2.5 text-[14px] text-ink outline-none focus:border-brand-blue">
          <option value="">ทุกคลาส</option>
          <option value="manus-ai-online">Online</option>
          <option value="manus-ai-seminar">Seminar</option>
          <option value="manus-ai-private">Private</option>
        </select>
        <button type="submit" className="btn btn-primary text-[14px]" style={{ minHeight: "42px", padding: "8px 20px" }}>กรอง</button>
      </form>

      {sp?.bulk === "ok" ? (
        <div role="status" aria-live="polite" className="mb-4 rounded-lg border border-[#047857]/30 bg-[#047857]/[.08] px-4 py-3 text-[14px] font-semibold text-[#047857]">
          อัปเดต {sp?.n || ""} รายการเรียบร้อย ✓
        </div>
      ) : null}

      {leads.length === 0 ? (
        <div className="rounded-lg border border-line bg-white p-12 text-center text-muted">
          ไม่พบรายการ — ลองล้างตัวกรอง
        </div>
      ) : (
        <form action={bulkAction} className="group/bulk relative">
          <div className="grid grid-cols-3 gap-4 pb-28 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
            {leads.map((l) => <LeadCard key={l.id} lead={l} />)}
          </div>

          <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 opacity-0 transition-opacity duration-200 group-has-[input[name=lead_ids]:checked]/bulk:pointer-events-auto group-has-[input[name=lead_ids]:checked]/bulk:opacity-100">
            <div className="flex w-full max-w-[760px] flex-wrap items-center gap-2 rounded-full border border-line bg-white p-2 pl-5 shadow-brand max-[620px]:rounded-2xl">
              <span className="flex items-center gap-2 text-[13.5px] font-extrabold text-ink max-[620px]:w-full max-[620px]:justify-center">
                <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-brand-blue text-[12px] text-white">✓</span>
                เลือกแล้ว
              </span>
              <select
                name="action"
                required
                defaultValue=""
                className="min-w-[180px] flex-1 rounded-full border-2 border-line bg-white px-3 py-2 text-[13.5px] font-semibold text-ink outline-none focus:border-brand-blue max-[620px]:w-full"
              >
                <option value="" disabled>เลือกการดำเนินการ…</option>
                <option value="mark_contacted">Mark ติดต่อแล้ว</option>
                <optgroup label="เปลี่ยน Status">
                  {LEAD_STATUSES.map((s) => (
                    <option key={s.value} value={`set_status_${s.value}`}>→ {s.label}</option>
                  ))}
                </optgroup>
                <option value="delete">ลบ (ระวัง — ย้อนกลับไม่ได้)</option>
              </select>
              <button type="submit" className="btn btn-primary text-[13.5px]" style={{ minHeight: "40px", padding: "8px 20px" }}>
                ทำเลย
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

function LeadCard({ lead }) {
  const initials = (lead.name || lead.email).slice(0, 1).toUpperCase();
  const isContacted = !!lead.contacted_at;
  const style = statusStyle(lead.status);
  const stage = stageInfo(lead.status);
  return (
    <article
      className={`group/card relative overflow-hidden rounded-[14px] border border-line transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-brand-sm has-[:checked]:border-brand-blue has-[:checked]:shadow-brand ${style.bg}`}
    >
      <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${style.accent}`} />
      <label className="absolute right-2.5 top-3.5 z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border-2 border-line bg-white shadow-brand-sm has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue has-[:checked]:text-white">
        <input type="checkbox" name="lead_ids" value={lead.id} className="peer absolute h-0 w-0 opacity-0" aria-label={`เลือก ${lead.email}`} />
        <span aria-hidden="true" className="hidden text-[13px] font-extrabold leading-none peer-checked:block">✓</span>
      </label>
      <a
        href={`/admin/leads/${lead.id}`}
        className="block p-4 pr-12 pt-5"
      >
        <StageIndicator stage={stage} style={style} className="mb-3" />
      <header className="mb-3 flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <div aria-hidden="true" className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-full text-[15px] font-extrabold ${style.avatar}`}>
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[14px] font-extrabold text-ink group-hover:text-brand-blue" title={lead.email}>{lead.email}</div>
            <div className="truncate text-[12px] text-muted" title={lead.name || ""}>{lead.name || "ไม่ระบุชื่อ"}</div>
          </div>
        </div>
        <span className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-extrabold ${statusClass(lead.status)}`}>
          <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          {statusLabel(lead.status)}
        </span>
      </header>

      <dl className="mb-3 grid grid-cols-[70px_1fr] gap-x-2 gap-y-1.5 text-[12.5px]">
        {lead.phone ? <DRow label="โทร" value={lead.phone} highlight /> : null}
        <DRow label="คลาส" value={lead.plan_slug || "—"} highlight={!!lead.plan_slug} />
        <DRow label="Source" value={lead.source || "—"} />
        {lead.utm_source ? <DRow label="UTM" value={`${lead.utm_source}${lead.utm_campaign ? ` / ${lead.utm_campaign}` : ""}`} /> : null}
      </dl>

      <footer className="mt-auto flex items-center justify-between gap-2 border-t border-line/70 pt-2.5 text-[11.5px] text-muted [font-variant-numeric:tabular-nums]">
        <span title={`เข้ามาเมื่อ ${fmtTime(lead.created_at)}`}>{fmtTime(lead.created_at)}</span>
        {isContacted ? (
          <span className="inline-flex items-center gap-1 font-bold text-[#047857]">
            <span aria-hidden="true">✓</span> ติดต่อแล้ว
          </span>
        ) : (
          <span className="font-semibold text-brand-orange">ยังไม่ติดต่อ</span>
        )}
      </footer>
      </a>
    </article>
  );
}

function StageIndicator({ stage, style, className = "" }) {
  if (stage.lost) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex flex-1 items-center gap-1">
          {Array.from({ length: stage.total }).map((_, i) => (
            <span key={i} aria-hidden="true" className="h-1 flex-1 rounded-full bg-[#dfe2e8]" />
          ))}
        </div>
        <span className={`text-[10px] font-extrabold uppercase tracking-wider ${style.text}`}>Closed</span>
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-1 items-center gap-1">
        {Array.from({ length: stage.total }).map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`h-1 flex-1 rounded-full ${i < stage.stage ? style.accent : "bg-line"}`}
          />
        ))}
      </div>
      <span className={`text-[10px] font-extrabold uppercase tracking-wider ${style.text} [font-variant-numeric:tabular-nums]`}>
        Stage {stage.stage}/{stage.total}
      </span>
    </div>
  );
}

function DRow({ label, value, highlight }) {
  return (
    <>
      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">{label}</dt>
      <dd className={`truncate ${highlight ? "font-bold text-ink" : "text-ink/80"}`} title={value}>{value}</dd>
    </>
  );
}
