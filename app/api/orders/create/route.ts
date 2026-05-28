// Drop at: app/api/orders/create/route.ts
//
// ฝั่ง server สร้าง order pending ลง DB ก่อน redirect ลูกค้าไป ChillPay.
// Webhook จะมาอัพเดทสถานะภายหลัง.

import { NextResponse } from "next/server";
import { saveOrder, getProduct } from "@/lib/chillpay";

export async function POST(req: Request) {
  const { payLinkId, productId, customerEmail } = await req.json();

  if (!payLinkId || !productId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const product = getProduct(productId);
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 400 });
  }

  const order = await saveOrder(payLinkId, {
    productId,
    customerEmail,
    amount: product.amount,
    currency: "THB",
    status: "pending",
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, order });
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
