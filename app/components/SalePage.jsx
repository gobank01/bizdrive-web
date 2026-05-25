import { urlForPlan } from "@/lib/urls";
import LeadForm from "./LeadForm";
import LocationContact from "./LocationContact";
import Reviews from "./Reviews";
import Countdown from "./Countdown";
import ManusCapabilities from "./ManusCapabilities";
import TrustBadges from "./TrustBadges";
import ComparisonAlternatives from "./ComparisonAlternatives";
import CourseSchema from "./CourseSchema";
import SalepageStickyBar from "./SalepageStickyBar";
import ClassGallery from "./ClassGallery";

const PLAN_SHORT_NAME = {
  "manus-ai-online": "Manus Online",
  "manus-ai-seminar": "Manus Seminar",
  "manus-ai-private": "Private 1:1 Custom",
  "ai-editor-online": "AI Editor Online",
  "ai-editor-seminar": "AI Editor Seminar",
};

const ACCENT = {
  blue: { bg: "bg-brand-blue", badge: "bg-brand-yellow text-ink" },
  orange: { bg: "bg-[#c2410c]", badge: "bg-brand-yellow text-ink" },
  "blue-dark": { bg: "bg-brand-blue-dark", badge: "bg-brand-yellow text-ink" },
};

export default function SalePage({ plan }) {
  if (!plan) return null;
  const accent = ACCENT[plan.accent] || ACCENT.blue;

  return (
    <>
      <CourseSchema plan={plan} />
      <Hero plan={plan} accent={accent} />
      <Problem plan={plan} />
      <Solution plan={plan} />
      <ManusCapabilities />
      <Modules plan={plan} />
      <ComparisonAlternatives />
      <Outcomes plan={plan} accent={accent} />
      <ClassGallery slug={plan.slug} />
      <About />
      <TrustBadges />
      <Offer plan={plan} accent={accent} />
      <IdealFor plan={plan} />
      <Reviews seed={plan.slug} />
      <Guarantee plan={plan} />
      <Faq plan={plan} />
      {plan.slug !== "manus-ai-online" ? <LocationContact /> : null}
      <FinalCta plan={plan} accent={accent} />
      <div aria-hidden="true" className="h-[72px]" />
      <SalepageStickyBar plan={plan} />
    </>
  );
}

