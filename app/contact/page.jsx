import ContactForm from "../components/ContactForm";
import LocationContact from "../components/LocationContact";
import { CONTACT } from "../class/_data";

export const metadata = {
  title: "ติดต่อ BizDrive — สอบถามคลาส AI / ปรึกษาวางระบบ",
  description:
    "ทักทีม BizDrive — สอบถามคลาส Manus AI / AI Video Editor หรือปรึกษาเรื่องวางระบบ AI ในธุรกิจ · ตอบกลับภายใน 1 วันทำการ",
  openGraph: {
    title: "ติดต่อ BizDrive",
    description: "สอบถามคลาส AI หรือปรึกษาเรื่องวางระบบ AI ในธุรกิจ",
    type: "website",
  },
};

const QUICK_LINKS = [
  {
    label: "LINE",
    handle: CONTACT.line,
    href: CONTACT.lineUrl,
    cta: "เพิ่มเพื่อน LINE",
    note: "ตอบเร็วสุด · ใน 1-2 ชั่วโมง ในเวลาทำการ",
    iconBg: "bg-[#00C300]",
    logo: "/assets/brand/contact/line.svg",
    iconSvg: null,
  },
  {
    label: "โทร",
    handle: CONTACT.phone,
    href: `tel:${CONTACT.phoneTel}`,
    cta: "โทรเลย",
    note: "เวลาทำการ จันทร์-ศุกร์ · 9:00-18:00",
    iconBg: "bg-brand-blue",
    logo: "/assets/brand/contact/phone.svg",
    iconSvg: null,
    tabular: true,
  },
  {
    label: "อีเมล",
    handle: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    cta: "ส่งอีเมล",
    note: "ตอบกลับภายใน 1 วันทำการ",
    iconBg: "bg-[#c2410c]",
    logo: "/assets/brand/contact/gmail.svg",
    iconSvg: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#fff_72%)] pt-[72px] pb-[42px] max-[620px]:pt-[48px] max-[620px]:pb-[28px]">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="bx-container relative max-w-[840px] text-center">
          <span className="badge mb-[18px]">ทักทีม BizDrive</span>
          <h1 className="mx-auto max-w-[760px] text-balance text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.15]">
            มีคำถาม? ทักมาได้เลย — เราตอบเอง
          </h1>
          <p className="mx-auto my-5 mb-2 max-w-[640px] text-[clamp(1rem,2vw,1.13rem)] text-muted">
            สอบถามคลาส · ปรึกษาวางระบบ AI · ขอข้อมูล Private 1:1 Custom Coaching
          </p>
        </div>
      </section>

      <section className="bg-white pt-[28px] pb-[64px] max-[620px]:pb-[48px]">
        <div className="bx-container max-w-[960px]">
          <div className="grid grid-cols-3 gap-3.5 max-[900px]:grid-cols-1">
            {QUICK_LINKS.map((q) => {
              const isExt = q.href.startsWith("http");
              return (
                <a
                  key={q.label}
                  href={q.href}
                  target={isExt ? "_blank" : undefined}
                  rel={isExt ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 rounded-[14px] border border-line bg-white p-4 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-brand-sky/45 hover:shadow-brand-sm"
                >
                  <div className={`grid h-11 w-11 flex-shrink-0 place-items-center overflow-hidden ${q.logo ? "rounded-[10px]" : `rounded-lg ${q.iconBg} text-white`}`}>
                    {q.logo ? (
                      <img src={q.logo} alt={q.label} className="h-11 w-11 object-contain" />
                    ) : (
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[22px] w-[22px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]">
                        {q.iconSvg}
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-[12px] font-bold uppercase tracking-wider text-muted">{q.label}</div>
                    <div className={`text-[15px] font-extrabold text-ink ${q.tabular ? "tabular-nums" : ""}`}>{q.handle}</div>
                    <div className="mt-0.5 text-[12.5px] text-muted">{q.note}</div>
                    <span className="mt-1.5 inline-flex text-[12.5px] font-bold text-brand-blue group-hover:underline">
                      {q.cta} →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-soft py-[72px] max-[620px]:py-[54px]">
        <div className="bx-container max-w-[920px]">
          <div className="grid grid-cols-[1fr_0.85fr] gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-8">
            <div className="rounded-[14px] border border-line bg-white p-7 shadow-brand-sm max-[620px]:p-5">
              <div className="mb-5">
                <span className="section-kicker mb-3">เก็บข้อมูลให้ทีม</span>
                <h2 className="text-[clamp(1.4rem,3vw,1.9rem)] font-extrabold leading-[1.22]">
                  ฝากข้อความ — เราติดต่อกลับใน 1 วันทำการ
                </h2>
                <p className="mt-2 text-[14.5px] text-muted">
                  ทีม BizDrive รับเองทุกข้อความ · ไม่ใช่บอท · ไม่มี cold call
                </p>
              </div>
              <ContactForm />
            </div>

            <aside className="grid content-start gap-4 max-[900px]:gap-3">
              <div className="rounded-[14px] border border-line bg-white p-5 shadow-brand-sm">
                <h3 className="text-[1rem] font-extrabold text-ink">ทักเรื่องอะไรได้บ้าง</h3>
                <ul className="mt-3 grid list-none gap-2 text-[14px] leading-[1.55] text-ink/85">
                  <li className="flex gap-2"><span aria-hidden="true" className="mt-[2px] text-brand-blue">✓</span><span>สอบถามคลาสและเปรียบเทียบ Online/Seminar/Private</span></li>
                  <li className="flex gap-2"><span aria-hidden="true" className="mt-[2px] text-brand-blue">✓</span><span>สอบถามรายละเอียด Private 1:1 Custom Coaching</span></li>
                  <li className="flex gap-2"><span aria-hidden="true" className="mt-[2px] text-brand-blue">✓</span><span>ปรึกษาเรื่อง AI workflow ในธุรกิจคุณ</span></li>
                  <li className="flex gap-2"><span aria-hidden="true" className="mt-[2px] text-brand-blue">✓</span><span>ขอใบกำกับภาษี / ส่วนลดทีม / Partnership</span></li>
                </ul>
              </div>

              <div className="rounded-[14px] border border-brand-yellow/40 bg-brand-yellow/[.08] p-5">
                <h3 className="text-[1rem] font-extrabold text-ink">⚡ อยากได้คำตอบเร็วที่สุด</h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink/85">
                  ทักผ่าน <strong>LINE @bizdrive</strong> — ทีมตอบใน 1-2 ชั่วโมงในเวลาทำการ · เร็วกว่าฟอร์มประมาณ 5-10 เท่า
                </p>
                <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="btn mt-3 w-full bg-[#00C300] text-white hover:brightness-105">
                  เปิด LINE ตอนนี้ →
                </a>
              </div>

              <div className="rounded-[14px] border border-line bg-white p-5 shadow-brand-sm">
                <h3 className="text-[1rem] font-extrabold text-ink">เวลาตอบกลับ</h3>
                <ul className="mt-2.5 grid list-none gap-1.5 text-[13.5px] text-ink/85">
                  <li><strong className="text-ink">LINE:</strong> 1-2 ชั่วโมง (เวลาทำการ)</li>
                  <li><strong className="text-ink">โทร:</strong> รับสายทันที (จ-ศ 9:00-18:00)</li>
                  <li><strong className="text-ink">อีเมล / ฟอร์ม:</strong> ภายใน 1 วันทำการ</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LocationContact />
    </>
  );
}
