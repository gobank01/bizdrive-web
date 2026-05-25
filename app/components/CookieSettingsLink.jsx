"use client";

export default function CookieSettingsLink({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => {
        try {
          localStorage.removeItem("bizdrive_consent_v1");
        } catch {}
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("bizdrive:open-consent"));
        }
      }}
      className={className}
    >
      ตั้งค่าคุกกี้
    </button>
  );
}
