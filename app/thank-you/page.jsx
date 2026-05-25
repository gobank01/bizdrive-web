import { PLANS, PLAN_ORDER } from "../class/_data";
import { urlForPlan } from "@/lib/urls";
import CopyDiscountCode from "../components/CopyDiscountCode";

export const metadata = {
  title: "ขอบคุณสำหรับการลงทะเบียน — BizDrive",
  description:
    "ขอบคุณที่ฝากข้อมูลกับ BizDrive — รับส่วนลด 10% และ eBook Manus AI ฟรีของคุณได้ทันที",
  robots: { index: false, follow: false },
};

const DISCOUNT_CODE = "BIZDRIVE10";

export default async function PromotionThankYouPage({ searchParams }) {
  const sp = await searchParams;
  const source = typeof sp?.source === "string" ? sp.source : "popup";
  const isExit = source === "popup-exit";

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#fff_70%)] py-[72px] max-[620px]:py-[54px]">
        <div className="bx-container max-w-[760px] text-center">
          <div className="mx-auto mb-5 grid h-[78px] w-[78px] place-items-center rounded-full bg-brand-mint/[.12] text-brand-mint">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[38px] w-[38px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3]">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <span className="badge mb-[14px]">{isExit ? "รับเรียบร้อย" : "ลงทะเบียนสำเร็จ"}</span>
          <h1 className="mt-1.5 text-balance text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold leading-[1.2]">
            ขอบคุณ — ของแถมของคุณรอแล้ว
          </h1>
          <p className="mx-auto my-[18px] mb-[28px] max-w-[640px] text-[clamp(1rem,2vw,1.18rem)] text-muted">
            เราได้รับข้อมูลของคุณแล้ว · eBook และส่วนลดจะส่งไปที่อีเมลภายใน 5-10 นาที
            (เช็ค inbox + กล่องสแปม)
          </p>

          <div className="mx-auto mb-9 flex max-w-[460px] items-center gap-4 rounded-[14px] border border-line bg-white p-4 text-left shadow-brand-sm">
            <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-full border-2 border-brand-yellow bg-soft">
              <img
                src="/assets/profile/profile-bank-sm.jpg"
                width="160"
                height="160"
                alt="พี่แบงค์ ปรัชญา"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <strong className="block text-[15px] font-extrabold leading-tight text-ink">พี่แบงค์ ปรัชญา</strong>
              <span className="block text-[12.5px] text-muted">Founder, BizDrive</span>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-ink">
                ขอบคุณที่เชื่อใจ — เจอกันในคลาสครับ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-[64px] max-[620px]:py-[48px]">
        <div className="bx-container max-w-[920px]">
          <div className="mb-[28px] text-center">
            <span className="section-kicker mb-[14px]">ของแถมของคุณ</span>
            <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold leading-[1.22]">
              รับ 2 สิ่งนี้ฟรี
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
            <article className="flex flex-col rounded-[14px] border border-line bg-white p-6 shadow-brand-sm">
              <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-brand-yellow px-3 py-1 text-[12px] font-extrabold text-ink">
                <span aria-hidden="true">📘</span> eBook
              </div>
              <h3 className="text-[1.1rem] font-extrabold leading-[1.35] text-ink">
                เริ่มใช้ Manus AI สำหรับธุรกิจ
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-muted">
                รวมเทคนิคและ workflow ที่ BizDrive ใช้จริง · เริ่มใช้ Manus AI กับธุรกิจของคุณภายใน 1 ชั่วโมง
              </p>
              <ul className="mt-3 grid list-none gap-1.5 text-[13px] text-ink/85">
                <li className="flex gap-2"><span aria-hidden="true" className="text-brand-blue">•</span>วิธี setup และเชื่อม Manus กับเครื่องมือที่คุณใช้</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-brand-blue">•</span>Prompt template เริ่มต้น 10 ชุด</li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-brand-blue">•</span>Case study workflow 5 ตัวอย่างจริง</li>
              </ul>
              <div className="mt-5 flex items-center justify-between gap-2 border-t border-line pt-4">
                <div>
                  <span className="block text-[11px] font-extrabold uppercase tracking-wider text-muted">มูลค่า</span>
                  <span className="text-[1.1rem] font-extrabold text-brand-blue [font-variant-numeric:tabular-nums]">฿990 <span className="ml-1 text-[12px] font-bold text-[#047857]">— ฟรี</span></span>
                </div>
                <span className="rounded-full bg-brand-mint/15 px-2.5 py-1 text-[11.5px] font-extrabold text-[#047857]">ส่งทางอีเมล</span>
              </div>
            </article>

            <article className="flex flex-col rounded-[14px] border-2 border-brand-blue/30 bg-white p-6 shadow-brand">
              <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-brand-blue px-3 py-1 text-[12px] font-extrabold text-white">
                <span aria-hidden="true">🏷️</span> โค้ดส่วนลด
              </div>
              <h3 className="text-[1.1rem] font-extrabold leading-[1.35] text-ink">
                ส่วนลด 10% เมื่อสมัครคลาส
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-muted">
                ใช้ได้กับคลาส Manus AI ทุกระดับ (Online · Seminar · Private) — แจ้งโค้ดตอนสมัคร
              </p>

              <div className="mt-4 rounded-lg border-2 border-dashed border-brand-blue/40 bg-brand-blue/[.04] p-4 text-center">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider text-brand-blue">โค้ดของคุณ</span>
                <div className="my-1 text-[1.5rem] font-extrabold tracking-wider text-brand-blue [font-variant-numeric:tabular-nums]">
                  {DISCOUNT_CODE}
                </div>
                <CopyDiscountCode code={DISCOUNT_CODE} />
              </div>

              <p className="mt-3 text-[12px] text-muted">
                * โค้ดใช้ได้ครั้งเดียว · หมดอายุ 30 วันจากวันนี้ · ใช้ได้ทุกคลาส
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-[64px] max-[620px]:py-[48px]">
        <div className="bx-container max-w-[1120px]">
          <div className="mb-[28px] text-center">
            <span className="section-kicker mb-[14px]">ใช้โค้ดต่อ</span>
            <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold leading-[1.22]">
              เลือกคลาสที่ใช้โค้ดได้
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
            {PLAN_ORDER.map((slug, i) => {
              const plan = PLANS[slug];
              return (
                <article key={slug} className={`flex flex-col rounded-[14px] border bg-white p-6 text-center transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-brand ${i === 0 ? "border-brand-blue/35 shadow-brand-sm" : "border-line"}`}>
                  <span className={`mx-auto mb-3 inline-flex items-center rounded-full px-[14px] py-1.5 text-[12px] font-extrabold ${i === 0 ? "bg-brand-yellow text-ink" : "bg-soft text-brand-blue"}`}>
                    {plan.badge}
                  </span>
                  <h3 className="text-[1.05rem] font-extrabold leading-[1.3]">{plan.name}</h3>
                  <p className="mt-1.5 text-[12.5px] text-muted">{plan.cardSub}</p>
                  <div className="my-4 flex flex-wrap items-baseline justify-center gap-1 border-y border-line py-3 [font-variant-numeric:tabular-nums]">
                    <span className="text-[13px] font-semibold text-muted line-through">฿{plan.originalPrice?.toLocaleString()}</span>
                    <span className="ml-2 text-[1.5rem] font-extrabold text-brand-blue">฿{plan.price.toLocaleString()}</span>
                  </div>
                  <a href={urlForPlan(slug)} className={`btn mt-auto w-full text-[13.5px] ${i === 0 ? "btn-primary" : "btn-outline"}`} style={{ minHeight: "40px", padding: "8px 18px" }}>
                    ดูรายละเอียด
                  </a>
                </article>
              );
            })}
          </div>
          <p className="mt-5 text-center text-[12.5px] text-muted">
            แจ้งโค้ด <strong className="text-ink">{DISCOUNT_CODE}</strong> ตอนสมัคร เพื่อรับส่วนลดเพิ่มอีก 10%
          </p>
        </div>
      </section>
    </>
  );
}
