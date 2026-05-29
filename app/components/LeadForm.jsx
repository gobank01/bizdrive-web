"use client";

import { useState } from "react";

export default function LeadForm({ planSlug, source, variant = "primary", buttonLabel = "ฝากอีเมลแจ้งเตือน" }) {
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          plan_slug: planSlug,
          source,
          hp,
          utm_source: params?.get("utm_source"),
          utm_campaign: params?.get("utm_campaign"),
          utm_medium: params?.get("utm_medium"),
          referrer: typeof document !== "undefined" ? document.referrer : null,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(
          data.error === "invalid_email"
            ? "อีเมลไม่ถูกต้อง ลองใหม่อีกครั้ง"
            : "เกิดข้อผิดพลาด ทักมาที่ hello@bizdrive.co"
        );
        return;
      }
      setStatus("success");
      setMessage("ขอบคุณ — เราจะแจ้งทันทีที่เปิดรับสมัคร");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("เครือข่ายมีปัญหา ลองใหม่อีกครั้ง");
    }
  }

  const onLight = variant === "light";
  const onInk = variant === "ink";

  if (status === "success") {
    return (
      <output
        aria-live="polite"
        className={`block rounded-lg border px-5 py-4 text-center text-[14px] font-semibold ${
          onLight
            ? "border-white/25 bg-white/10 text-white"
            : onInk
            ? "border-ink/25 bg-ink/10 text-ink"
            : "border-brand-mint/35 bg-brand-mint/[.08] text-brand-blue"
        }`}
      >
        {message}
      </output>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate>
      <input
        type="text"
        name="hp"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        aria-label="honeypot"
        className="hidden"
      />

      <label htmlFor={`lead-email-${planSlug || "footer"}`} className="sr-only">
        อีเมล
      </label>
      <div className="flex gap-2 max-[620px]:flex-col">
        <input
          id={`lead-email-${planSlug || "footer"}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          aria-label="อีเมล"
          placeholder="อีเมลของคุณ"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 rounded-full border-2 bg-white px-5 py-[12px] text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted ${
            onLight ? "border-white focus:border-brand-yellow" : onInk ? "border-ink/30 focus:border-ink" : "border-line focus:border-brand-blue"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`btn ${onLight ? "bg-brand-yellow text-ink" : onInk ? "bg-ink text-white hover:brightness-110" : "btn-primary"} disabled:opacity-70`}
        >
          {status === "loading" ? "กำลังส่ง…" : buttonLabel}
        </button>
      </div>
      <label className={`flex items-start gap-2 text-[12px] leading-[1.55] ${onLight ? "text-white" : onInk ? "text-ink/85" : "text-muted"}`}>
        <input
          type="checkbox"
          name="consent"
          required
          defaultChecked={false}
          className="mt-[3px] size-4 flex-shrink-0 accent-brand-blue"
        />
        <span>
          ฉันยอมรับ
          {" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold underline underline-offset-2 ${onLight ? "text-brand-yellow" : onInk ? "text-ink" : "text-brand-blue"}`}
          >
            นโยบายความเป็นส่วนตัว
          </a>
          {" "}
          และยินยอมให้ BizDrive ติดต่อเรื่องคลาส (PDPA)
        </span>
      </label>

      {message && status === "error" ? (
        <p
          role="alert"
          aria-live="polite"
          className={`text-[13px] ${onLight ? "text-brand-yellow" : "text-brand-orange"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
