import Stripe from "stripe";
import { Resend } from "resend";
import { after } from "next/server";
import { EBOOKS, BUNDLES } from "../../ebooks/_data";

const COURSE_ACCESS_URL = "https://bizdrive.app/#class";
const SUPPORT_EMAIL = "hello@bizdrive.co";

let _stripe;
let _resend;
const getStripe = () => (_stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY));
const getResend = () => (_resend ??= new Resend(process.env.RESEND_API_KEY));

const EMAIL_HEADER = `<div style="background:#f4f8ff;padding:32px 16px;font-family:'Segoe UI',Arial,sans-serif;"><div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #dfe7f3;border-radius:12px;overflow:hidden;"><div style="background:#1B3A8C;padding:26px 32px;"><span style="color:#F4C20F;font-size:22px;font-weight:bold;">BizDrive</span></div><div style="padding:32px;">`;

const EMAIL_FOOTER = (extra = "") => `<p style="margin:26px 0 0;color:#526071;font-size:14px;line-height:1.7;">หากมีคำถาม ทักได้ที่ <a href="mailto:${SUPPORT_EMAIL}" style="color:#1B3A8C;">${SUPPORT_EMAIL}</a> หรือ LINE @bizdrive${extra}</p></div><div style="background:#111827;padding:16px 32px;"><span style="color:#aeb7c5;font-size:12px;">© BizDrive · ขับเคลื่อนธุรกิจไทยด้วย AI</span></div></div></div>`;

function welcomeEmailHtml(name) {
  return `${EMAIL_HEADER}<h1 style="margin:0 0 14px;color:#111827;font-size:21px;">ยินดีต้อนรับสู่คลาสเรียน AI</h1><p style="margin:0 0 14px;color:#526071;font-size:15px;line-height:1.7;">สวัสดีครับ ${name} — ขอบคุณที่สมัครเรียน <b>คลาสเรียน AI สำหรับเจ้าของธุรกิจ</b> กับ BizDrive เราได้รับการชำระเงินของคุณเรียบร้อยแล้ว</p><p style="margin:0 0 22px;color:#526071;font-size:15px;line-height:1.7;">กดปุ่มด้านล่างเพื่อเข้าเรียนและดูขั้นตอนถัดไปได้เลย:</p><a href="${COURSE_ACCESS_URL}" style="display:inline-block;background:#F97316;color:#ffffff;font-weight:bold;text-decoration:none;padding:13px 30px;border-radius:999px;font-size:15px;">เข้าเรียนคลาส</a>${EMAIL_FOOTER()}`;
}

function ebookEmailHtml(name, books) {
  const items = books
    .map((b) => {
      const link = b.pdfUrl
        ? `<a href="${b.pdfUrl}" style="display:inline-block;background:#1B3A8C;color:#ffffff;font-weight:bold;text-decoration:none;padding:11px 22px;border-radius:8px;font-size:14px;">📥 ดาวน์โหลด PDF</a>`
        : `<span style="color:#c2410c;font-size:13px;">⚠️ ลิงก์ดาวน์โหลดจะส่งภายใน 24 ชม. — ทีมกำลังจัดเตรียมไฟล์ส่วนตัวให้</span>`;
      return `<div style="border:1px solid #dfe7f3;border-radius:10px;padding:16px;margin:12px 0;"><div style="font-weight:bold;color:#111827;font-size:15.5px;margin-bottom:6px;">${b.title}</div><div style="color:#526071;font-size:13.5px;margin-bottom:12px;">${b.pages} หน้า · PDF · ${b.tagline}</div>${link}</div>`;
    })
    .join("");
  const isBundle = books.length > 1;
  return `${EMAIL_HEADER}<h1 style="margin:0 0 14px;color:#111827;font-size:21px;">${isBundle ? "📚 eBook Bundle พร้อมดาวน์โหลดแล้ว" : "📖 eBook พร้อมดาวน์โหลดแล้ว"}</h1><p style="margin:0 0 14px;color:#526071;font-size:15px;line-height:1.7;">สวัสดีครับ ${name} — ขอบคุณที่ซื้อ eBook ของ BizDrive · ดาวน์โหลด PDF ได้เลยจากลิงก์ด้านล่าง</p><p style="margin:0 0 6px;color:#526071;font-size:15px;line-height:1.7;">📌 <b>เก็บอีเมลฉบับนี้ไว้</b> — ลิงก์ดาวน์โหลดใช้ได้ตลอด · ถ้าหลุดให้ทักทีมเพื่อขอลิงก์ใหม่</p>${items}${EMAIL_FOOTER(" — อย่าลืม forward เก็บไว้อีกที่")}`;
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

async function sendEbookEmail(email, name, books) {
  try {
    const isBundle = books.length > 1;
    await getResend().emails.send({
      from: process.env.FROM_EMAIL || "BizDrive <onboarding@resend.dev>",
      to: email,
      subject: isBundle
        ? `📚 eBook Bundle ของคุณพร้อมดาวน์โหลด (${books.length} เล่ม) — BizDrive`
        : `📖 eBook ของคุณพร้อมดาวน์โหลด — ${books[0]?.title?.split("—")[0]?.trim() || "BizDrive"}`,
      html: ebookEmailHtml(name, books),
    });
    console.log(`ส่ง eBook ${books.length} เล่มไปที่ ${email}`);
  } catch (err) {
    console.error("ส่ง eBook ไม่สำเร็จ:", err.message);
  }
}

async function resolveProductFromSession(session) {
  const meta = session.metadata || {};
  const productType = meta.product_type;
  if (productType === "ebook" && meta.ebook_slug) {
    const ebook = EBOOKS[meta.ebook_slug];
    if (ebook) return { kind: "ebook", books: [ebook] };
  }
  if (productType === "ebook_bundle" && meta.bundle_slug) {
    const bundle = BUNDLES.find((b) => b.slug === meta.bundle_slug);
    if (bundle) {
      const books = bundle.bookSlugs.map((s) => EBOOKS[s]).filter(Boolean);
      if (books.length > 0) return { kind: "bundle", books };
    }
  }

  // Fallback: Payment Link (no metadata) — match line item price_id with ebook stripePriceId
  try {
    const lineItems = await getStripe().checkout.sessions.listLineItems(session.id, { limit: 10 });
    const priceIds = lineItems.data.map((li) => li.price?.id).filter(Boolean);
    const matchedBooks = Object.values(EBOOKS).filter(
      (e) => e.stripePriceId && priceIds.includes(e.stripePriceId)
    );
    if (matchedBooks.length === 1) return { kind: "ebook", books: matchedBooks };
    if (matchedBooks.length > 1) return { kind: "bundle", books: matchedBooks };
  } catch (err) {
    console.error("Failed to fetch line items:", err.message);
  }

  return { kind: "course", books: [] };
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
      const product = await resolveProductFromSession(session);
      if (product.kind === "ebook" || product.kind === "bundle") {
        after(sendEbookEmail(email, name, product.books));
      } else {
        after(sendWelcomeEmail(email, name));
      }
    }
  }

  return Response.json({ received: true });
}
