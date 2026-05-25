import { cookies } from "next/headers";
import { getSql, logActivity } from "@/lib/db";
import { safeEq } from "@/lib/admin";

export const dynamic = "force-dynamic";

const SEED_LEADS = [
  { email: "koy.naruemon@example.com", name: "คุณก้อย นฤมล", plan_slug: "manus-ai-online", source: "salepage-offer", status: "new", days_ago: 0 },
  { email: "new.thanyaporn@example.com", name: "คุณนิว ธันยพร", plan_slug: "manus-ai-online", source: "home-subscribe", status: "new", days_ago: 1, utm_source: "facebook", utm_campaign: "ads-2026-q2" },
  { email: "bass.pichanon@example.com", name: "คุณบาส พิชญ์ชนน", plan_slug: "manus-ai-seminar", source: "salepage-final", status: "new", days_ago: 2 },
  { email: "ae.suchada@example.com", name: "คุณเอ สุชาดา", plan_slug: "manus-ai-private", source: "salepage-offer", status: "new", days_ago: 3, utm_source: "google", utm_campaign: "search-ai-class" },
  { email: "bee.kanyarat@example.com", name: "คุณบี กัญญารัตน์", plan_slug: "manus-ai-online", source: "home-subscribe", status: "new", days_ago: 4 },
  { email: "cee.thanawat@example.com", name: "คุณซี ธนวัฒน์", plan_slug: "manus-ai-seminar", source: "salepage-offer", status: "new", days_ago: 5, utm_source: "tiktok", utm_campaign: "shorts-ai" },

  { email: "dee.patcharin@example.com", name: "คุณดี พัชรินทร์", plan_slug: "manus-ai-private", source: "salepage-final", status: "contacted", days_ago: 6, contacted_days_ago: 4, tags: ["interested"] },
  { email: "ee.suttipong@example.com", name: "คุณอี สุทธิพงษ์", plan_slug: "manus-ai-seminar", source: "salepage-offer", status: "contacted", days_ago: 8, contacted_days_ago: 5, utm_source: "linkedin", utm_campaign: "b2b-2026" },
  { email: "f.napassorn@example.com", name: "คุณเอฟ ณภัสสร", plan_slug: "manus-ai-online", source: "home-subscribe", status: "contacted", days_ago: 9, contacted_days_ago: 6, notes: "ทักผ่าน LINE แล้ว — ยังไม่ตอบกลับ รอ 1 วัน" },
  { email: "g.chayanin@example.com", name: "คุณจี ชยานินทร์", plan_slug: "manus-ai-online", source: "salepage-offer", status: "contacted", days_ago: 10, contacted_days_ago: 7 },
  { email: "h.metanee@example.com", name: "คุณเฮช เมธินี", plan_slug: "manus-ai-seminar", source: "salepage-final", status: "contacted", days_ago: 11, contacted_days_ago: 8, tags: ["follow-up"], utm_source: "facebook", utm_campaign: "seminar-q2" },

  { email: "i.somchai@example.com", name: "คุณไอ สมชาย", plan_slug: "manus-ai-private", source: "salepage-offer", status: "qualified", days_ago: 12, contacted_days_ago: 10, notes: "มีงบ 50k+ พร้อมเริ่ม ม.ค. · ธุรกิจ e-commerce 8 หลัก", tags: ["hot-lead", "private-fit"], utm_source: "facebook", utm_campaign: "private-ads" },
  { email: "j.wantanee@example.com", name: "คุณเจ วันทนีย์", plan_slug: "manus-ai-seminar", source: "salepage-offer", status: "qualified", days_ago: 13, contacted_days_ago: 11, notes: "พร้อมจอง รอ confirm วัน" },
  { email: "k.phasakorn@example.com", name: "คุณเค ภาสกร", plan_slug: "manus-ai-private", source: "salepage-final", status: "qualified", days_ago: 14, contacted_days_ago: 12, tags: ["hot-lead"], utm_source: "google", utm_campaign: "search-bizdrive" },
  { email: "l.darunee@example.com", name: "คุณแอล ดารุณี", plan_slug: "manus-ai-online", source: "home-subscribe", status: "qualified", days_ago: 15, contacted_days_ago: 13 },

  { email: "m.benjaphon@example.com", name: "คุณเอ็ม เบญจพร", plan_slug: "manus-ai-online", source: "salepage-offer", status: "customer", days_ago: 18, contacted_days_ago: 15, notes: "ชำระแล้ว · เริ่มเรียนแล้ว 2 module", tags: ["paid"] },
  { email: "n.preecha@example.com", name: "คุณเอ็น ปรีชา", plan_slug: "manus-ai-seminar", source: "salepage-final", status: "customer", days_ago: 20, contacted_days_ago: 17, notes: "จองรอบ มิ.ย. — ส่ง confirmation แล้ว", tags: ["paid"], utm_source: "referral" },
  { email: "o.nuttida@example.com", name: "คุณโอ ณัฐธิดา", plan_slug: "manus-ai-private", source: "salepage-offer", status: "customer", days_ago: 25, contacted_days_ago: 22, notes: "Session 1 (Discovery) เสร็จแล้ว · นัด session 2 อาทิตย์หน้า", tags: ["paid", "vip"], utm_source: "referral" },

  { email: "p.songkran@example.com", name: "คุณพี สงกรานต์", plan_slug: "manus-ai-private", source: "salepage-offer", status: "lost", days_ago: 22, contacted_days_ago: 20, notes: "ไม่ตรงงบ — ขอกลับมาเดือนหน้า" },
  { email: "q.araya@example.com", name: "คุณคิว อารยา", plan_slug: "manus-ai-seminar", source: "salepage-final", status: "lost", days_ago: 28, contacted_days_ago: 26, notes: "เปลี่ยนไปลงคอร์สอื่น" },
];

