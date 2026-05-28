import { CONTACT } from "../class/_data";

export default function StickyMobileBar() {
  return (
    <nav
      aria-label="ติดต่อด่วน"
      className="fixed inset-x-0 bottom-0 z-40 hidden border-t border-line bg-white shadow-brand max-[900px]:block"
      style={{ paddingBottom: "max(0.25rem, env(safe-area-inset-bottom))" }}
    >
      <ul className="grid grid-cols-3 gap-1 p-1.5">
        <li>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            aria-label={`โทร ${CONTACT.phone}`}
            className="flex h-12 flex-col items-center justify-center gap-0.5 rounded-lg text-brand-blue transition-colors hover:bg-soft active:bg-soft"
          >
            <img src="/assets/brand/contact/phone.svg" alt="" width="22" height="22" className="h-[22px] w-[22px] rounded-md" />
            <span className="text-[11px] font-extrabold">โทรเลย</span>
          </a>
        </li>
        <li>
          <a
            href={CONTACT.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ทักผ่าน LINE @bizdrive"
            className="flex h-12 flex-col items-center justify-center gap-0.5 rounded-lg bg-[#06C755] text-white shadow-brand-sm transition-[transform,box-shadow] active:scale-95"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M19.36 9.5c0-3.55-3.56-6.45-7.93-6.45-4.38 0-7.93 2.9-7.93 6.45 0 3.19 2.82 5.86 6.63 6.36.26.05.61.17.7.39.08.2.05.51.03.71l-.11.68c-.04.2-.16.79.69.43s4.6-2.71 6.27-4.64c1.16-1.27 1.72-2.55 1.72-3.93zM8.9 11.32H7.32a.21.21 0 0 1-.21-.21V7.78c0-.12.1-.21.21-.21h.27c.12 0 .21.1.21.21v2.92h1.1c.12 0 .21.1.21.21v.27c0 .12-.1.21-.21.21zm.84-3.32h.27c.12 0 .21.1.21.21v3.11c0 .12-.1.21-.21.21h-.27a.21.21 0 0 1-.21-.21V8.21c0-.12.1-.21.21-.21zm3.18 3.11c0 .12-.1.21-.21.21h-.27a.21.21 0 0 1-.17-.08l-1.43-1.93v1.8c0 .12-.1.21-.21.21h-.27a.21.21 0 0 1-.21-.21V8.21c0-.12.1-.21.21-.21h.27c.06 0 .13.03.17.08l1.43 1.93v-1.8c0-.12.1-.21.21-.21h.27c.12 0 .21.1.21.21zm3.27-2.59h-1.36v.62h1.1c.12 0 .21.1.21.21v.27c0 .12-.1.21-.21.21h-1.1v.62h1.1c.12 0 .21.1.21.21v.27c0 .12-.1.21-.21.21h-1.58a.21.21 0 0 1-.21-.21V7.78c0-.12.1-.21.21-.21h1.58c.12 0 .21.1.21.21v.27c0 .12-.1.21-.21.21z" />
            </svg>
            <span className="text-[11px] font-extrabold">LINE</span>
          </a>
        </li>
        <li>
          <a
            href="/#class"
            aria-label="ดูคลาสเรียน"
            className="flex h-12 flex-col items-center justify-center gap-0.5 rounded-lg bg-brand-blue text-white shadow-brand-sm transition-[transform] active:scale-95"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.9]">
              <path d="M3 7l9-4 9 4-9 4-9-4z" />
              <path d="M7 9.5v4.5c0 1.5 2.5 3 5 3s5-1.5 5-3V9.5" />
              <path d="M21 7v6" />
            </svg>
            <span className="text-[11px] font-extrabold">ดูคลาส</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
