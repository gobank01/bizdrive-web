// Drop at: app/api/chillpay/webhook/paylink/route.js
//
// ChillPay ยิง webhook มาเมื่อมีการชำระเงินผ่าน PayLink เสร็จ
// (ทั้ง success และ fail).
// ตั้ง URL ใน ChillPay portal: https://yourdomain.com/api/chillpay/webhook/paylink

import { createWebhookHandler } from "@/lib/chillpay-sdk/nextjs/webhook.js";
import { saveOrder, getOrder, sendDownloadEmail } from "@/lib/chillpay";

export const POST = createWebhookHandler({
  // ⚠️ ลำดับ field ที่ ChillPay ใช้ทำ checksum ของ webhook
  // — ต้อง confirm กับ ChillPay support เป็นทางการ
  // — ถ้าโดน "Invalid checksum" log body ดิบที่ ChillPay ส่งมา แล้วลอง permutation
  fields: [
    "payLinkId",
    "transactionId",
    "status",
    "amount",
    "currency",
    "paymentDate",
  ],

  // ChillPay อาจส่งชื่อ field ของ checksum หลากหลาย — handler รองรับทั้ง 3 แบบ
  checksumField: "checkSum",

  async onEvent(body) {
    const { payLinkId, transactionId, status, amount, currency, paymentDate } = body;

    console.log("[chillpay-webhook]", { payLinkId, status, transactionId });

    const order = await getOrder(payLinkId);
    if (!order) {
      console.warn(`Order ${payLinkId} not found in DB — webhook came before checkout completed?`);
      // ก็ยัง save ไว้ — เผื่อมาทันทีหลัง create order
    }

    const normalized = String(status).toLowerCase();
    if (normalized === "success" || normalized === "paid") {
      await saveOrder(payLinkId, {
        ...order,
        status: "paid",
        transactionId: Number(transactionId),
        paidAt: new Date().toISOString(),
        amount: Number(amount),
        currency,
        paymentDate,
      });
      // ✅ ปลดล็อก content ให้ลูกค้า
      if (order?.customerEmail) {
        await sendDownloadEmail(order.customerEmail, order.productId);
      }
    } else if (normalized === "fail" || normalized === "failed") {
      await saveOrder(payLinkId, { ...order, status: "failed", transactionId: Number(transactionId) });
    } else if (normalized === "refunded" || normalized === "partial refunded") {
      await saveOrder(payLinkId, { ...order, status: "refunded", transactionId: Number(transactionId) });
      // TODO: revoke access
    }
  },
});

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
