import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSql, logActivity } from "@/lib/db";
import { LEAD_STATUSES, statusClass, statusLabel, statusStyle, stageInfo, FUNNEL_STAGES, fmtTime } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Lead — BizDrive Admin", robots: { index: false, follow: false } };

async function updateLeadAction(formData) {
  "use server";
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id) || id <= 0) return;

  const status = String(formData.get("status") || "").slice(0, 32);
  const notes = String(formData.get("notes") || "").slice(0, 5000) || null;
  const tagsRaw = String(formData.get("tags") || "").slice(0, 500);
  const tags = tagsRaw ? tagsRaw.split(",").map((s) => s.trim()).filter(Boolean).slice(0, 20) : null;
  const markContacted = formData.get("mark_contacted") === "1";

  const allowed = LEAD_STATUSES.map((s) => s.value);
  if (!allowed.includes(status)) return;

  const sql = getSql();
  const before = await sql`SELECT status, notes, tags, contacted_at FROM leads WHERE id = ${id} LIMIT 1`;
  const prev = before[0];
  if (!prev) return;

  await sql`
    UPDATE leads
    SET
      status = ${status},
      notes = ${notes},
      tags = ${tags},
      contacted_at = CASE WHEN ${markContacted}::boolean AND contacted_at IS NULL THEN NOW() ELSE contacted_at END,
      last_activity_at = NOW()
    WHERE id = ${id}
  `;

  if (prev.status !== status) {
    await logActivity(id, "status_changed", { from: prev.status, to: status });
  }
  if ((prev.notes || "") !== (notes || "")) {
    await logActivity(id, "notes_updated", { length: notes?.length || 0 });
  }
  const prevTags = JSON.stringify(prev.tags || []);
  const nextTags = JSON.stringify(tags || []);
  if (prevTags !== nextTags) {
    await logActivity(id, "tags_updated", { tags: tags || [] });
  }
  if (markContacted && !prev.contacted_at) {
    await logActivity(id, "contacted", null);
  }

  revalidatePath(`/admin/leads/${id}`);
  revalidatePath(`/admin/leads`);
  revalidatePath(`/admin`);
  redirect(`/admin/leads/${id}?saved=1`);
}

async function deleteLeadAction(formData) {
  "use server";
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id) || id <= 0) return;
  const sql = getSql();
  await sql`DELETE FROM leads WHERE id = ${id}`;
  revalidatePath(`/admin/leads`);
  revalidatePath(`/admin`);
  redirect(`/admin/leads?deleted=1`);
}

