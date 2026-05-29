"use client";

import { useEffect, useState } from "react";

export default function Countdown({ at, rolling, planSlug, label, expiredLabel, accent = "blue" }) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(0);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());

    let resolvedTarget = 0;
    if (rolling?.days) {
      const key = `bizdrive_deadline_${planSlug || "default"}_v1`;
      let saved = null;
      try {
        saved = localStorage.getItem(key);
      } catch {}
      if (!saved) {
        const t = Date.now() + rolling.days * 86400000;
        saved = String(t);
        try {
          localStorage.setItem(key, saved);
        } catch {}
      }
      const parsed = Number(saved);
      resolvedTarget = Number.isFinite(parsed) ? parsed : new Date(saved).getTime();
    } else if (at) {
      resolvedTarget = new Date(at).getTime();
    }
    setTarget(resolvedTarget);

    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [at, rolling?.days, planSlug]);

  const diff = target ? Math.max(0, target - now) : 0;
  const expired = mounted && target > 0 && diff <= 0;

  const accents = {
    blue: { bg: "bg-brand-blue/[.06]", border: "border-brand-blue/25", num: "text-brand-blue", label: "text-brand-blue" },
    orange: { bg: "bg-[#c2410c]/[.06]", border: "border-[#c2410c]/25", num: "text-[#c2410c]", label: "text-[#c2410c]" },
    "blue-dark": { bg: "bg-brand-blue-dark/[.06]", border: "border-brand-blue-dark/25", num: "text-brand-blue-dark", label: "text-brand-blue-dark" },
  };
  const a = accents[accent] || accents.blue;

  if (expired) {
    return (
      <div className={`rounded-[14px] border-2 border-dashed px-4 py-3 text-center ${a.border} ${a.bg}`}>
        <p className={`text-[14px] font-extrabold ${a.label}`}>{expiredLabel || "ปิดรับสมัครแล้ว"}</p>
      </div>
    );
  }

  const days = mounted ? Math.floor(diff / 86400000) : 0;
  const hours = mounted ? Math.floor((diff % 86400000) / 3600000) : 0;
  const minutes = mounted ? Math.floor((diff % 3600000) / 60000) : 0;
  const seconds = mounted ? Math.floor((diff % 60000) / 1000) : 0;

  return (
    <div
      role="timer"
      aria-live="off"
      className={`rounded-[14px] border-2 px-4 py-3 ${a.border} ${a.bg}`}
    >
      <p className={`mb-2 text-center text-[12.5px] font-extrabold uppercase tracking-wider ${a.label}`}>
        {label}
      </p>
      <div className="grid grid-cols-4 gap-2 [font-variant-numeric:tabular-nums]" suppressHydrationWarning>
        <Box value={days} unit="วัน" colorClass={a.num} />
        <Box value={hours} unit="ชม." colorClass={a.num} />
        <Box value={minutes} unit="นาที" colorClass={a.num} />
        <Box value={seconds} unit="วินาที" colorClass={a.num} />
      </div>
    </div>
  );
}

function Box({ value, unit, colorClass }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="rounded-lg bg-white p-2 text-center shadow-brand-sm">
      <div className={`text-[clamp(1.4rem,3.4vw,1.8rem)] font-extrabold leading-none ${colorClass}`}>{padded}</div>
      <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-wider text-muted">{unit}</div>
    </div>
  );
}
