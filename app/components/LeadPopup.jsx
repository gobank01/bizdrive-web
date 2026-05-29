"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "bizdrive_popup_v1";
const DELAY_MS = 15000;

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [trigger, setTrigger] = useState(""); // "timer" | "exit"
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hp, setHp] = useState("");
  const dismissedRef = useRef(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = !!localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (dismissed) {
      dismissedRef.current = true;
      return;
    }

    const timer = setTimeout(() => {
      if (!dismissedRef.current) {
        setTrigger("timer");
        setOpen(true);
      }
    }, DELAY_MS);

    function onMouseOut(e) {
      if (dismissedRef.current) return;
      if (!e.relatedTarget && e.clientY <= 0) {
        setTrigger((t) => t || "exit");
        setOpen(true);
      }
    }
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) close();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function dismissForSession() {
    dismissedRef.current = true;
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {}
  }

  function close() {
    setOpen(false);
    dismissForSession();
  }

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
          phone,
          source: trigger === "exit" ? "popup-exit" : "popup-timer",
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
        setMessage(data.error === "invalid_email" ? "อีเมลไม่ถูกต้อง" : "เกิดข้อผิดพลาด ลองใหม่อีกครั้ง");
        return;
      }
      setStatus("success");
      setMessage("รับข้อมูลของคุณแล้ว — ทีมจะติดต่อกลับเร็ว ๆ นี้");
      dismissForSession();
      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.location.href = `/thank-you?source=${encodeURIComponent(trigger === "exit" ? "popup-exit" : "popup-timer")}`;
        }, 600);
      }
    } catch {
      setStatus("error");
      setMessage("เครือข่ายมีปัญหา ลองใหม่อีกครั้ง");
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="รับข้อเสนอพิเศษ"
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-3 backdrop-blur-sm min-[640px]:items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-[18px] bg-white shadow-brand max-[620px]:max-w-full">
        <div className="relative bg-gradient-to-br from-brand-blue to-brand-blue-dark px-6 py-5 text-white">
          <button
            type="button"
            onClick={close}
            aria-label="ปิด"
            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-width:2.2]">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-2.5 py-0.5 text-[11px] font-extrabold text-ink">
            <span aria-hidden="true">🎁</span> ของแถมพิเศษ
          </span>
          <h2 className="mt-2.5 text-[1.4rem] font-extrabold leading-[1.25]">
            {trigger === "exit" ? "เดี๋ยวก่อน — รับของแถมไปก่อน" : "รับส่วนลด 10% + eBook ฟรี"}
          </h2>
          <ul className="mt-2.5 grid list-none gap-1 text-[13.5px] text-white/95">
            <li className="flex items-start gap-1.5">
              <span aria-hidden="true" className="mt-[1px] text-brand-yellow">✓</span>
              <span><strong className="text-brand-yellow">ส่วนลด 10%</strong> เมื่อสมัครคลาส Manus AI ทุกระดับ</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span aria-hidden="true" className="mt-[1px] text-brand-yellow">✓</span>
              <span><strong className="text-brand-yellow">eBook "เริ่มใช้ Manus AI สำหรับธุรกิจ"</strong> <span className="text-white/75">มูลค่า ฿990 · ฟรี</span></span>
            </li>
          </ul>
        </div>

        {status === "success" ? (
          <div className="px-6 py-7 text-center">
            <div className="mx-auto mb-3 grid size-14 place-items-center rounded-full bg-[#047857]/10 text-[#047857]">
              <svg viewBox="0 0 24 24" className="size-7 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.5]">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-[1.1rem] font-extrabold text-ink">ขอบคุณ!</h3>
            <p className="mt-1 text-[14px] text-muted">{message}</p>
            <button type="button" onClick={close} className="btn btn-outline mt-5 text-[13.5px]" style={{ minHeight: "40px", padding: "8px 22px" }}>
              ปิด
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-3 px-6 py-5">
            <input
              type="text"
              name="hp"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <label className="grid gap-1.5">
              <span className="text-[12.5px] font-semibold text-muted">อีเมล <span className="text-brand-orange">*</span></span>
              <input
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                spellCheck={false}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border-2 border-line bg-white px-4 py-2.5 text-[15px] text-ink outline-none focus:border-brand-blue"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-[12.5px] font-semibold text-muted">เบอร์โทร (ไม่บังคับ)</span>
              <input
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="095-XXX-XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9\-\s\+]{6,20}"
                className="rounded-lg border-2 border-line bg-white px-4 py-2.5 text-[15px] text-ink outline-none focus:border-brand-blue"
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn btn-primary mt-1 disabled:opacity-70"
            >
              {status === "loading" ? "กำลังส่ง…" : "รับส่วนลด + eBook ฟรี"}
            </button>
            {message && status === "error" ? (
              <p role="alert" aria-live="polite" className="text-center text-[13px] text-brand-orange">
                {message}
              </p>
            ) : (
              <p className="text-center text-[11.5px] text-muted">
                ข้อมูลจะใช้แจ้งเรื่องคลาส/โปรเท่านั้น · ไม่สแปม ·
                <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-brand-blue hover:underline">นโยบายความเป็นส่วนตัว</Link>
              </p>
            )}
            <button
              type="button"
              onClick={close}
              className="text-[12.5px] font-semibold text-muted hover:text-ink"
            >
              ไม่ใช่ตอนนี้
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