export default async function LeadDetailPage({ params, searchParams }) {
  const { id } = await params;
  const idNum = Number(id);
  if (!Number.isInteger(idNum)) notFound();
  const sp = await searchParams;
  const saved = sp?.saved === "1";

  const sql = getSql();
  const [rows, activities] = await Promise.all([
    sql`SELECT * FROM leads WHERE id = ${idNum} LIMIT 1`,
    sql`SELECT id, kind, payload, created_at FROM lead_activities WHERE lead_id = ${idNum} ORDER BY created_at DESC LIMIT 50`.catch((err) => {
      console.warn("lead_activities query failed (run migration 003?):", err.message);
      return [];
    }),
  ]);
  if (rows.length === 0) notFound();
  const lead = rows[0];

  const currentStyle = statusStyle(lead.status);
  const stage = stageInfo(lead.status);

  return (
    <div className="bx-container max-w-[960px]">
      <header className={`relative mb-6 overflow-hidden rounded-[14px] border border-line p-5 pt-6 ${currentStyle.bg}`}>
        <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${currentStyle.accent}`} />
        <a href="/admin/leads" className="mb-2 inline-flex text-[13px] font-semibold text-muted hover:text-brand-blue">← Leads</a>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="break-all text-[1.4rem] font-extrabold text-ink">{lead.email}</h1>
            <p className="mt-1.5 text-[13px] text-muted">{lead.name || "ไม่ระบุชื่อ"} · เข้ามาเมื่อ {fmtTime(lead.created_at)}</p>
          </div>
          <span className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-extrabold ${statusClass(lead.status)}`}>
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${currentStyle.dot}`} />
            {statusLabel(lead.status)}
          </span>
        </div>
        <FunnelBar stage={stage} currentStatus={lead.status} className="mt-4" />
      </header>

      {saved ? (
        <div role="status" aria-live="polite" className="mb-4 rounded-lg border border-[#047857]/30 bg-[#047857]/[.08] px-4 py-3 text-[14px] font-semibold text-[#047857]">
          บันทึกแล้ว ✓
        </div>
      ) : null}

      <div className="grid grid-cols-[1.2fr_1fr] gap-5 max-[900px]:grid-cols-1">
        <section className="rounded-lg border border-line bg-white p-5">
          <h2 className="mb-4 text-[14px] font-extrabold text-ink">จัดการ Lead</h2>
          <form action={updateLeadAction} className="grid gap-4">
            <input type="hidden" name="id" value={lead.id} />

            <fieldset className="grid gap-2">
              <legend className="mb-1 text-[12.5px] font-semibold text-muted">Status</legend>
              <div className="flex flex-wrap gap-2">
                {LEAD_STATUSES.map((s) => (
                  <label
                    key={s.value}
                    className={`relative inline-flex cursor-pointer items-center gap-2 rounded-full border-2 px-3 py-1.5 text-[13px] font-bold transition-[background-color,border-color,color] duration-150 has-[:checked]:border-current has-[:checked]:shadow-brand-sm ${s.className}`}
                  >
                    <input
                      type="radio"
                      name="status"
                      value={s.value}
                      defaultChecked={lead.status === s.value}
                      className="absolute h-0 w-0 opacity-0"
                    />
                    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-1.5">
              <span className="text-[12.5px] font-semibold text-muted">Tags (คั่นด้วย ,)</span>
              <input type="text" name="tags" defaultValue={(lead.tags || []).join(", ")} className="rounded-lg border-2 border-line bg-white px-3 py-2 text-[14px] outline-none focus:border-brand-blue" />
            </label>

            <label className="grid gap-1.5">
              <span className="text-[12.5px] font-semibold text-muted">Notes</span>
              <textarea name="notes" defaultValue={lead.notes || ""} rows={6} className="resize-y rounded-lg border-2 border-line bg-white px-3 py-2 text-[14px] outline-none focus:border-brand-blue" placeholder="โน้ตเกี่ยวกับ lead นี้ — สิ่งที่คุย, follow-up, ฯลฯ" />
            </label>

            {!lead.contacted_at ? (
              <label className="flex cursor-pointer items-center gap-2 text-[13.5px] text-ink">
                <input type="checkbox" name="mark_contacted" value="1" className="h-4 w-4" />
                Mark ว่าติดต่อแล้วเป็นครั้งแรกตอนนี้
              </label>
            ) : (
              <p className="text-[12.5px] text-muted">ติดต่อครั้งแรกเมื่อ {fmtTime(lead.contacted_at)}</p>
            )}

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn btn-primary">บันทึก</button>
              <a href={`mailto:${lead.email}`} className="btn btn-outline">ส่งอีเมล</a>
            </div>
          </form>

          <form action={deleteLeadAction} className="mt-6 border-t border-line pt-4">
            <input type="hidden" name="id" value={lead.id} />
            <details>
              <summary className="cursor-pointer text-[13px] font-bold text-muted hover:text-brand-orange">ลบ lead นี้…</summary>
              <div className="mt-3 grid gap-2">
                <p className="text-[13px] text-muted">การลบไม่สามารถย้อนกลับได้</p>
                <button type="submit" className="btn text-[13px]" style={{ background: "#9a3412", color: "white", minHeight: "38px", padding: "8px 16px" }}>
                  ยืนยันลบ
                </button>
              </div>
            </details>
          </form>
        </section>

        <section className="rounded-lg border border-line bg-white p-5">
          <h2 className="mb-4 text-[14px] font-extrabold text-ink">รายละเอียด</h2>
          <ActivityTimeline activities={activities} className="mb-5" />
          <div className="mb-2 text-[14px] font-extrabold text-ink">ข้อมูล Lead</div>
          <dl className="grid gap-3 text-[13.5px]">
            <Row k="ID">#{lead.id}</Row>
            <Row k="ชื่อ">{lead.name || "—"}</Row>
            <Row k="เบอร์โทร">{lead.phone ? <a href={`tel:${lead.phone.replace(/\s|-/g, "")}`} className="font-bold text-brand-blue hover:underline">{lead.phone}</a> : "—"}</Row>
            <Row k="คลาส">{lead.plan_slug || "—"}</Row>
            <Row k="Source">{lead.source || "—"}</Row>
            <Row k="UTM source">{lead.utm_source || "—"}</Row>
            <Row k="UTM campaign">{lead.utm_campaign || "—"}</Row>
            <Row k="UTM medium">{lead.utm_medium || "—"}</Row>
            <Row k="Referrer" wrap>{lead.referrer || "—"}</Row>
            <Row k="User Agent" wrap>{lead.user_agent || "—"}</Row>
            <Row k="เข้ามาเมื่อ">{fmtTime(lead.created_at)}</Row>
            <Row k="กิจกรรมล่าสุด">{fmtTime(lead.last_activity_at)}</Row>
          </dl>
        </section>
      </div>
    </div>
  );
}

const STAGE_LABELS = { new: "ใหม่", contacted: "ติดต่อแล้ว", qualified: "สนใจจริง", customer: "ลูกค้าแล้ว" };

function FunnelBar({ stage, currentStatus, className = "" }) {
  if (stage.lost) {
    return (
      <div className={`flex items-center gap-2 rounded-lg border border-[#dfe2e8] bg-white/60 px-3 py-2 ${className}`}>
        <span aria-hidden="true" className="text-[14px] font-extrabold text-[#9aa3b2]">✕</span>
        <span className="text-[12.5px] font-semibold text-[#4b5563]">ปิดทาง (Closed) — ออกจาก funnel แล้ว</span>
      </div>
    );
  }
  return (
    <ol className={`flex items-center gap-1.5 ${className}`} aria-label="ขั้นของ lead">
      {FUNNEL_STAGES.map((s, i) => {
        const reached = i < stage.stage;
        const isCurrent = s === currentStatus;
        const dot = statusStyle(s).accent;
        return (
          <li key={s} className="flex flex-1 items-center gap-1.5">
            <div className="flex flex-1 flex-col items-center gap-1">
              <span
                aria-hidden="true"
                className={`grid h-6 w-6 place-items-center rounded-full border-2 text-[10px] font-extrabold transition-colors ${
                  reached
                    ? `${dot} border-white text-white shadow-brand-sm`
                    : "border-line bg-white text-muted"
                } ${isCurrent ? "ring-2 ring-offset-1 ring-current" : ""}`}
              >
                {i + 1}
              </span>
              <span className={`text-[11px] font-semibold ${reached ? "text-ink" : "text-muted"} ${isCurrent ? "underline underline-offset-2" : ""}`}>
                {STAGE_LABELS[s]}
              </span>
            </div>
            {i < FUNNEL_STAGES.length - 1 ? (
              <span aria-hidden="true" className={`mb-4 h-0.5 flex-1 ${i + 1 < stage.stage ? statusStyle(FUNNEL_STAGES[i + 1]).accent : "bg-line"}`} />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

const ACTIVITY_META = {
  created: { icon: "★", color: "text-brand-blue", bg: "bg-brand-blue/10", label: (p) => `Lead เข้ามาใหม่${p?.plan_slug ? ` · ${p.plan_slug}` : ""}` },
  status_changed: { icon: "↻", color: "text-[#c2410c]", bg: "bg-[#c2410c]/10", label: (p) => `เปลี่ยน status: ${p?.from || "—"} → ${p?.to || "—"}` },
  notes_updated: { icon: "✎", color: "text-brand-blue", bg: "bg-brand-blue/10", label: (p) => `แก้ notes (${p?.length || 0} ตัวอักษร)` },
  tags_updated: { icon: "#", color: "text-muted", bg: "bg-soft", label: (p) => `แก้ tags: ${(p?.tags || []).join(", ") || "—"}` },
  contacted: { icon: "✓", color: "text-[#047857]", bg: "bg-[#047857]/10", label: () => "Mark ติดต่อแล้ว" },
  bulk_status_changed: { icon: "↻", color: "text-[#c2410c]", bg: "bg-[#c2410c]/10", label: (p) => `Bulk เปลี่ยน status → ${p?.to || "—"}` },
  bulk_contacted: { icon: "✓", color: "text-[#047857]", bg: "bg-[#047857]/10", label: () => "Bulk mark ติดต่อแล้ว" },
};

function ActivityTimeline({ activities, className = "" }) {
  if (!activities || activities.length === 0) {
    return (
      <div className={className}>
        <div className="mb-2 text-[14px] font-extrabold text-ink">Activity</div>
        <p className="text-[13px] text-muted">ยังไม่มีกิจกรรม</p>
      </div>
    );
  }
  return (
    <div className={className}>
      <div className="mb-3 text-[14px] font-extrabold text-ink">Activity ({activities.length})</div>
      <ol className="relative grid gap-3 border-l-2 border-line pl-5">
        {activities.map((a) => {
          const meta = ACTIVITY_META[a.kind] || { icon: "•", color: "text-muted", bg: "bg-soft", label: () => a.kind };
          return (
            <li key={a.id} className="relative">
              <span aria-hidden="true" className={`absolute -left-[30px] grid h-6 w-6 place-items-center rounded-full border-2 border-white text-[12px] font-extrabold shadow-brand-sm ${meta.bg} ${meta.color}`}>
                {meta.icon}
              </span>
              <div className="text-[13.5px] text-ink">{meta.label(a.payload)}</div>
              <div className="text-[11.5px] text-muted [font-variant-numeric:tabular-nums]">{fmtTime(a.created_at)}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Row({ k, children, wrap }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-2 max-[620px]:grid-cols-1">
      <dt className="text-[12.5px] font-semibold uppercase tracking-wide text-muted">{k}</dt>
      <dd className={`text-ink ${wrap ? "break-all text-[12px]" : ""}`}>{children}</dd>
    </div>
  );
}
