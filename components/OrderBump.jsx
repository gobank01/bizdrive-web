"use client";

import { useState } from "react";

/**
 * OrderBump — checkbox above the buy button that toggles between
 * the default product (single ebook) and an upgrade bundle.
 *
 * Both URLs are static Stripe Payment Links — no server round-trip needed.
 */
export function OrderBump({
  defaultLabel,
  defaultPrice,
  defaultUrl,
  bumpLabel,
  bumpPrice,
  bumpUrl,
  bumpHeadline,
  bumpSubline,
  bumpSavings,
}) {
  const [upgraded, setUpgraded] = useState(false);

  const url = upgraded ? bumpUrl : defaultUrl;
  const price = upgraded ? bumpPrice : defaultPrice;
  const label = upgraded ? bumpLabel : defaultLabel;

  return (
    <div className="grid gap-3">
      <label
        className={`group flex cursor-pointer items-start gap-3 rounded-[14px] border-2 p-4 transition-all ${
          upgraded
            ? "border-brand-yellow bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7] shadow-brand"
            : "border-brand-yellow/50 bg-brand-yellow/[.08] hover:bg-brand-yellow/[.14]"
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
            <span className="text-[15px] font-extrabold text-ink">
              🔥 {bumpHeadline}
            </span>
            {bumpSavings ? (
              <span className="inline-flex items-center rounded-full bg-[#dc2626] px-2 py-0.5 text-[11px] font-extrabold text-white">
                ประหยัด ฿{bumpSavings.toLocaleString()}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-[13.5px] leading-[1.55] text-ink/75">
            {bumpSubline}
          </p>
          <p className="mt-2 text-[13px] font-bold text-brand-blue">
            ติ๊กที่ช่อง → เปลี่ยนเป็น Bundle ทันที (จ่ายครั้งเดียว ฿{bumpPrice.toLocaleString()})
          </p>
        </div>
      </label>

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
        <p className="-mt-1 text-center text-[12.5px] font-semibold text-[#047857]">
          ✓ Upgrade applied — รับ 4 eBook ฿{bumpPrice.toLocaleString()}
        </p>
      ) : null}
    </div>
  );
}