function Hero({ plan, accent }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#fff_72%)] pt-[88px] pb-[72px] max-[620px]:pt-[58px] max-[620px]:pb-[54px]">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="bx-container relative max-w-[880px] text-center">
        <span className={`mb-[22px] inline-flex items-center rounded-full px-[14px] py-2 text-sm font-bold ${accent.badge}`}>
          {plan.badge} · {plan.name}
        </span>
        <h1 className="mx-auto max-w-[860px] text-balance text-[clamp(2rem,5.5vw,4.2rem)] font-extrabold leading-[1.15]">
          {plan.hero.headline}
        </h1>
        <p className="mx-auto my-6 mb-8 max-w-[700px] text-[clamp(1rem,2vw,1.18rem)] text-muted">
          {plan.hero.sub}
        </p>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <a href="#offer" className="btn btn-primary btn-lg max-[620px]:w-full max-[620px]:max-w-[300px]">
            {plan.hero.ctaPrimary}
          </a>
          <a href="#modules" className="btn btn-outline max-[620px]:w-full max-[620px]:max-w-[300px]">
            {plan.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

function Problem({ plan }) {
  return (
    <section className="bg-white py-[72px] max-[620px]:py-[54px]">
      <div className="bx-container max-w-[880px]">
        <h2 className="mx-auto max-w-[760px] text-balance text-center text-[clamp(1.6rem,3.6vw,2.4rem)] font-extrabold leading-[1.22]">
          {plan.problem.title}
        </h2>
        <ul className="mx-auto mt-9 grid max-w-[680px] gap-3 text-left">
          {plan.problem.points.map((p) => (
            <li key={p} className="flex gap-3 rounded-lg border border-line bg-white px-5 py-4 text-[15px] text-ink">
              <span aria-hidden="true" className="mt-[2px] text-brand-orange">✕</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Solution({ plan }) {
  return (
    <section className="bg-soft py-[72px] max-[620px]:py-[54px]">
      <div className="bx-container max-w-[820px] text-center">
        <span className="section-kicker mb-[14px]">วิธีของเรา</span>
        <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.6rem,3.6vw,2.4rem)] font-extrabold leading-[1.22]">
          {plan.solution.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] text-[clamp(1rem,1.9vw,1.15rem)] text-muted">
          {plan.solution.body}
        </p>
      </div>
    </section>
  );
}

function Modules({ plan }) {
  return (
    <section id="modules" className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[920px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">เนื้อหา</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            สิ่งที่คุณจะได้เรียน
          </h2>
        </div>
        <div className="grid gap-4 max-[620px]:gap-3">
          {plan.modules.map((m) => (
            <article key={m.num} className="grid grid-cols-[80px_1fr] gap-5 rounded-lg border border-line bg-white px-6 py-5 transition-[border-color,box-shadow] duration-200 hover:border-brand-sky/45 hover:shadow-brand-sm max-[620px]:grid-cols-[60px_1fr] max-[620px]:gap-4 max-[620px]:px-4">
              <span className="text-[1.4rem] font-extrabold leading-none text-brand-blue max-[620px]:text-[1.1rem]">
                {m.num}
              </span>
              <div>
                <h3 className="mb-1 text-[1.05rem] font-extrabold leading-[1.35]">{m.title}</h3>
                <p className="text-[14.5px] text-muted">{m.text}</p>
                {m.bullets?.length ? (
                  <ul className="mt-3 grid list-none gap-1.5">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[13.5px] leading-[1.6] text-ink/80">
                        <span aria-hidden="true" className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full bg-brand-blue" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes({ plan, accent }) {
  return (
    <section className={`py-[84px] text-white max-[620px]:py-[62px] ${accent.bg}`}>
      <div className="bx-container max-w-[880px]">
        <div className="mb-[34px] text-center">
          <span className="inline-flex items-center rounded-full bg-brand-yellow px-[14px] py-1.5 text-sm font-extrabold text-ink">
            ผลลัพธ์
          </span>
          <h2 className="mx-auto mt-4 max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            เรียนจบแล้วคุณจะทำอะไรได้
          </h2>
        </div>
        <ul className="mx-auto grid max-w-[680px] gap-3">
          {plan.outcomes.map((o) => (
            <li key={o} className="flex gap-3 rounded-lg bg-white/[.08] px-5 py-4 text-[15px] backdrop-blur-sm">
              <span aria-hidden="true" className="mt-[2px] text-brand-yellow">✓</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[860px]">
        <div className="grid grid-cols-[220px_1fr] items-center gap-10 max-[620px]:grid-cols-1 max-[620px]:gap-7 max-[620px]:text-center">
          <div className="relative max-[620px]:mx-auto">
            <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-full bg-brand-yellow/40 blur-sm" aria-hidden="true" />
            <div className="relative aspect-square w-[220px] overflow-hidden rounded-full border-4 border-white bg-soft shadow-brand max-[620px]:w-[180px]">
              <img
                src="/assets/profile/profile-bank.jpg"
                width="440"
                height="440"
                alt="พี่แบงค์ ปรัชญา — ผู้ก่อตั้ง BizDrive"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-full bg-brand-yellow px-3 py-1 text-[12px] font-extrabold text-ink shadow-brand-sm max-[620px]:right-[calc(50%-90px)]">
              Founder
            </div>
          </div>
          <div>
            <span className="section-kicker mb-3">ผู้สอน</span>
            <h2 className="text-balance text-[clamp(1.45rem,3vw,2rem)] font-extrabold leading-[1.22]">
              พี่แบงค์ ปรัชญา — Founder, BizDrive
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              ทำธุรกิจมาตลอด ลงมือทำเองทุกขั้นตอน ตั้งแต่คอนเทนต์ วิดีโอ ระบบงาน
              จนถึงการดูแลลูกค้า — เลยรู้ว่าอะไรใช้ได้จริงในธุรกิจคนเดียว
              อะไรแค่ดูดีในสไลด์
            </p>
            <p className="mt-3 text-[15px] text-muted">
              BizDrive เกิดจากความเชื่อว่า เจ้าของธุรกิจตัวเล็กก็ทำสิ่งใหญ่ได้
              ถ้ามีเครื่องมือที่ใช่ และมีคนชี้ว่าทางไหนเดินได้จริง
            </p>
            <div className="mt-5 flex flex-wrap gap-2 max-[620px]:justify-center">
              {["10+ ปีทำธุรกิจ", "AI Workflow Designer", "เจ้าของธุรกิจไทย"].map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-soft px-3 py-1.5 text-[12.5px] font-semibold text-brand-blue">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Offer({ plan, accent }) {
  const bonusTotal = plan.bonuses?.reduce((sum, b) => sum + (b.valueAmount || 0), 0) || 0;
  const stackedValue = (plan.originalPrice || plan.price) + bonusTotal;
  const savings = plan.originalPrice ? plan.originalPrice - plan.price : 0;
  const savingsPercent = plan.originalPrice ? Math.round((savings / plan.originalPrice) * 100) : 0;

  return (
    <section id="offer" className="bg-soft py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[680px]">
        <div className="mb-[28px] text-center">
          <span className="section-kicker mb-[14px]">ข้อเสนอ</span>
          <h2 className="mx-auto max-w-[560px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            สรุปทุกอย่างที่คุณจะได้
          </h2>
        </div>

        <div className="rounded-[14px] border border-line bg-white p-[34px] py-[38px] shadow-brand max-[620px]:p-[22px] max-[620px]:py-[30px]">
          <div className="mb-5">
            <h3 className="mb-3 text-[13px] font-extrabold uppercase tracking-wider text-muted">รวมทั้งหมดที่ได้</h3>
            <ul className="grid list-none gap-3">
              <li className="grid grid-cols-[1fr_auto] gap-3 border-b border-line pb-3">
                <div>
                  <strong className="block text-[15px] font-extrabold text-ink">{plan.name}</strong>
                  <span className="text-[13.5px] text-muted">{plan.tagline}</span>
                </div>
                <span className="self-start text-[14px] font-bold text-brand-blue [font-variant-numeric:tabular-nums]">
                  ฿{(plan.originalPrice || plan.price).toLocaleString()}
                </span>
              </li>
              {plan.bonuses.map((b) => (
                <li key={b.title} className="grid grid-cols-[auto_1fr_auto] gap-3 border-b border-line pb-3 last:border-0 last:pb-0">
                  <span aria-hidden="true" className="mt-[2px] inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[10.5px] font-extrabold text-ink">+</span>
                  <div>
                    <strong className="block text-[15px] font-extrabold text-ink">{b.title}</strong>
                    <span className="text-[13.5px] text-muted">{b.text}</span>
                  </div>
                  <span className="self-start text-[14px] font-bold text-brand-blue [font-variant-numeric:tabular-nums]">{b.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5 rounded-lg border border-line bg-soft px-4 py-3 [font-variant-numeric:tabular-nums]">
            <div className="flex items-center justify-between gap-3 text-[14px]">
              <span className="text-muted">มูลค่ารวม</span>
              <span className="font-bold text-ink line-through">฿{stackedValue.toLocaleString()}</span>
            </div>
            {savings > 0 ? (
              <div className="mt-1.5 flex items-center justify-between gap-3 text-[13.5px]">
                <span className="font-semibold text-[#c2410c]">ส่วนลดรอบนี้</span>
                <span className="font-extrabold text-[#c2410c]">-฿{(stackedValue - plan.price).toLocaleString()} ({Math.round(((stackedValue - plan.price) / stackedValue) * 100)}%)</span>
              </div>
            ) : null}
          </div>

          <div className="my-2 flex flex-wrap items-baseline justify-center gap-1 border-y border-line py-[22px] [font-variant-numeric:tabular-nums]">
            <span className="block w-full text-center text-[12.5px] font-bold uppercase tracking-wider text-muted">ราคาคุณวันนี้</span>
            {plan.originalPrice ? (
              <span className="mt-2 mr-2 text-[16px] font-semibold text-muted line-through">
                ฿{plan.originalPrice.toLocaleString()}
              </span>
            ) : null}
            <span className="text-[1.7rem] font-extrabold text-brand-blue">฿</span>
            <span className="text-[clamp(2.6rem,8vw,3.3rem)] font-extrabold leading-none text-brand-blue">
              {plan.price.toLocaleString()}
            </span>
            {savingsPercent > 0 ? (
              <span className="ml-2 rounded-full bg-[#c2410c] px-2.5 py-1 text-[12px] font-extrabold text-white">
                ประหยัด {savingsPercent}%
              </span>
            ) : null}
            <span className="mt-2 block w-full text-center text-[14px] font-semibold text-muted">
              {plan.priceNote}
            </span>
          </div>

          {plan.deadline ? (
            <div className="mt-4">
              <Countdown
                at={plan.deadline.at}
                rolling={plan.deadline.rolling}
                planSlug={plan.slug}
                label={plan.deadline.label}
                expiredLabel={plan.deadline.expiredLabel}
                accent={plan.accent}
              />
            </div>
          ) : null}
          <p className="mt-4 mb-3 text-center text-[13px] font-semibold text-brand-blue">
            เปิดรับสมัครเร็ว ๆ นี้ — ฝากอีเมลเพื่อรับแจ้งเตือนก่อนใคร
          </p>
          <LeadForm planSlug={plan.slug} source="salepage-offer" buttonLabel="แจ้งเตือนฉัน" />
          <p className="mt-4 text-center text-[13px] text-muted">{plan.scarcity}</p>
        </div>
      </div>
    </section>
  );
}

function IdealFor({ plan }) {
  const ideal = plan.idealFor;
  if (!ideal) return null;
  return (
    <section className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[920px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">เช็คก่อนสมัคร</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            {ideal.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 max-[620px]:grid-cols-1">
          <div className="rounded-[14px] border border-brand-mint/30 bg-brand-mint/[.06] p-6">
            <h3 className="mb-3 flex items-center gap-2 text-[1rem] font-extrabold text-[#047857]">
              <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-[#047857] text-[13px] text-white">✓</span>
              ใช่เลย
            </h3>
            <ul className="grid list-none gap-2.5">
              {ideal.yes.map((y) => (
                <li key={y} className="flex gap-2.5 text-[14.5px] leading-[1.65] text-ink">
                  <span aria-hidden="true" className="mt-[3px] flex-shrink-0 text-[#047857]">✓</span>
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] border border-line bg-soft p-6">
            <h3 className="mb-3 flex items-center gap-2 text-[1rem] font-extrabold text-muted">
              <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-muted text-[13px] text-white">→</span>
              อาจไม่ใช่ทาง
            </h3>
            <ul className="grid list-none gap-2.5">
              {ideal.no.map((n) => (
                <li key={n.text} className="flex gap-2.5 text-[14.5px] leading-[1.65] text-ink/80">
                  <span aria-hidden="true" className="mt-[3px] flex-shrink-0 text-muted">→</span>
                  <span>
                    {n.text}
                    {n.linkTo ? (
                      <>
                        {" · "}
                        <a href={urlForPlan(n.linkTo)} className="font-bold text-brand-blue underline decoration-brand-blue/40 underline-offset-2 hover:decoration-brand-blue">
                          ดู {PLAN_SHORT_NAME[n.linkTo]}
                        </a>
                      </>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee({ plan }) {
  return (
    <section className="bg-soft py-[64px] max-[620px]:py-[48px]">
      <div className="bx-container max-w-[680px]">
        <div className="grid grid-cols-[60px_1fr] gap-5 rounded-lg border border-line bg-white px-7 py-7 shadow-brand-sm max-[620px]:grid-cols-1 max-[620px]:text-center">
          <div className="grid h-[60px] w-[60px] place-items-center rounded-full bg-brand-mint/[.12] text-brand-mint max-[620px]:mx-auto">
            <svg viewBox="0 0 24 24" className="h-[32px] w-[32px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.4]" aria-hidden="true">
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="text-[1.1rem] font-extrabold text-ink">{plan.guarantee.title}</h3>
            <p className="mt-2 text-[14.5px] text-muted">{plan.guarantee.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq({ plan }) {
  return (
    <section className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[760px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">FAQ</span>
          <h2 className="mx-auto max-w-[680px] text-balance text-[clamp(1.55rem,3.6vw,2.3rem)] font-extrabold leading-[1.22]">
            คำถามที่พบบ่อย
          </h2>
        </div>
        <div className="grid gap-3">
          {plan.faqs.map((f) => (
            <details key={f.q} className="group rounded-lg border border-line bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-extrabold text-ink">
                {f.q}
                <span aria-hidden="true" className="text-brand-blue transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ plan, accent }) {
  return (
    <section className={`py-[84px] text-center text-white max-[620px]:py-[62px] ${accent.bg}`}>
      <div className="bx-container max-w-[720px]">
        <h2 className="mx-auto max-w-[640px] text-balance text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold leading-[1.2]">
          พร้อมเริ่มใช้ AI กับธุรกิจคุณแล้วใช่ไหม
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-white">
          {plan.tagline}
        </p>
        <div className="mx-auto mt-7 max-w-[460px] text-left">
          <LeadForm
            planSlug={plan.slug}
            source="salepage-final"
            variant="light"
            buttonLabel="แจ้งเตือนฉัน"
          />
        </div>
        <p className="mt-4 text-[13px] text-white">{plan.scarcity}</p>
      </div>
    </section>
  );
}
