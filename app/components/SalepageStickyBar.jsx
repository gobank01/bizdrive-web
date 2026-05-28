"use client";

import { useEffect, useState } from "react";

export default function SalepageStickyBar({ plan }) {
  const [show, setShow] = useState(false);
  const [now, setNow] = useState(0);
  const [target, setTarget] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());

    function onScroll() {
      setShow(window.scrollY > 500);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let resolvedTarget = 0;
    const d = plan?.deadline;
    if (d?.rolling?.days) {
      const key = `bizdrive_deadline_${plan.slug}_v1`;
      let saved = null;
      try {
        saved = localStorage.getItem(key);
      } catch {}
      if (!saved) {
        const t = Date.now() + d.rolling.days * 86400000;
        saved = String(t);
        try {
          localStorage.setItem(key, saved);
        } catch {}
      }
      const parsed = Number(saved);
      resolvedTarget = Number.isFinite(parsed) ? parsed : new Date(saved).getTime();
    } else if (d?.at) {
      resolvedTarget = new Date(d.at).getTime();
    }
    setTarget(resolvedTarget);

    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, [plan?.slug, plan?.deadline?.rolling?.days, plan?.deadline?.at]);

  const diff = target ? Math.max(0, target - now) : 0;
  const days = mounted ? Math.floor(diff / 86400000) : 0;
  const hours = mounted ? Math.floor((diff % 86400000) / 3600000) : 0;
  const minutes = mounted ? Math.floor((diff % 3600000) / 60000) : 0;
  const expired = mounted && target > 0 && diff <= 0;

  if (!plan) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white shadow-brand transition-transform duration-200 ${show ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!show}
    >
      <div className="bx-container flex items-center gap-3 py-2 max-w-[1200px]">
        <div className="hidden flex-shrink-0 min-[640px]:block">
          <div className="text-[12px] font-semibold uppercase tracking-wider text-muted">{plan.badge}</div>
          <div className="truncate text-[14px] font-extrabold text-ink">{plan.name.replace("Manus AI — ", "Manus AI · ")}</div>
        </div>
        <div className="hidden flex-1 min-[820px]:block">
          {!expired && target > 0 ? (
            <div className="flex items-center gap-2 [font-variant-numeric:tabular-nums]" suppressHydrationWarning>
              <span className="text-[11.5px] font-semibold uppercase tracking-wider" style={{ color: "var(--btn-outline-color, #c2410c)" }}>เหลือเวลา</span>
              <span className="rounded-md px-2 py-1 text-[13px] font-extrabold" style={{ color: "var(--btn-outline-color, #c2410c)", background: "color-mix(in srgb, var(--btn-outline-color, #c2410c) 12%, transparent)" }}>
                {days}d {String(hours).padStart(2, "0")}h {String(minutes).padStart(2, "0")}m
              </span>
            </div>
          ) : null}
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 min-[640px]:flex-none">
          <div className="flex items-baseline gap-1.5 max-[480px]:hidden">
            <span className="text-[11px] font-semibold text-muted line-through [font-variant-numeric:tabular-nums]">
              {plan.originalPrice ? `฿${plan.originalPrice.toLocaleString()}` : ""}
            </span>
            <span className="text-[18px] font-extrabold [font-variant-numeric:tabular-nums]" style={{ color: "var(--btn-outline-color, #1b3a8c)" }}>
              {plan.priceLabel}
            </span>
          </div>
          <a
            href="#offer"
            className="btn btn-primary"
            style={{ minHeight: "40px", padding: "8px 18px", fontSize: "13.5px" }}
          >
            สมัครเลย
          </a>
        </div>
      </div>
    </div>
  );
}
