"use client";

import { useState } from "react";

export default function CopyDiscountCode({ code }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-1.5 text-[12.5px] font-extrabold text-white shadow-brand-sm transition-colors hover:bg-brand-blue-dark"
    >
      {copied ? (
        <>
          <span aria-hidden="true">✓</span> คัดลอกแล้ว
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
          คัดลอกโค้ด
        </>
      )}
    </button>
  );
}
