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

const PLAN_LABELS = {
  "manus-ai-online": "Manus AI — Online",
  "manus-ai-seminar": "Manus AI — Seminar",
  "manus-ai-private": "Private 1:1 Custom",
  "claude-online": "Claude AI — Online",
  "claude-seminar": "Claude AI — Seminar",
  "ai-editor-online": "AI Video Editor — Online",
  "ai-editor-seminar": "AI Video Editor — Seminar",
  "one-person-online": "One Person Business — Online",
  "one-person-seminar": "One Person Business — Seminar",
};

const LINE_URL = "https://lin.ee/tLEXtzuJ";

// Auto-reply to the customer. Needs a verified sending domain in Resend
// (FROM_EMAIL=hello@bizdrive.co) — the onboarding@resend.dev sender only
// delivers to the account owner, not to real customers.
async function notifyCustomer(lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL || "BizDrive <onboarding@resend.dev>";
  if (!apiKey || !lead.email) return;
  _resend ??= new Resend(apiKey);
  const interest = lead.plan_label
    ? `<p style="margin:0 0 14px;font-size:15px;color:#111827;">เรื่องที่คุณสนใจ: <strong style="color:#1B3A8C;">${lead.plan_label}</strong></p>`
    : "";
  try {
    await _resend.emails.send({
      from,
      to: lead.email,
      replyTo: "hello@bizdrive.co",
      subject: "ได้รับข้อมูลของคุณแล้ว — BizDrive จะติดต่อกลับเร็ว ๆ นี้",
      html: `<div style="font-family:'Segoe UI',Arial,sans-serif;background:#f4f8ff;padding:28px 16px;">
        <div style="max-width:540px;margin:0 auto;background:#fff;border:1px solid #dfe7f3;border-radius:12px;overflow:hidden;">
          <div style="background:#1B3A8C;padding:22px 28px;">
            <span style="color:#fff;font-weight:800;font-size:20px;letter-spacing:.3px;">BIZ<span style="color:#F4C20F;">DRIVE</span></span>
          </div>
          <div style="padding:28px;">
            <h1 style="margin:0 0 14px;font-size:20px;color:#1B3A8C;">ขอบคุณที่ติดต่อเข้ามาครับ 🙏</h1>
            <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#111827;">เราได้รับข้อมูลของคุณเรียบร้อยแล้ว — ทีมงาน BizDrive จะติดต่อกลับโดยเร็วที่สุด (ภายในเวลาทำการ)</p>
            ${interest}
            <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#111827;">ระหว่างนี้ ถ้าอยากคุยเลย ทักหาเราได้ที่ LINE ทันที 👇</p>
            <a href="${LINE_URL}" style="display:inline-block;background:#06C755;color:#fff;font-weight:700;font-size:15px;text-decoration:none;padding:12px 24px;border-radius:10px;">💬 ทักไลน์ @bizdrive168</a>
            <p style="margin:24px 0 0;font-size:14px;color:#526071;">— พี่แบงค์ &amp; ทีม BizDrive<br/><span style="color:#94a3b8;">เริ่มเล็ก แต่สเกลใหญ่</span></p>
          </div>
          <div style="background:#f4f8ff;padding:14px 28px;border-top:1px solid #dfe7f3;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">อีเมลนี้ส่งอัตโนมัติเพราะคุณกรอกฟอร์มบนเว็บไซต์ BizDrive · ตอบกลับอีเมลนี้เพื่อคุยกับทีมได้</p>
          </div>
        </div>
      </div>`,
    });
  } catch (err) {
    console.error("notify customer failed:", err.message);
  }
}

// Telegram push to the team chat. No-op until TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID are set.
async function notifyTelegram(lead) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const text = [
    "🔔 Lead ใหม่ — BizDrive",
    `📧 ${lead.email}`,
    lead.phone ? `📱 ${lead.phone}` : null,
    lead.plan_label ? `📘 ${lead.plan_label}` : null,
    `🌐 source: ${lead.source || "—"}`,
    lead.topic ? `💬 ${lead.topic}` : null,
    lead.message ? `📝 ${lead.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
  } catch (err) {
    console.error("notify telegram failed:", err.message);
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
    after(notifyCustomer({ email, plan_label: plan_slug ? PLAN_LABELS[plan_slug] : null }));
    after(notifyTelegram({ email, phone, plan_label: plan_slug ? PLAN_LABELS[plan_slug] : null, source, topic, message }));
    return Response.json({ ok: true }, { headers: cors });
  } catch (err) {
    console.error("insert lead failed:", err.message);
    return Response.json({ ok: false, error: "db_error" }, { status: 500, headers: cors });
  }
}
