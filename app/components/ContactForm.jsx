"use client";

import { useState } from "react";
import Link from "next/link";

const TOPICS = [
  { value: "", label: "เลือกหัวข้อที่ต้องการคุย…" },
  { value: "manus-online", label: "สมัครคลาส Manus AI Online (฿3,900)" },
  { value: "manus-seminar", label: "สมัครคลาส Manus AI Seminar (฿9,900)" },
  { value: "claude-online", label: "สมัครคลาส Claude AI Online (฿3,900)" },
  { value: "claude-seminar", label: "สมัครคลาส Claude AI Seminar (฿9,900)" },
  { value: "ai-editor-online", label: "สมัคร AI Video Editor Online (฿3,900)" },
  { value: "ai-editor-seminar", label: "สมัคร AI Video Editor Seminar (฿9,900)" },
  { value: "one-person-online", label: "ลงทะเบียนรอ One Person Business Online (เปิด ก.ค.)" },
  { value: "one-person-seminar", label: "ลงทะเบียนรอ One Person Business Seminar (เปิด ก.ค.)" },
  { value: "manus-private", label: "Private 1:1 Custom Coaching (฿39,000)" },
  { value: "ebook-manus-ai", label: "eBook Manus AI (฿390)" },
  { value: "ebook-claude", label: "eBook Claude AI (฿390)" },
  { value: "ebook-bundle", label: "eBook Bundle รวมทุกเล่ม (฿690)" },
  { value: "consulting", label: "ปรึกษาเรื่องวางระบบ AI ในธุรกิจ" },
  { value: "partnership", label: "ความร่วมมือ / Partnership" },
  { value: "other", label: "เรื่องอื่น ๆ" },
];

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", topic: "", message: "" });
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function setField(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const topicLabel = TOPICS.find((t) => t.value === form.topic)?.label;
      const planMap = {
        "manus-online": "manus-ai-online",
        "manus-seminar": "manus-ai-seminar",
        "manus-private": "manus-ai-private",
        "claude-online": "claude-online",
        "claude-seminar": "claude-seminar",
        "ai-editor-online": "ai-editor-online",
        "ai-editor-seminar": "ai-editor-seminar",
        "one-person-online": "one-person-online",
        "one-person-seminar": "one-person-seminar",
      };
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          name: `${form.firstName} ${form.lastName}`.trim(),
          phone: form.phone,
          plan_slug: planMap[form.topic] || null,
          topic: topicLabel || null,
          message: form.message,
          source: "contact-page",
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
        setError(data.error === "invalid_email" ? "อีเมลไม่ถูกต้อง ลองใหม่อีกครั้ง" : "เกิดข้อผิดพลาด ทักมาที่ hello@bizdrive.co");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError("เครือข่ายมีปัญหา ลองใหม่อีกครั้ง");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[14px] border border-brand-mint/40 bg-brand-mint/[.08] p-7 text-center">
        <div className="mx-auto mb-3 grid size-[60px] place-items-center rounded-full bg-brand-mint/20 text-[#047857]">
          <svg viewBox="0 0 24 24" className="size-8 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.5]" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-[1.2rem] font-extrabold text-[#047857]">ส่งข้อความเรียบร้อย</h3>
        <p className="mx-auto mt-2 max-w-[420px] text-[14.5px] text-ink/80">
          ขอบคุณที่ทักมา ทีม BizDrive จะติดต่อกลับภายใน 1 วันทำการ เช็คอีเมล (รวมถึงกล่องสแปม) ไว้ครับ
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          <a href="https://lin.ee/tLEXtzuJ" target="_blank" rel="noopener noreferrer" className="btn bg-brand-yellow text-ink hover:brightness-105">
            ทักผ่าน LINE ตอนนี้
          </a>
          <Link href="/" className="btn btn-outline">กลับหน้าแรก</Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5" noValidate>
      <Honeypot value={hp} onChange={setHp} />

      <div className="grid grid-cols-2 gap-3.5 max-[620px]:grid-cols-1">
        <Field label="ชื่อ" required>
          <input
            type="text"
            required
            value={form.firstName}
            onChange={setField("firstName")}
            autoComplete="given-name"
            placeholder="ชื่อจริง"
            className="form-input"
          />
        </Field>
        <Field label="นามสกุล" required>
          <input
            type="text"
            required
            value={form.lastName}
            onChange={setField("lastName")}
            autoComplete="family-name"
            placeholder="นามสกุล"
            className="form-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-3.5 max-[620px]:grid-cols-1">
        <Field label="อีเมล" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={setField("email")}
            autoComplete="email"
            placeholder="you@example.com"
            className="form-input"
          />
        </Field>
        <Field label="เบอร์โทร" required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={setField("phone")}
            autoComplete="tel"
            inputMode="tel"
            placeholder="095-334-0643"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="หัวข้อที่อยากคุย" required>
        <select
          required
          value={form.topic}
          onChange={setField("topic")}
          className="form-input"
        >
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value} disabled={!t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="ข้อความ" hint="เล่าให้เราฟังหน่อย — ธุรกิจคุณคืออะไร ติดอยู่ตรงไหน">
        <textarea
          value={form.message}
          onChange={setField("message")}
          rows={5}
          maxLength={2000}
          placeholder="เช่น มีร้านกาแฟ ทำคอนเทนต์เองไม่ไหว อยากให้ AI ช่วย…"
          className="form-input resize-y"
        />
      </Field>

      <div className="mt-1 grid gap-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-primary btn-lg w-full disabled:opacity-60"
        >
          {status === "loading" ? "กำลังส่ง…" : "ส่งข้อความ"}
        </button>
        {error ? <p className="text-center text-[13.5px] font-semibold text-[#c2410c]">{error}</p> : null}
        <p className="text-center text-[12.5px] text-muted">
          เราจะไม่แชร์ข้อมูลของคุณ ดู <Link href="/privacy" className="underline decoration-line underline-offset-2 hover:decoration-brand-blue">นโยบายความเป็นส่วนตัว</Link>
        </p>
      </div>
    </form>
  );
}

function Field({ label, hint, required, children }) {
  return (
    <label className="grid gap-1.5">
      <span className="flex items-baseline justify-between gap-2 text-[13px] font-extrabold text-ink">
        <span>
          {label} {required ? <span className="text-[#c2410c]">*</span> : null}
        </span>
        {hint ? <span className="text-[11.5px] font-semibold text-muted">{hint}</span> : null}
      </span>
      {children}
    </label>
  );
}

function Honeypot({ value, onChange }) {
  return (
    <div className="absolute -left-[9999px] top-auto size-0 overflow-hidden" aria-hidden="true">
      <label>
        ห้ามกรอก (ตรวจสอบ bot)
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
