import CookieSettingsLink from "./CookieSettingsLink";
import SocialIcons from "./SocialIcons";
import { ACADEMY, CONTACT } from "../class/_data";

const CLASSES = [
  { href: "/manus/online", label: "Manus AI — Online", price: "฿3,900" },
  { href: "/manus/seminar", label: "Manus AI — Seminar", price: "฿9,900" },
  { href: "/ai-editor/online", label: "AI Video Editor — Online", price: "฿3,900" },
  { href: "/ai-editor/seminar", label: "AI Video Editor — Seminar", price: "฿9,900" },
  { href: "/private", label: "Private 1:1 Custom", price: "฿39,000" },
];

const RESOURCES = [
  { href: "/#class", label: "ดูคลาสทั้งหมด" },
  { href: "/#how", label: "วิธีทำงาน" },
  { href: "/#faq", label: "คำถามที่พบบ่อย" },
  { href: "/#about", label: "เกี่ยวกับ BizDrive" },
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
                    className="grid grid-cols-[1fr_auto] items-baseline gap-3 text-[#aeb7c5] transition-colors hover:text-white max-[620px]:justify-items-center"
                  >
                    <span>{c.label}</span>
                    <span className="text-[11.5px] font-bold tabular-nums text-[#8a96a8]">{c.price}</span>
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
            <ul className="mt-3 grid list-none gap-2.5 text-[13.5px]">
              <li>
                <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white transition-opacity hover:opacity-80">
                  <img src="/assets/brand/contact/line.svg" alt="" width="18" height="18" className="h-[18px] w-[18px]" />
                  <span className="font-extrabold">LINE {CONTACT.line}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="text-[#aeb7c5] transition-colors hover:text-white">
                  ☎ {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="break-all text-[#aeb7c5] transition-colors hover:text-white">
                  ✉ {CONTACT.email}
                </a>
              </li>
              <li className="mt-2 text-[13px] leading-[1.6] text-[#8a96a8]">
                <strong className="block text-white">{ACADEMY.name}</strong>
                {ACADEMY.city}
                {" · "}
                <a href={ACADEMY.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-[#8a96a8] underline-offset-2 hover:text-white">
                  Google Maps →
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
