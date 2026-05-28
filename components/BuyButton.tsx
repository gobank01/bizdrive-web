// Drop at: components/BuyButton.tsx
//
// ตัวอย่างปุ่ม "ซื้อเลย" ที่:
// 1. สร้าง PayLink ผ่าน /api/chillpay/paylink/generate
// 2. บันทึก order pending ลง DB
// 3. redirect ลูกค้าไปหน้าจ่ายของ ChillPay
//
// Usage:
//   <BuyButton productId="course-foundation" />
//   <BuyButton productId="ebook" email="user@example.com" />

"use client";

import { useState } from "react";
import { ChillPay } from "@/lib/chillpay-sdk/client/chillpay.js";
import { PRODUCTS, type ProductId } from "@/lib/chillpay";

const cp = new ChillPay({ base: "/api/chillpay" });

interface Props {
  productId: ProductId;
  email?: string;
  className?: string;
  children?: React.ReactNode;
}

function chillpayDate(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function BuyButton({ productId, email, className, children }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const product = PRODUCTS[productId];

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const now = new Date();
      const expires = new Date(now.getTime() + 24 * 3600_000); // 24 ชม.

      const res = await cp.paylink.generate({
        productName: product.name,
        productDescription: product.description,
        amount: product.amount,
        currency: "THB",
        paymentLimit: 1,
        startDate: chillpayDate(now),
        expiredDate: chillpayDate(expires),
      });

      if (res.status !== 200 || !res.data?.paymentUrl) {
        throw new Error(res.message || "ไม่สามารถสร้างลิงก์ชำระเงินได้");
      }

      // บันทึก order pending — ฝั่ง server (จะใช้ webhook อัพเดทสถานะภายหลัง)
      await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payLinkId: res.data.payLinkId,
          productId,
          customerEmail: email,
        }),
      });

      // ไปหน้าจ่ายเงิน ChillPay
      window.location.href = res.data.paymentUrl;
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={className ?? "px-6 py-3 bg-[#1B3A8C] text-[#F4C20F] font-semibold rounded-lg disabled:opacity-50"}
      >
        {loading ? "กำลังสร้างลิงก์..." : children ?? `ซื้อเลย ฿${(product.amount / 100).toLocaleString("th-TH")}`}
      </button>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
