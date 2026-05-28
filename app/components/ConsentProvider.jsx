"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

const CONSENT_KEY = "bizdrive_consent_v1";
const CONSENT_VERSION = 1;
const GTM_ID = "GTM-PTS3CZDW";

export default function ConsentProvider() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const [state, setState] = useState({ ready: false, banner: false, analytics: false });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      const saved = raw ? JSON.parse(raw) : null;
      if (saved && saved.v === CONSENT_VERSION) {
        setState({ ready: true, banner: false, analytics: !!saved.analytics });
        return;
      }
    } catch {}
    if (isAdmin) {
      setState({ ready: true, banner: false, analytics: true });
      return;
    }
    setState({ ready: true, banner: true, analytics: false });

    function onOpen() {
      setState((s) => ({ ...s, banner: true }));
    }
    window.addEventListener("bizdrive:open-consent", onOpen);
    return () => window.removeEventListener("bizdrive:open-consent", onOpen);
  }, [isAdmin]);

  function save(analytics) {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ v: CONSENT_VERSION, analytics, at: new Date().toISOString() })
      );
    } catch {}
    setState({ ready: true, banner: false, analytics });
  }

  return (
    <>
      {state.analytics ? <Analytics /> : null}
      {state.analytics ? <GoogleTagManager gtmId={GTM_ID} /> : null}
      {state.ready && state.banner && !isAdmin ? (
        <ConsentBanner onAcceptAll={() => save(true)} onDecline={() => save(false)} />
      ) : null}
    </>
  );
}

function ConsentBanner({ onAcceptAll, onDecline }) {
  return (
    <div
      role="dialog"
      aria-label="แจ้งเรื่องคุกกี้และข้อมูลส่วนบุคคล"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 max-[620px]:px-2 max-[620px]:pb-2"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-[960px] rounded-2xl border border-line bg-white p-5 shadow-brand max-[620px]:p-4">
        <div className="grid grid-cols-[1fr_auto] gap-5 max-[800px]:grid-cols-1">
          <div>
            <div className="mb-1.5 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-[11.5px] font-extrabold text-brand-blue">
              <span aria-hidden="true">🔒</span> PDPA
            </div>
            <h2 className="text-[15.5px] font-extrabold text-ink">เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์</h2>
            <p className="mt-1.5 text-[13.5px] leading-[1.65] text-muted">
              BizDrive เก็บข้อมูลการใช้งานแบบไม่ระบุตัวตน (Vercel Analytics + Google Tag Manager) เพื่อพัฒนาคุณภาพเว็บ
              — คุณเลือกได้ว่าจะให้เก็บหรือไม่ และเปลี่ยนใจเมื่อไหร่ก็ได้ที่ลิงก์ "ตั้งค่าคุกกี้" ใต้เว็บ
              {" "}
              <a href="/privacy" className="font-bold text-brand-blue underline-offset-2 hover:underline">
                อ่านนโยบายความเป็นส่วนตัว →
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-2 max-[620px]:flex-col">
            <button
              type="button"
              onClick={onDecline}
              className="btn btn-outline text-[13.5px] max-[620px]:w-full"
              style={{ minHeight: "40px", padding: "8px 18px" }}
            >
              เฉพาะที่จำเป็น
            </button>
            <button
              type="button"
              onClick={onAcceptAll}
              className="btn btn-primary text-[13.5px] max-[620px]:w-full"
              style={{ minHeight: "40px", padding: "8px 22px" }}
            >
              ยอมรับทั้งหมด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
