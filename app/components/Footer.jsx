import CookieSettingsLink from "./CookieSettingsLink";
import SocialIcons from "./SocialIcons";
import { ACADEMY, CONTACT } from "../class/_data";

const CLASSES = [
  { href: "/manus/online", label: "Manus AI — Online" },
  { href: "/manus/seminar", label: "Manus AI — Seminar" },
  { href: "/claude/online", label: "Claude AI — Online" },
  { href: "/claude/seminar", label: "Claude AI — Seminar" },
  { href: "/ai-editor/online", label: "AI Video Editor — Online" },
  { href: "/ai-editor/seminar", label: "AI Video Editor — Seminar" },
  { href: "/one-person/online", label: "One Person — Online" },
  { href: "/one-person/seminar", label: "One Person — Seminar" },
  { href: "/private", label: "Private 1:1 Custom" },
];

const RESOURCES = [
  { href: "/#class", label: "ดูคลาสทั้งหมด" },
  { href: "/ebooks", label: "eBook · ฿390/เล่ม" },
  { href: "/#how", label: "วิธีทำงาน" },
  { href: "/#faq", label: "คำถามที่พบบ่อย" },
  { href: "/contact", label: "ติดต่อเรา" },
];

const LEGAL = [
  { href: "/privacy", label: "นโยบายความเป็นส่วนตัว" },
  { href: "/terms", label: "เงื่อนไขการใช้บริการ" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pt-[56px] pb-8 text-white max-[620px]:pt-[40px]">
      <div className="bx-container">
        <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 max-[900px]:grid-cols-2 max-[900px]:gap-8 max-[620px]:grid-cols-1 max-[620px]:gap-7 max-[620px]:text-center">
          {/* Brand column */}
          <div>
            <a href="/" className="inline-flex items-center gap-2.5 font-extrabold">
              <img
                src="/assets/brand/logo-192.png"
                width="192"
                height="192"
                alt=""
                aria-hidden="true"
                className="h-[40px] w-[40px]"
              />
              <span className="text-xl text-white">BizDrive</span>
            </a>
            <p className="mt-3 text-[13.5px] leading-[1.65] text-[#aeb7c5] max-[620px]:mx-auto max-[620px]:max-w-[320px]">
              ทำธุรกิจคนเดียวให้เหมือนมีทีมใหญ่ — สอนเจ้าของธุรกิจไทยใช้ AI วางระบบ ตัดวิดีโอ และทำคอนเทนต์
            </p>
            <div className="mt-4 flex max-[620px]:justify-center">
              <SocialIcons variant="dark" size="md" />
            </div>
          </div>

          {/* Classes */}
          <div>
            <FooterHeading>คลาสเรียน</FooterHeading>
            <ul className="mt-3 grid list-none gap-2 text-[13.5px] max-[620px]:items-center">
              {CLASSES.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="block text-[#aeb7c5] transition-colors hover:text-white max-[620px]:text-center"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <FooterHeading>ลิงก์</FooterHeading>
            <ul className="mt-3 grid list-none gap-2 text-[13.5px]">
              {RESOURCES.map((r) => (
                <li key={r.href}>
                  <a href={r.href} className="text-[#aeb7c5] transition-colors hover:text-white">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
            <FooterHeading className="mt-6">ข้อกฎหมาย</FooterHeading>
            <ul className="mt-3 grid list-none gap-2 text-[13.5px]">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#aeb7c5] transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <CookieSettingsLink className="text-[13.5px] text-[#aeb7c5] transition-colors hover:text-white" />
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>ติดต่อ</FooterHeading>
            <ul className="mt-3 grid list-none gap-2.5 text-[13.5px] max-[620px]:items-center">
              <li>
                <a
                  href={CONTACT.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-white transition-[border-color,background-color] duration-150 hover:border-white/25 hover:bg-white/[.08]"
                >
                  <img src="/assets/brand/contact/line.svg" alt="" width="20" height="20" className="h-[20px] w-[20px] flex-shrink-0" />
                  <span className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a96a8] group-hover:text-white/70">LINE</span>
                    <span className="text-[14.5px] font-extrabold leading-tight">{CONTACT.line}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="group inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-white transition-[border-color,background-color] duration-150 hover:border-white/25 hover:bg-white/[.08]"
                >
                  <img src="/assets/brand/contact/phone.svg" alt="" width="26" height="26" className="h-[26px] w-[26px] flex-shrink-0 rounded-md" />
                  <span className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a96a8] group-hover:text-white/70">โทร</span>
                    <span className="text-[14.5px] font-extrabold leading-tight tabular-nums">{CONTACT.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-white transition-[border-color,background-color] duration-150 hover:border-white/25 hover:bg-white/[.08]"
                >
                  <span aria-hidden="true" className="grid h-[26px] w-[26px] flex-shrink-0 place-items-center rounded-md bg-white">
                    <img src="/assets/brand/contact/gmail.svg" alt="" width="18" height="18" className="h-[18px] w-[18px]" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a96a8] group-hover:text-white/70">Email</span>
                    <span className="break-all text-[13px] font-bold leading-tight">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={ACADEMY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-white transition-[border-color,background-color] duration-150 hover:border-white/25 hover:bg-white/[.08]"
                >
                  <img src="/assets/brand/contact/googlemaps.svg" alt="" width="26" height="26" className="h-[26px] w-[26px] flex-shrink-0 rounded-md" />
                  <span className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8a96a8] group-hover:text-white/70">Google Maps</span>
                    <span className="text-[13px] font-bold leading-tight">{ACADEMY.name}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12.5px] text-[#8a96a8] max-[620px]:justify-center max-[620px]:text-center">
          <p>© {year} BizDrive · ขับเคลื่อนธุรกิจไทยด้วย AI</p>
          <p>
            ยินดีรับบัตรเครดิตทุกประเภท · ออกใบกำกับภาษีได้
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children, className = "" }) {
  return (
    <h3 className={`text-[12px] font-extrabold uppercase tracking-wider text-white ${className}`}>
      {children}
    </h3>
  );
}
