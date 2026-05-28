"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#class", label: "คลาสเรียน" },
  { href: "/ebooks", label: "eBook" },
  { href: "/#how", label: "วิธีทำงาน" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="nav-bar" id="nav">
      <div className="bx-container flex min-h-[72px] items-center justify-between gap-6">
        <a href="/" className="inline-flex min-h-[44px] items-center gap-2.5 font-extrabold">
          <img
            src="/assets/brand/logo-192.png"
            width="192"
            height="192"
            alt=""
            aria-hidden="true"
            className="h-[40px] w-[40px]"
          />
          <span className="text-xl text-brand-blue">BizDrive</span>
        </a>

        <nav className="flex items-center gap-[22px] max-[900px]:gap-[14px] max-[620px]:hidden" aria-label="เมนูหลัก">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
          ))}
          <a href="/contact" className="btn btn-ghost">
            ติดต่อ
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="เปิดเมนู"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="hidden h-[44px] w-[44px] place-items-center rounded-lg border border-line bg-white text-brand-blue transition-colors hover:bg-soft max-[620px]:grid"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.2]">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {open ? <MobileDrawer onClose={() => setOpen(false)} /> : null}
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-muted transition-colors hover:text-brand-blue"
    >
      {children}
    </a>
  );
}

function MobileDrawer({ onClose }) {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm animate-in fade-in"
        style={{ animation: "fadeIn 200ms ease-out" }}
      />
      <aside
        id="mobile-menu"
        role="dialog"
        aria-label="เมนูหลัก"
        aria-modal="true"
        className="fixed inset-y-0 right-0 z-50 grid w-[86%] max-w-[360px] grid-rows-[auto_1fr_auto] bg-white shadow-brand"
        style={{ animation: "slideInRight 220ms ease-out" }}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <a href="/" onClick={onClose} className="inline-flex items-center gap-2 font-extrabold">
            <img src="/assets/brand/logo-192.png" width="36" height="36" alt="" className="h-[32px] w-[32px]" />
            <span className="text-[1.05rem] text-brand-blue">BizDrive</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="ปิดเมนู"
            className="grid h-[40px] w-[40px] place-items-center rounded-lg text-ink hover:bg-soft"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.2]">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="grid content-start gap-1 overflow-y-auto px-3 py-4" aria-label="เมนูหลัก">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="grid grid-cols-[1fr_auto] items-center rounded-lg px-3 py-3 text-[15.5px] font-extrabold text-ink hover:bg-soft"
            >
              {l.label}
              <span aria-hidden="true" className="text-brand-blue">→</span>
            </a>
          ))}

          <div className="my-3 h-px bg-line" />

          <div className="px-3 pb-1.5 text-[11.5px] font-bold uppercase tracking-wider text-muted">คลาสเรียน</div>
          {[
            { href: "/manus/online", label: "Manus AI — Online" },
            { href: "/manus/seminar", label: "Manus AI — Seminar" },
            { href: "/claude/online", label: "Claude AI — Online" },
            { href: "/claude/seminar", label: "Claude AI — Seminar" },
            { href: "/ai-editor/online", label: "AI Video Editor — Online" },
            { href: "/ai-editor/seminar", label: "AI Video Editor — Seminar" },
            { href: "/one-person/online", label: "One Person Business — Online", soon: true },
            { href: "/one-person/seminar", label: "One Person Business — Seminar", soon: true },
            { href: "/private", label: "Private 1:1 Custom" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] text-ink/80 hover:bg-soft hover:text-brand-blue"
            >
              <span>{l.label}</span>
              {l.soon ? <span className="rounded-full bg-[#047857]/10 px-2 py-0.5 text-[10.5px] font-extrabold text-[#047857]">เปิด กค</span> : null}
            </a>
          ))}
        </nav>

        <div className="grid gap-2 border-t border-line p-4">
          <a href="/contact" onClick={onClose} className="btn btn-primary w-full">
            ติดต่อทีม BizDrive
          </a>
          <a href="https://lin.ee/tLEXtzuJ" target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full bg-[#00C300] text-white hover:brightness-105" style={{ borderColor: "#00A300" }}>
            ทักผ่าน LINE @bizdrive
          </a>
        </div>
      </aside>
    </>
  );
}
