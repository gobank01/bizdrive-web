import Stripe from "stripe";
import { Resend } from "resend";
import { after } from "next/server";

const COURSE_ACCESS_URL = "https://bizdrive-web.vercel.app/#class";
const SUPPORT_EMAIL = "hello@bizdrive.co";

let _stripe;
let _resend;
const getStripe = () => (_stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY));
const getResend = () => (_resend ??= new Resend(process.env.RESEND_API_KEY));

const EMAIL_HEADER = `<div style="background:#f4f8ff;padding:32px 16px;font-family:'Segoe UI',Arial,sans-serif;"><div style="max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #dfe7f3;border-radius:12px;overflow:hidden;"><div style="background:#1B3A8C;padding:26px 32px;"><span style="color:#F4C20F;font-size:22px;font-weight:bold;">BizDrive</span></div><div style="padding:32px;"><h1 style="margin:0 0 14px;color:#111827;font-size:21px;">ยินดีต้อนรับสู่คลาสเรียน AI</h1>`;

const EMAIL_FOOTER = `<p style="margin:0 0 22px;color:#526071;font-size:15px;line-height:1.7;">กดปุ่มด้านล่างเพื่อเข้าเรียนและดูขั้นตอนถัดไปได้เลย:</p><a href="${COURSE_ACCESS_URL}" style="display:inline-block;background:#F97316;color:#ffffff;font-weight:bold;text-decoration:none;padding:13px 30px;border-radius:999px;font-size:15px;">เข้าเรียนคลาส</a><p style="margin:26px 0 0;color:#526071;font-size:14px;line-height:1.7;">หากมีคำถาม ทักมาได้ที่ <a href="mailto:${SUPPORT_EMAIL}" style="color:#1B3A8C;">${SUPPORT_EMAIL}</a></p></div><div style="background:#111827;padding:16px 32px;"><span style="color:#aeb7c5;font-size:12px;">© BizDrive · ขับเคลื่อนธุรกิจไทยด้วย AI</span></div></div></div>`;

function welcomeEmailHtml(name) {
  return `${EMAIL_HEADER}<p style="margin:0 0 14px;color:#526071;font-size:15px;line-height:1.7;">สวัสดีครับ ${name} — ขอบคุณที่สมัครเรียน <b>คลาสเรียน AI สำหรับเจ้าของธุรกิจ</b> กับ BizDrive เราได้รับการชำระเงินของคุณเรียบร้อยแล้ว</p>${EMAIL_FOOTER}`;
}

async function sendWelcomeEmail(email, name) {
  try {
    await getResend().emails.send({
      from: process.env.FROM_EMAIL || "BizDrive <onboarding@resend.dev>",
      to: email,
      subject: "ยินดีต้อนรับสู่คลาสเรียน AI — BizDrive",
      html: welcomeEmailHtml(name),
    });
    console.log(`ส่งอีเมลต้อนรับไปที่ ${email} แล้ว`);
  } catch (err) {
    console.error("ส่งอีเมลไม่สำเร็จ:", err.message);
  }
}

export async function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}

export async function POST(request) {
  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event;
  try {
    event = await getStripe().webhooks.constructEventAsync(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("ตรวจสอบลายเซ็น webhook ไม่ผ่าน:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name || "คุณ";
    if (email) {
      after(sendWelcomeEmail(email, name));
    }
  }

  return Response.json({ received: true });
}
