import { getSql, logActivity } from "@/lib/db";
import { after } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

let _resend;
async function notifyTeam(lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.FROM_EMAIL || "BizDrive <onboarding@resend.dev>";
  if (!apiKey || !to) return;
  _resend ??= new Resend(apiKey);
  try {
    await _resend.emails.send({
      from,
      to,
      subject: `Lead ใหม่ — ${lead.email} (${lead.plan_slug || "ไม่ระบุคลาส"})`,
      html: `<div style="font-family:'Segoe UI',Arial,sans-serif;padding:24px;background:#f4f8ff;">
        <div style="max-width:520px;margin:0 auto;background:#fff;border:1px solid #dfe7f3;border-radius:10px;padding:24px;">
          <h2 style="margin:0 0 12px;color:#1B3A8C;">มี lead ใหม่</h2>
          <table style="width:100%;font-size:14px;color:#111827;">
            <tr><td style="padding:6px 0;color:#526071;">อีเมล</td><td style="padding:6px 0;font-weight:bold;">${lead.email}</td></tr>
            ${lead.phone ? `<tr><td style="padding:6px 0;color:#526071;">เบอร์โทร</td><td style="padding:6px 0;font-weight:bold;">${lead.phone}</td></tr>` : ""}
            ${lead.topic ? `<tr><td style="padding:6px 0;color:#526071;">หัวข้อ</td><td style="padding:6px 0;">${lead.topic}</td></tr>` : ""}
            <tr><td style="padding:6px 0;color:#526071;">คลาส</td><td style="padding:6px 0;">${lead.plan_slug || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#526071;">Source</td><td style="padding:6px 0;">${lead.source || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#526071;">UTM source</td><td style="padding:6px 0;">${lead.utm_source || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#526071;">UTM campaign</td><td style="padding:6px 0;">${lead.utm_campaign || "—"}</td></tr>
            <tr><td style="padding:6px 0;color:#526071;">Referrer</td><td style="padding:6px 0;font-size:12px;">${lead.referrer || "—"}</td></tr>
          </table>
          ${lead.message ? `<div style="margin-top:14px;padding:12px;background:#f4f8ff;border-radius:6px;font-size:13.5px;color:#111827;white-space:pre-wrap;"><strong style="display:block;color:#526071;font-size:11px;text-transform:uppercase;margin-bottom:6px;">ข้อความ</strong>${lead.message}</div>` : ""}
        </div>
      </div>`,
    });
  } catch (err) {
    console.error("notify team failed:", err.message);
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 250;

// Cross-origin lead capture (e.g. bizdrive-skill.com) — allowlist only.
const ALLOWED_ORIGINS = new Set([
  "https://bizdrive-skill.com",
  "https://www.bizdrive-skill.com",
  "http://localhost:3000",
  "http://localhost:3001",
]);

function corsHeaders(origin) {
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export async function OPTIONS(request) {
  return new Response(null, { status: 204, headers: corsHeaders(request.headers.get("origin")) });
}

function trim(value) {
  if (typeof value !== "string") return null;
  const v = value.trim();
  if (!v) return null;
  return v.length > MAX_LEN ? v.slice(0, MAX_LEN) : v;
}

export async function POST(request) {
  const cors = corsHeaders(request.headers.get("origin"));

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400, headers: cors });
  }

  if (body && typeof body.hp === "string" && body.hp.length > 0) {
    return Response.json({ ok: true }, { headers: cors });
  }

  const email = trim(body?.email)?.toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400, headers: cors });
  }

  const name = trim(body?.name);
  const phone = trim(body?.phone);
  const plan_slug = trim(body?.plan_slug);
  const source = trim(body?.source);
  const topic = trim(body?.topic);
  const rawMessage = typeof body?.message === "string" ? body.message.trim() : null;
  const message = rawMessage ? rawMessage.slice(0, 2000) : null;
  const notes = message ? (topic ? `[${topic}] ${message}` : message) : null;
  const utm_source = trim(body?.utm_source);
  const utm_campaign = trim(body?.utm_campaign);
  const utm_medium = trim(body?.utm_medium);
  const referrer = trim(body?.referrer);
  const user_agent = trim(request.headers.get("user-agent"));

  try {
    const sql = getSql();
    const rows = await sql`
      INSERT INTO leads (email, name, phone, plan_slug, source, notes, utm_source, utm_campaign, utm_medium, referrer, user_agent)
      VALUES (${email}, ${name}, ${phone}, ${plan_slug}, ${source}, ${notes}, ${utm_source}, ${utm_campaign}, ${utm_medium}, ${referrer}, ${user_agent})
      RETURNING id
    `;
    const leadId = rows[0]?.id;
    if (leadId) {
      after(logActivity(leadId, "created", { plan_slug, source, utm_source, utm_campaign, has_phone: !!phone, has_message: !!message, topic }));
    }
    after(notifyTeam({ email, phone, plan_slug, source, utm_source, utm_campaign, referrer, message, topic }));
    return Response.json({ ok: true }, { headers: cors });
  } catch (err) {
    console.error("insert lead failed:", err.message);
    return Response.json({ ok: false, error: "db_error" }, { status: 500, headers: cors });
  }
}
