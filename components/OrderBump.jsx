"use client";

import { useEffect, useState } from "react";

const OFFER_KEY = "bizdrive-bump-deadline-v2";
const OFFER_DURATION_MS = 45 * 60 * 1000; // 45 minutes

/**
 * OrderBump — pre-purchase upsell with countdown urgency.
 *
 * Toggle checkbox to upgrade from single ebook to bundle.
 * Countdown persists across refresh via localStorage (per-browser session).
 */
export function OrderBump({
  defaultLabel,
  defaultPrice,
  defaultUrl,
  bumpLabel,
  bumpPrice,
  bumpUrl,
  bumpItems = [],
  perItemPrice = 390,
}) {
  const [upgraded, setUpgraded] = useState(false);
  // Initial render shows full duration so SSR + first client paint match.
  // useEffect below overwrites with real remaining time from localStorage.
  const [remainingMs, setRemainingMs] = useState(OFFER_DURATION_MS);

  useEffect(() => {
    let deadline = Number(localStorage.getItem(OFFER_KEY));
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + OFFER_DURATION_MS;
      localStorage.setItem(OFFER_KEY, String(deadline));
    }
    const tick = () => setRemainingMs(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const itemCount = bumpItems.length || 4;
  const originalPrice = perItemPrice * itemCount;
  const savings = originalPrice - bumpPrice;
  const pct = Math.round((savings / originalPrice) * 100);

  const url = upgraded ? bumpUrl : defaultUrl;
  const price = upgraded ? bumpPrice : defaultPrice;
  const label = upgraded ? bumpLabel : defaultLabel;

  const expired = remainingMs === 0;
  const mm = String(Math.floor(remainingMs / 60000)).padStart(2, "0");
  const ss = String(Math.floor((remainingMs % 60000) / 1000)).padStart(2, "0");

  return (
    <div className="grid gap-3">
      {/* Header: urgency banner */}
      <div className={`flex items-center justify-between gap-3 rounded-t-[14px] px-4 py-2.5 text-white ${expired ? "bg-muted" : "bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#f97316]"}`}>
        <span className="text-[13px] font-extrabold uppercase tracking-wider">
          🔥 ข้อเสนอพิเศษ
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[13px] font-extrabold tabular-nums">
          ⏱ {expired ? "หมดเวลาแล้ว" : `เหลือ ${mm}:${ss}`}
        </span>
      </div>

      {/* Order bump card */}
      <label
        className={`-mt-3 group flex cursor-pointer items-start gap-3 rounded-b-[14px] border-2 border-t-0 p-4 transition-all ${
          upgraded
            ? "border-brand-yellow bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7] shadow-brand"
            : "border-brand-yellow/60 bg-brand-yellow/[.08] hover:bg-brand-yellow/[.14]"
        }`}
      >
        <input
          type="checkbox"
          checked={upgraded}
          onChange={(e) => setUpgraded(e.target.checked)}
          className="mt-1 h-5 w-5 flex-shrink-0 cursor-pointer accent-brand-blue"
        />
        <div className="flex-1 text-left">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[15.5px] font-extrabold text-ink">
              อัปเกรดเป็น Bundle {itemCount} เล่ม
            </span>
            <span className="inline-flex items-center rounded-full bg-[#dc2626] px-2 py-0.5 text-[11px] font-extrabold text-white">
              ลด {pct}%
            </span>
          </div>

          {/* Price comparison — make it obvious */}
          <div className="mt-2 flex flex-wrap items-baseline gap-2">
            <span className="text-[13px] text-muted line-through tabular-nums">
              ปกติ ฿{originalPrice.toLocaleString()}
            </span>
            <span className="text-[12.5px] text-muted">({perItemPrice.toLocaleString()} × {itemCount})</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-[20px] font-extrabold tabular-nums text-[#dc2626]">
              ฿{bumpPrice.toLocaleString()}
            </span>
            <span className="text-[13px] font-bold text-[#047857]">
              ประหยัด ฿{savings.toLocaleString()}
            </span>
          </div>

          {/* What's included */}
          {bumpItems.length > 0 ? (
            <ul className="mt-3 grid gap-1.5 text-[13.5px] text-ink/85">
              {bumpItems.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <span className="mt-0.5 text-[#047857]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <p className={`mt-3 text-[13px] font-bold ${expired ? "text-muted" : "text-[#dc2626]"}`}>
            {expired
              ? "ข้อเสนอนี้หมดอายุแล้ว — รีเฟรชเพื่อเริ่มใหม่"
              : "⏰ ติ๊กที่ช่อง → เปลี่ยนเป็น Bundle ราคาพิเศษทันที"}
          </p>
        </div>
      </label>

      {/* Main buy button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg w-full"
        data-upgraded={upgraded ? "1" : "0"}
      >
        {label} — ฿{price.toLocaleString()}
      </a>

      {upgraded ? (
        <p className="-mt-1 text-center text-[12.5px] font-extrabold text-[#047857]">
          ✓ Upgrade applied — รับครบ {itemCount} เล่ม ฿{bumpPrice.toLocaleString()} (ประหยัด ฿{savings.toLocaleString()})
        </p>
      ) : null}
    </div>
  );
}
