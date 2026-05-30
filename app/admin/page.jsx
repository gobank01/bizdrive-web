import { getSql } from "@/lib/db";
import { LEAD_STATUSES, statusClass, statusLabel, fmtTime } from "@/lib/admin";

export const dynamic = "force-dynamic";
export const metadata = { title: "Dashboard — BizDrive Admin", robots: { index: false, follow: false } };

const FMT_DAY = new Intl.DateTimeFormat("th-TH", { day: "numeric", month: "short", timeZone: "Asia/Bangkok" });

export default async function AdminDashboard() {
  const sql = getSql();
  const [totals, byStatus, byPlan, recent, daily, bySource] = await Promise.all([
    sql`
      SELECT
        COUNT(*)::int as total,
        COUNT(DISTINCT email)::int as unique_emails,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '24 hours')::int as last_24h,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days')::int as last_7d,
        COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days')::int as last_30d
      FROM leads
    `,
    sql`SELECT status, COUNT(*)::int as cnt FROM leads GROUP BY status ORDER BY cnt DESC`,
    sql`SELECT COALESCE(plan_slug, 'ไม่ระบุ') as plan_slug, COUNT(*)::int as cnt FROM leads GROUP BY plan_slug ORDER BY cnt DESC`,
    sql`SELECT id, name, email, phone, plan_slug, status, source, created_at FROM leads ORDER BY created_at DESC LIMIT 8`,
    sql`
      WITH days AS (
        SELECT generate_series(
          (NOW() AT TIME ZONE 'Asia/Bangkok')::date - INTERVAL '29 days',
          (NOW() AT TIME ZONE 'Asia/Bangkok')::date,
          INTERVAL '1 day'
        )::date as d
      )
      SELECT days.d as day, COALESCE(c.cnt, 0)::int as cnt
      FROM days
      LEFT JOIN (
        SELECT (created_at AT TIME ZONE 'Asia/Bangkok')::date as d, COUNT(*)::int as cnt
        FROM leads
        WHERE created_at >= (NOW() AT TIME ZONE 'Asia/Bangkok')::date - INTERVAL '29 days'
        GROUP BY 1
      ) c ON c.d = days.d
      ORDER BY days.d ASC
    `,
    sql`
      SELECT COALESCE(NULLIF(utm_source, ''), source, 'direct') as src, COUNT(*)::int as cnt
      FROM leads
      WHERE created_at >= NOW() - INTERVAL '30 days'
      GROUP BY 1
      ORDER BY cnt DESC
      LIMIT 8
    `,
  ]);
  const t = totals[0];

  return (
    <div className="bx-container max-w-[1200px]">
      <header className="mb-7">
        <h1 className="text-[1.6rem] font-extrabold text-ink">Dashboard</h1>
        <p className="text-[14px] text-muted">ภาพรวม leads และกิจกรรมล่าสุด</p>
      </header>

      <div className="mb-7 grid grid-cols-5 gap-3 max-[900px]:grid-cols-3 max-[620px]:grid-cols-2 [font-variant-numeric:tabular-nums]">
        <Stat label="Leads ทั้งหมด" value={t.total} />
        <Stat label="อีเมลไม่ซ้ำ" value={t.unique_emails} />
        <Stat label="24 ชม." value={t.last_24h} accent />
        <Stat label="7 วัน" value={t.last_7d} />
        <Stat label="30 วัน" value={t.last_30d} />
      </div>

      <Panel title="Leads ต่อวัน — 30 วันล่าสุด" className="mb-4">
        <TrendChart data={daily} />
      </Panel>

      <div className="grid grid-cols-[1fr_1fr] gap-4 max-[900px]:grid-cols-1">
        <Panel title="แยกตาม Status">
          <div className="flex flex-wrap gap-2">
            {LEAD_STATUSES.map((s) => {
              const row = byStatus.find((b) => b.status === s.value);
              return (
                <a key={s.value} href={`/admin/leads?status=${s.value}`} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-extrabold ${s.className} [font-variant-numeric:tabular-nums]`}>
                  {s.label}
                  <span className="opacity-80">{row?.cnt || 0}</span>
                </a>
              );
            })}
          </div>
        </Panel>

        <Panel title="แยกตามคลาส">
          <div className="flex flex-wrap gap-2">
            {byPlan.map((p) => (
              <a key={p.plan_slug} href={`/admin/leads?plan=${encodeURIComponent(p.plan_slug)}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-soft px-3 py-1.5 text-[13px] font-extrabold text-ink [font-variant-numeric:tabular-nums]">
                {p.plan_slug}
                <span className="text-muted">{p.cnt}</span>
              </a>
            ))}
          </div>
        </Panel>
      </div>

      {bySource.length > 0 ? (
        <Panel title="แหล่งที่มา — 30 วันล่าสุด" className="mt-4">
          <SourceBars data={bySource} />
        </Panel>
      ) : null}

      <Panel title="Leads ล่าสุด" className="mt-4" cta={{ href: "/admin/leads", label: "ดูทั้งหมด →" }}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-[14px]">
            <thead className="text-[12px] uppercase tracking-wide text-muted">
              <tr><Th>เวลา</Th><Th>ชื่อ</Th><Th>อีเมล</Th><Th>เบอร์โทร</Th><Th>คลาส</Th><Th>Source</Th><Th>Status</Th></tr>
            </thead>
            <tbody className="[font-variant-numeric:tabular-nums]">
              {recent.length === 0 ? (
                <tr><td colSpan={7} className="p-8 text-center text-muted">ยังไม่มี lead</td></tr>
              ) : recent.map((l) => (
                <tr key={l.id} className="border-t border-line">
                  <Td className="whitespace-nowrap text-muted">{fmtTime(l.created_at)}</Td>
                  <Td className="whitespace-nowrap">{l.name || "—"}</Td>
                  <Td><a href={`/admin/leads/${l.id}`} className="font-extrabold text-brand-blue hover:underline">{l.email}</a></Td>
                  <Td className="whitespace-nowrap">{l.phone ? <a href={`tel:${l.phone}`} className="text-ink hover:text-brand-blue hover:underline">{l.phone}</a> : <span className="text-muted">—</span>}</Td>
                  <Td>{l.plan_slug || "—"}</Td>
                  <Td className="text-muted">{l.source || "—"}</Td>
                  <Td><span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[12px] font-bold ${statusClass(l.status)}`}>{statusLabel(l.status)}</span></Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

function Stat({ label, value, accent }) {
  return (
    <div className={`rounded-lg border bg-white px-4 py-3 ${accent ? "border-brand-blue/30" : "border-line"}`}>
      <div className="text-[12px] font-semibold text-muted">{label}</div>
      <div className={`text-[1.7rem] font-extrabold leading-tight ${accent ? "text-brand-blue" : "text-ink"}`}>{value}</div>
    </div>
  );
}

function Panel({ title, children, className = "", cta }) {
  return (
    <section className={`rounded-lg border border-line bg-white p-5 ${className}`}>
      <header className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-[14px] font-extrabold text-ink">{title}</h2>
        {cta ? <a href={cta.href} className="text-[12.5px] font-bold text-brand-blue hover:underline">{cta.label}</a> : null}
      </header>
      {children}
    </section>
  );
}

function Th({ children }) { return <th className="px-3 py-2 font-bold">{children}</th>; }
function Td({ children, className = "" }) { return <td className={`px-3 py-2 ${className}`}>{children}</td>; }

function TrendChart({ data }) {
  const W = 800;
  const H = 180;
  const PAD = { t: 16, r: 16, b: 28, l: 32 };
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;
  const n = data.length;
  const max = Math.max(1, ...data.map((d) => d.cnt));
  const total = data.reduce((s, d) => s + d.cnt, 0);
  const avg = (total / n).toFixed(1);

  const xAt = (i) => PAD.l + (n <= 1 ? innerW / 2 : (i * innerW) / (n - 1));
  const yAt = (v) => PAD.t + innerH - (v / max) * innerH;

  const linePath = data.map((d, i) => `${i === 0 ? "M" : "L"} ${xAt(i).toFixed(1)} ${yAt(d.cnt).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L ${xAt(n - 1).toFixed(1)} ${(PAD.t + innerH).toFixed(1)} L ${xAt(0).toFixed(1)} ${(PAD.t + innerH).toFixed(1)} Z`;
  const yTicks = [0, Math.ceil(max / 2), max];
  const fmtDay = FMT_DAY;

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-[13px]">
        <span className="text-muted">รวม <strong className="ml-1 text-[1.05rem] font-extrabold text-brand-blue [font-variant-numeric:tabular-nums]">{total}</strong></span>
        <span className="text-muted">เฉลี่ย/วัน <strong className="ml-1 font-extrabold text-ink [font-variant-numeric:tabular-nums]">{avg}</strong></span>
        <span className="text-muted">สูงสุด <strong className="ml-1 font-extrabold text-ink [font-variant-numeric:tabular-nums]">{max}</strong></span>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="leads ต่อวัน 30 วัน" className="block h-auto w-full min-w-[600px]">
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B3A8C" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#1B3A8C" stopOpacity="0" />
            </linearGradient>
          </defs>
          {yTicks.map((t) => (
            <g key={t}>
              <line x1={PAD.l} x2={W - PAD.r} y1={yAt(t)} y2={yAt(t)} stroke="#DFE7F3" strokeDasharray="2 4" />
              <text x={PAD.l - 6} y={yAt(t) + 4} textAnchor="end" fontSize="11" fill="#526071" fontFamily="inherit">{t}</text>
            </g>
          ))}
          <path d={areaPath} fill="url(#trendFill)" />
          <path d={linePath} fill="none" stroke="#1B3A8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {data.map((d, i) => (
            <g key={i}>
              <circle cx={xAt(i)} cy={yAt(d.cnt)} r={d.cnt > 0 ? 3 : 2} fill={d.cnt > 0 ? "#1B3A8C" : "#DFE7F3"} />
              <title>{`${fmtDay.format(new Date(d.day))} — ${d.cnt} leads`}</title>
            </g>
          ))}
          {[0, Math.floor((n - 1) / 2), n - 1].map((i) => (
            <text key={i} x={xAt(i)} y={H - 8} textAnchor="middle" fontSize="11" fill="#526071" fontFamily="inherit">
              {fmtDay.format(new Date(data[i].day))}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

function SourceBars({ data }) {
  const max = Math.max(1, ...data.map((d) => d.cnt));
  return (
    <div className="grid gap-2">
      {data.map((d) => (
        <div key={d.src} className="grid grid-cols-[150px_1fr_50px] items-center gap-3 max-[620px]:grid-cols-[110px_1fr_40px]">
          <div className="truncate text-[13px] font-semibold text-ink" title={d.src}>{d.src}</div>
          <div className="relative h-5 overflow-hidden rounded-full bg-soft">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-sky transition-all"
              style={{ width: `${(d.cnt / max) * 100}%` }}
              aria-hidden="true"
            />
          </div>
          <div className="text-right text-[13px] font-extrabold text-ink [font-variant-numeric:tabular-nums]">{d.cnt}</div>
        </div>
      ))}
    </div>
  );
}
