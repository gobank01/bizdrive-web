"use client";

import { useState } from "react";

export default function LeadForm({ planSlug, source, variant = "primary", buttonLabel = "ฝากข้อมูลแจ้งเตือน" }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone,
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
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch {
      setStatus("error");
      setMessage("เครือข่ายมีปัญหา ลองใหม่อีกครั้ง");
    }
  }

  const onLight = variant === "light";
  const onInk = variant === "ink";
  const inputCls = `w-full rounded-xl border-2 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-[border-color] duration-150 placeholder:text-muted ${
    onLight ? "border-white focus:border-brand-yellow" : onInk ? "border-ink/30 focus:border-ink" : "border-line focus:border-brand-blue"
  }`;
  const labelCls = `text-[12.5px] font-semibold ${onLight ? "text-white" : onInk ? "text-ink/85" : "text-muted"}`;
  const req = <span aria-hidden="true" className={onLight ? "text-brand-yellow" : "text-brand-orange"}>*</span>;

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

      <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
        <label className="grid gap-1.5">
          <span className={labelCls}>ชื่อ {req}</span>
          <input
            type="text"
            required
            autoComplete="given-name"
            aria-label="ชื่อ"
            placeholder="ชื่อจริง"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputCls}
          />
        </label>
        <label className="grid gap-1.5">
          <span className={labelCls}>นามสกุล {req}</span>
          <input
            type="text"
            required
            autoComplete="family-name"
            aria-label="นามสกุล"
            placeholder="นามสกุล"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputCls}
          />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className={labelCls}>อีเมล {req}</span>
        <input
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          aria-label="อีเมล"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
        />
      </label>

      <label className="grid gap-1.5">
        <span className={labelCls}>เบอร์โทร {req}</span>
        <input
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9\-\s\+]{6,20}"
          aria-label="เบอร์โทร"
          placeholder="095-XXX-XXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputCls}
        />
      </label>

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

      <button
        type="submit"
        disabled={status === "loading"}
        className={`btn ${onLight ? "bg-brand-yellow text-ink" : onInk ? "bg-ink text-white hover:brightness-110" : "btn-primary"} disabled:opacity-70`}
      >
        {status === "loading" ? "กำลังส่ง…" : buttonLabel}
      </button>

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