export async function POST() {
  const jar = await cookies();
  const session = jar.get("admin_session")?.value;
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || !session || !safeEq(session, expected)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const sql = getSql();
  let inserted = 0;
  let cleared = 0;

  try {
    const deleted = await sql`DELETE FROM leads WHERE email LIKE '%@example.com' RETURNING id`;
    cleared = deleted.length;

    for (const lead of SEED_LEADS) {
      const createdShift = `${lead.days_ago} days`;
      const contactedShift = lead.contacted_days_ago != null ? `${lead.contacted_days_ago} days` : null;
      const rows = await sql`
        INSERT INTO leads (
          email, name, plan_slug, source, status, notes, tags,
          utm_source, utm_campaign, user_agent,
          contacted_at, last_activity_at, created_at
        ) VALUES (
          ${lead.email}, ${lead.name}, ${lead.plan_slug}, ${lead.source}, ${lead.status},
          ${lead.notes || null}, ${lead.tags || null},
          ${lead.utm_source || null}, ${lead.utm_campaign || null},
          'BizDrive Seed Bot',
          ${contactedShift ? sql`NOW() - ${contactedShift}::interval` : null},
          NOW() - ${createdShift}::interval,
          NOW() - ${createdShift}::interval
        )
        RETURNING id
      `;
      const id = rows[0].id;
      await logActivity(id, "created", { plan_slug: lead.plan_slug, source: lead.source, seeded: true });
      if (lead.status !== "new") {
        await logActivity(id, "status_changed", { from: "new", to: lead.status, seeded: true });
      }
      if (lead.contacted_days_ago != null) {
        await logActivity(id, "contacted", { seeded: true });
      }
      if (lead.notes) {
        await logActivity(id, "notes_updated", { length: lead.notes.length, seeded: true });
      }
      if (lead.tags?.length) {
        await logActivity(id, "tags_updated", { tags: lead.tags, seeded: true });
      }
      inserted++;
    }

    return Response.json({ ok: true, cleared, inserted });
  } catch (err) {
    return Response.json({ ok: false, error: err.message, inserted }, { status: 500 });
  }
}

export async function DELETE() {
  const jar = await cookies();
  const session = jar.get("admin_session")?.value;
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || !session || !safeEq(session, expected)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const sql = getSql();
  const deleted = await sql`DELETE FROM leads WHERE email LIKE '%@example.com' RETURNING id`;
  return Response.json({ ok: true, removed: deleted.length });
}
