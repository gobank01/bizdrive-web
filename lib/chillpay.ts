// Single source of truth สำหรับ products + order storage + email
// ใช้ Neon Postgres (ไม่ใช่ Vercel KV) — bizdrive-web มี @neondatabase/serverless อยู่แล้ว

import { getSql } from "@/lib/db";
import { EBOOKS } from "@/app/ebooks/_data";

// ============================================================
// PRODUCTS
// ============================================================
// amount = หน่วยสตางค์ (390 บาท = 39000)

export const PRODUCTS = {
  "ebook-manus-ai": {
    name: "Manus AI — วางระบบธุรกิจด้วย AI Agent",
    description: "eBook 86 หน้า · PDF · ภาษาไทย",
    amount: 390_00,
    kind: "ebook" as const,
    ebookSlug: "manus-ai",
  },
} as const;

export type ProductId = keyof typeof PRODUCTS;

export function getProduct(id: string) {
  return PRODUCTS[id as ProductId];
}

// ============================================================
// ORDERS — Neon Postgres
// ============================================================

export type OrderStatus = "pending" | "paid" | "failed" | "refunded";

export interface Order {
  payLinkId: number;
  productId: string;
  customerEmail?: string | null;
  amount: number;
  currency: string;
  status: OrderStatus;
  transactionId?: number | null;
  createdAt: string;
  paidAt?: string | null;
  paymentDate?: string | null;
}

export async function saveOrder(
  payLinkId: number | string,
  order: Partial<Order>
): Promise<Order> {
  const sql = getSql();
  const id = Number(payLinkId);
  const productId = order.productId ?? "";
  const amount = order.amount ?? 0;
  const currency = order.currency ?? "THB";
  const status = (order.status ?? "pending") as OrderStatus;

  const rows = await sql`
    INSERT INTO orders (
      pay_link_id, product_id, customer_email, amount, currency, status,
      transaction_id, paid_at, payment_date, metadata
    ) VALUES (
      ${id}, ${productId}, ${order.customerEmail ?? null}, ${amount}, ${currency}, ${status},
      ${order.transactionId ?? null}, ${order.paidAt ?? null}, ${order.paymentDate ?? null}, '{}'::jsonb
    )
    ON CONFLICT (pay_link_id) DO UPDATE SET
      status = EXCLUDED.status,
      transaction_id = COALESCE(EXCLUDED.transaction_id, orders.transaction_id),
      paid_at = COALESCE(EXCLUDED.paid_at, orders.paid_at),
      payment_date = COALESCE(EXCLUDED.payment_date, orders.payment_date),
      amount = CASE WHEN EXCLUDED.amount > 0 THEN EXCLUDED.amount ELSE orders.amount END,
      currency = EXCLUDED.currency,
      customer_email = COALESCE(orders.customer_email, EXCLUDED.customer_email)
    RETURNING *
  `;
  return rowToOrder(rows[0]);
}

export async function getOrder(payLinkId: number | string): Promise<Order | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT * FROM orders WHERE pay_link_id = ${Number(payLinkId)} LIMIT 1
  `;
  return rows[0] ? rowToOrder(rows[0]) : null;
}

function rowToOrder(r: any): Order {
  return {
    payLinkId: Number(r.pay_link_id),
    productId: r.product_id,
    customerEmail: r.customer_email,
    amount: Number(r.amount),
    currency: r.currency,
    status: r.status as OrderStatus,
    transactionId: r.transaction_id != null ? Number(r.transaction_id) : null,
    createdAt: r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at),
    paidAt: r.paid_at ? (r.paid_at instanceof Date ? r.paid_at.toISOString() : String(r.paid_at)) : null,
    paymentDate: r.payment_date ?? null,
  };
}

// ============================================================
// EMAIL — Resend (ใช้ template เดียวกับของเดิม)
// ============================================================

const SUPPORT_EMAIL = "hello@bizdrive.co";
const EMAIL_HEADER = `<div style="background:#f4f8ff;padding:32px 16px;font-family:'Segoe UI',Arial,sans-serif;"><div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #dfe7f3;border-radius:12px;overflow:hidden;"><div style="background:#1B3A8C;padding:26px 32px;"><span style="color:#F4C20F;font-size:22px;font-weight:bold;">BizDrive</span></div><div style="padding:32px;">`;
const EMAIL_FOOTER = (extra = "") =>
  `<p style="margin:26px 0 0;color:#526071;font-size:14px;line-height:1.7;">หากมีคำถาม ทักได้ที่ <a href="mailto:${SUPPORT_EMAIL}" style="color:#1B3A8C;">${SUPPORT_EMAIL}</a> หรือ LINE @bizdrive${extra}</p></div><div style="background:#111827;padding:16px 32px;"><span style="color:#aeb7c5;font-size:12px;">© BizDrive · ขับเคลื่อนธุรกิจไทยด้วย AI</span></div></div></div>`;

function ebookEmailHtml(name: string, books: any[]) {
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

export async function sendDownloadEmail(email: string, productId: string) {
  const product = getProduct(productId);
  if (!product) {
    console.warn(`[email] unknown productId: ${productId}`);
    return;
  }
  if (product.kind !== "ebook") {
    console.log(`[email] skip ${productId} (not an ebook)`);
    return;
  }

  const ebook = (EBOOKS as any)[product.ebookSlug];
  if (!ebook) {
    console.warn(`[email] ebook not found: ${product.ebookSlug}`);
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    console.log(`[email] RESEND_API_KEY not set — would send to ${email} for ${productId}`);
    return;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "BizDrive <onboarding@resend.dev>",
      to: email,
      subject: `📖 eBook ของคุณพร้อมดาวน์โหลด — ${ebook.title.split("—")[0].trim()}`,
      html: ebookEmailHtml("คุณ", [ebook]),
    });
    console.log(`[email] sent ebook ${productId} to ${email}`);
  } catch (err: any) {
    console.error(`[email] failed:`, err.message);
  }
}

// ============================================================
// Helpers — ChillPay date format (dd/MM/yyyy HH:mm:ss)
// ============================================================

export function chillpayDate(d: Date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function chillpayDatePlus(hours: number): string {
  return chillpayDate(new Date(Date.now() + hours * 3600_000));
}
