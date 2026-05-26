import { PLANS, PLAN_ORDER, MANUS_PLAN_ORDER, AI_EDITOR_PLAN_ORDER, PRIVATE_SLUG } from "./class/_data";
import { urlForPlan } from "@/lib/urls";
import LeadForm from "./components/LeadForm";
import LocationContact from "./components/LocationContact";
import Reviews from "./components/Reviews";
import SocialIcons from "./components/SocialIcons";
import StickyMobileBar from "./components/StickyMobileBar";
import SectionDivider from "./components/SectionDivider";

const TRUST_LOGOS = [
  { name: "Manus AI", src: "/assets/brand/ai/manus.svg", wide: false },
  { name: "ChatGPT", src: "/assets/brand/ai/chatgpt.svg", wide: false },
  { name: "Claude (Anthropic)", src: "/assets/brand/ai/anthropic.svg", wide: false },
  { name: "Google Gemini", src: "/assets/brand/ai/gemini.svg", wide: false },
  { name: "OpenAI Codex CLI", src: "/assets/brand/ai/openai.svg", wide: true },
  { name: "Cursor", src: "/assets/brand/ai/cursor.svg", wide: false },
  { name: "Hyperframes", src: "/assets/brand/ai/hyperframes-icon.webp", wide: false },
];

const SERVICES = [
  {
    title: "คอนเทนต์ & แคปชั่น",
    text: "เขียนแคปชั่นและโพสต์โซเชียลที่เป็นเสียงของคุณ ตรงกลุ่ม ไม่ใช่ภาษาหุ่นยนต์",
    paths: ["M4 20h16", "M6 16l10.5-10.5a2.1 2.1 0 0 1 3 3L9 19l-4 1 1-4z"],
  },
  {
    title: "ตัดต่อวิดีโออัตโนมัติ",
    text: "เปลี่ยนคลิปดิบเป็นวิดีโอพร้อมลง Reels / TikTok พร้อมแคปชั่นและจังหวะ",
    paths: ["M8 5l2 4", "M14 5l2 4", "M3 9h18", "M11 13l4 2.5-4 2.5v-5z"],
    rects: [{ x: 3, y: 5, w: 18, h: 14, rx: 2 }],
  },
  {
    title: "วางระบบธุรกิจ",
    text: "ออกแบบเวิร์กโฟลว์และระบบ AI ให้งานซ้ำ ๆ ทำเองได้ คุณโฟกัสกับสิ่งสำคัญ",
    paths: ["M4 7h7", "M15 7h5", "M4 17h5", "M13 17h7"],
    circles: [
      { cx: 13, cy: 7, r: 2 },
      { cx: 11, cy: 17, r: 2 },
    ],
  },
];

const GALLERY = [
  {
    src: "/assets/gallery/seminar/seminar-17.jpg",
    alt: "บรรยากาศ Seminar กลุ่มเล็กที่ BizDrive Academy",
    title: "Workshop ที่ Academy",
    sub: "Hands-on กลุ่มเล็ก",
    featured: true,
  },
  {
    src: "/assets/gallery/seminar/seminar-20.jpg",
    alt: "นักเรียนลงมือทำกับ AI workflow ในคลาส",
    title: "ลงมือทำจริง",
    sub: "เห็นผลในคลาส",
  },
  {
    src: "/assets/gallery/private/private-16.jpg",
    alt: "Private 1:1 session กับพี่แบงค์",
    title: "Private 1:1",
    sub: "ออกแบบเฉพาะธุรกิจ",
  },
  {
    src: "/assets/gallery/seminar/seminar-15.jpg",
    alt: "พี่แบงค์สอน AI workflow ในคลาส",
    title: "พี่แบงค์สอนเอง",
    sub: "ทุกคลาส",
  },
  {
    src: "/assets/gallery/private/private-19.jpg",
    alt: "ออกแบบ AI workflow เฉพาะธุรกิจในคลาส Private",
    title: "Workflow เฉพาะคุณ",
    sub: "Custom ทุก session",
  },
];

const STEPS = [
  { num: "1", title: "คุยเป้าหมาย", text: "บอกเราว่าธุรกิจคุณติดอยู่ตรงไหน อยากให้โตแบบไหน" },
  { num: "2", title: "ออกแบบเครื่องมือ", text: "เราสร้างระบบ AI และเวิร์กโฟลว์ที่ตอบโจทย์คุณโดยเฉพาะ" },
  { num: "3", title: "ใช้งานจริง", text: "ส่งมอบ สอนใช้ และปรับจูนจนคุณทำเองได้คล่อง" },
];

const PRICING_FEATURES = [
  "ใช้ AI เขียนแคปชั่นและวางแผนคอนเทนต์ที่เป็นเสียงของคุณ",
  "เวิร์กโฟลว์ตัดต่อวิดีโออัตโนมัติ พร้อมลง Reels / TikTok",
  "วางระบบงานซ้ำ ๆ ให้ AI ช่วยทำ คุณโฟกัสกับสิ่งสำคัญ",
  "เทมเพลตและเวิร์กโฟลว์พร้อมใช้ เอาไปต่อยอดได้เลย",
  "เรียนแบบลงมือทำจริง เห็นผลกับธุรกิจตัวเอง",
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AIStackSection />
      <SectionDivider tone="white" />
      <UseCasesSection />
      <SectionDivider tone="soft" />
      <ServicesSection />
      <SectionDivider tone="white" />
      <GallerySection />
      <SectionDivider tone="soft" />
      <HowSection />
      <SectionDivider tone="white" />
      <ClassroomSection />
      <SectionDivider tone="white" />
      <Reviews seed="home" />
      <SectionDivider tone="soft" />
      <PricingSection />
      <SectionDivider tone="soft" />
      <ComparisonSection />
      <SectionDivider tone="white" />
      <AboutSection />
      <SectionDivider tone="blue" />
      <HomeFaqSection />
      <SectionDivider tone="white" />
      <SubscribeSection />
      <SectionDivider tone="soft" />
      <LocationContact />
      <ContactSection />
      <div aria-hidden="true" className="hidden max-[900px]:block max-[900px]:h-[64px]" />
      <StickyMobileBar />
    </>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#fff_72%)] pt-[88px] pb-[72px] max-[620px]:pt-[58px] max-[620px]:pb-[54px]">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="bx-container relative max-w-[920px] text-center">
        <a href="#class" className="badge mb-[22px] inline-flex items-center gap-1.5 transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-brand-sm">
          AI สำหรับ One Person Business
          <span aria-hidden="true" className="text-brand-blue">→</span>
        </a>
        <h1 className="mx-auto max-w-[940px] text-balance text-[clamp(2.2rem,6vw,4.9rem)] font-extrabold leading-[1.12] max-[620px]:break-words max-[620px]:text-[clamp(1.62rem,7.6vw,1.98rem)]">
          ทำธุรกิจคนเดียว <br className="hidden max-[620px]:block" />
          <span className="hl">ให้เหมือนมีทีมใหญ่</span>
        </h1>
        <p className="mx-auto my-6 mb-8 max-w-[760px] text-[clamp(1rem,2vw,1.18rem)] text-muted max-[620px]:max-w-[310px] max-[620px]:text-base">
          BizDrive สอนใช้ AI หลายตัว — <strong className="text-ink">Manus AI · ChatGPT · Claude · Gemini · Codex CLI · Cursor · Hyperframes</strong>
          {" "}— เพื่อวางระบบธุรกิจ · ตัดวิดีโอด้วย AI Agent · งาน Automation · สร้างภาพ และ Dashboard ที่ใช้จริง
        </p>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <a href="#class" className="btn btn-primary max-[620px]:w-full max-[620px]:max-w-[284px]">
            ดูคลาสเรียน AI
          </a>
          <a href="#how" className="btn btn-outline max-[620px]:w-full max-[620px]:max-w-[284px]">
            ดูวิธีทำงาน
          </a>
        </div>

        <div className="mx-auto mt-7 grid max-w-[720px] grid-cols-[minmax(0,1fr)_112px] gap-4 text-left max-[620px]:mt-7 max-[620px]:max-w-[320px] max-[620px]:grid-cols-1">
          <figure className="overflow-hidden rounded-xl border border-line bg-white shadow-brand">
            <picture>
              <source srcSet="/assets/gallery/seminar/seminar-03.webp" type="image/webp" />
              <img
                src="/assets/gallery/seminar/seminar-03.jpg"
                width="1100"
                height="619"
                alt="บรรยากาศ Seminar ที่ BizDrive Academy — พี่แบงค์สอน AI workflow แบบ hands-on กับเจ้าของธุรกิจ"
                fetchPriority="high"
                className="block aspect-video w-full object-cover max-[620px]:aspect-square"
              />
            </picture>
            <figcaption className="flex items-start justify-between gap-3 p-4 max-[620px]:flex-col">
              <strong className="text-[15px] leading-[1.35] text-ink">บรรยากาศจริงจากคลาส</strong>
              <span className="max-w-[260px] text-right text-[13px] leading-[1.45] text-muted max-[620px]:max-w-none max-[620px]:text-left">
                Seminar + Private ที่ BizDrive Academy กรุงเทพฯ
              </span>
            </figcaption>
          </figure>
          <div className="grid gap-2.5 max-[620px]:grid-cols-3">
            <Thumb src="/assets/gallery/seminar/seminar-09-thumb.jpg" alt="นักเรียนลงมือทำกับ AI workflow ใน Seminar" />
            <Thumb src="/assets/gallery/private/private-20-thumb.jpg" alt="Private 1:1 session กับพี่แบงค์ออกแบบ workflow" />
            <Thumb src="/assets/gallery/private/private-11-thumb.jpg" alt="คลาส Private ออกแบบระบบเฉพาะธุรกิจ" />
          </div>
        </div>

        <div className="mx-auto mt-7 grid max-w-[680px] grid-cols-3 gap-[14px] max-[620px]:mt-[34px] max-[620px]:max-w-[310px] max-[620px]:grid-cols-1">
          <Stat strong="3 ขั้นตอน" sub="คุย ออกแบบ ส่งมอบ" />
          <Stat strong="5 แบบ" sub="ตัวอย่างภาพพร้อมใช้" />
          <Stat strong="100%" sub="เน้นงานที่ใช้จริง" />
        </div>

        <div className="mx-auto mt-[18px] flex flex-wrap justify-center gap-2.5 max-[620px]:max-w-[320px]">
          <Proof>เหมาะกับเจ้าของธุรกิจเดี่ยว</Proof>
          <Proof>ลดงานซ้ำ</Proof>
          <Proof>ทำคอนเทนต์เร็วขึ้น</Proof>
        </div>
      </div>
    </section>
  );
}

function Thumb({ src, alt }) {
  return (
    <img
      src={src}
      width="240"
      height="240"
      alt={alt}
      loading="lazy"
      className="aspect-square w-full rounded-[10px] border border-line bg-white object-cover shadow-brand-sm"
    />
  );
}

function Stat({ strong, sub }) {
  return (
    <div className="rounded-lg border border-line bg-white/[.78] px-[14px] py-[18px] max-[620px]:p-[14px]">
      <strong className="block text-[clamp(1.25rem,3vw,1.7rem)] font-extrabold leading-[1.2] text-brand-blue">
        {strong}
      </strong>
      <span className="mt-1 block text-[13px] text-muted">{sub}</span>
    </div>
  );
}

function Proof({ children }) {
  return (
    <span className="rounded-full border border-[#dbe7f6] bg-white px-3 py-1.5 text-[13px] font-bold text-[#395067]">
      {children}
    </span>
  );
}

/* ─── Trust ─────────────────────────────────────────────── */
function TrustSection() {
  return (
    <section className="border-y border-line bg-brand-blue-dark py-[28px] text-white" aria-label="AI tools ที่เราสอน">
      <div className="bx-container">
        <p className="mb-5 text-center text-[13px] font-bold uppercase tracking-wider text-white/70 max-[620px]:text-[12px]">
          AI Stack ที่เราสอน — ใช้เครื่องมือที่ใช่กับงาน
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 max-[620px]:gap-2.5">
          {TRUST_LOGOS.map((l) => (
            <div
              key={l.name}
              title={l.name}
              className={`grid h-[48px] place-items-center rounded-lg bg-white shadow-brand-sm transition-transform duration-150 hover:-translate-y-0.5 ${l.wide ? "w-[88px] px-3" : "w-[48px] px-2"}`}
            >
              <img
                src={l.src}
                alt={l.name}
                width={l.wide ? 76 : 30}
                height={l.wide ? 22 : 30}
                loading="lazy"
                className={`w-auto object-contain ${l.wide ? "max-h-[22px]" : "max-h-[30px]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── AI Stack ──────────────────────────────────────────── */
const AI_TOOLS = [
  {
    name: "Manus AI",
    logo: "/assets/brand/ai/manus.svg",
    role: "Autonomous Agent",
    desc: "ทำงานครบขั้นตอนเอง — research → execute → deliver โดยไม่ต้องคอยพิมพ์สั่ง",
    use: "สร้าง landing page, ทำ research แข่งขัน, ตัดวิดีโอ, ทำ workflow อัตโนมัติ",
    tone: "blue",
  },
  {
    name: "ChatGPT",
    logo: "/assets/brand/ai/chatgpt.svg",
    role: "Conversation + Writing",
    desc: "ตัวคุยและเขียน long-form ที่ wide ที่สุด — เหมาะกับงานคอนเทนต์ทุกประเภท",
    use: "เขียนแคปชั่น, brainstorm idea, summarize, voice/brand training",
    tone: "blue",
  },
  {
    name: "Claude",
    logo: "/assets/brand/ai/anthropic.svg",
    role: "Deep Reasoning + Coding",
    desc: "เก่ง analysis ลึก, แม่นกับโค้ดและงานคิดเชิงระบบ ทำงานยาวเป็นชุดได้",
    use: "วิเคราะห์ข้อมูล, code review, business strategy, research deep-dive",
    tone: "orange",
  },
  {
    name: "Gemini",
    logo: "/assets/brand/ai/gemini.svg",
    role: "Multimodal + Long Context (Google)",
    desc: "อ่านเอกสาร/วิดีโอยาวได้ทีเดียวเป็นชั่วโมง — เหมาะกับงานที่ต้อง context ใหญ่ + เชื่อม Google Workspace",
    use: "วิเคราะห์เอกสารยาว, สรุปวิดีโอ/ประชุม, ทำงานใน Google Docs/Sheets",
    tone: "blue",
  },
  {
    name: "Codex CLI",
    logo: "/assets/brand/ai/openai.svg",
    logoWide: true,
    role: "AI in Terminal (OpenAI)",
    desc: "ใช้ AI ใน command line ของคุณ — automate งาน ops, file processing, scripting",
    use: "Batch process file, deploy script, automation รัน server",
    tone: "blue-dark",
  },
  {
    name: "Cursor / Claude Code",
    logo: "/assets/brand/ai/cursor.svg",
    role: "AI IDE",
    desc: "เขียนแอป/ทูลของคุณเองด้วย AI — แม้ไม่ใช่ developer ก็สร้างได้",
    use: "Landing page, internal tool, dashboard, automation app",
    tone: "blue",
  },
  {
    name: "Hyperframes",
    logo: "/assets/brand/ai/hyperframes-icon.png",
    role: "AI Video Framework",
    desc: "HTML-as-source video framework จาก HeyGen — ใช้คู่กับ Codex/Claude ตัด Reels/TikTok อัตโนมัติ",
    use: "Reels, TikTok, YouTube Short, kinetic caption, brand-consistent video",
    tone: "orange",
  },
];

const TONE_STYLES = {
  blue: { dot: "bg-brand-blue", text: "text-brand-blue", bg: "bg-brand-blue/[.06]" },
  orange: { dot: "bg-[#c2410c]", text: "text-[#c2410c]", bg: "bg-[#c2410c]/[.06]" },
  "blue-dark": { dot: "bg-brand-blue-dark", text: "text-brand-blue-dark", bg: "bg-brand-blue-dark/[.06]" },
};

function AIStackSection() {
  return (
    <section id="stack" className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[1120px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">AI Stack</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            ไม่ใช่แค่ตัวเดียว — เราสอน AI ทุกตัวที่ใช่กับงาน
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-[15px] text-muted">
            BizDrive เลือกใช้ AI tool ที่เหมาะกับแต่ละงาน — ไม่ใช่ยัด tool เดียวให้ทุกอย่าง
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {AI_TOOLS.map((t) => {
            const s = TONE_STYLES[t.tone] || TONE_STYLES.blue;
            return (
              <article key={t.name} className="flex flex-col rounded-[14px] border border-line bg-white p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-sky/45 hover:shadow-brand-sm">
                <div className="mb-3 flex items-center gap-3">
                  <div className={`grid h-[44px] w-[44px] flex-shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-white ${t.logoWide ? "px-1.5" : ""}`}>
                    <img
                      src={t.logo}
                      alt={t.name}
                      loading="lazy"
                      className={`max-h-[30px] w-auto object-contain ${t.logoWide ? "max-h-[18px]" : ""}`}
                    />
                  </div>
                  <div>
                    <div className="text-[1.05rem] font-extrabold leading-tight text-ink">{t.name}</div>
                    <div className={`text-[11.5px] font-semibold uppercase tracking-wider ${s.text}`}>{t.role}</div>
                  </div>
                </div>
                <p className="mb-3 text-[14px] leading-[1.6] text-muted">{t.desc}</p>
                <div className={`mt-auto rounded-lg px-3 py-2 text-[12.5px] leading-[1.55] text-ink/85 ${s.bg}`}>
                  <strong className="block text-[11px] font-extrabold uppercase tracking-wider text-muted">ใช้กับ</strong>
                  {t.use}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Use Cases ─────────────────────────────────────────── */
const USE_CASES = [
  {
    kicker: "เพิ่มประสิทธิภาพคน",
    icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /><path d="M16 4l1.5 1.5L20 3" /></>,
    title: "ทำงานคนเดียว ผลงานเหมือนทีม",
    stack: "ChatGPT + Claude + Manus AI",
    result: "ลดเวลา 60-80%",
    text: "เขียนแคปชั่น 1 เดือนใน 2 ชม., สรุปประชุม, draft email, brainstorm — สิ่งที่ผู้ช่วยทำ ให้ AI ทำแทน",
  },
  {
    kicker: "ทำระบบใช้เอง",
    icon: <><path d="M3 3h18v18H3z" /><path d="M3 8h18M9 3v18" /><circle cx="6" cy="5.5" r="0.5" fill="currentColor" /></>,
    title: "สร้างเครื่องมือของธุรกิจคุณเอง",
    stack: "Cursor / Claude Code + Manus",
    result: "Launch ใน 1 วัน",
    text: "Landing page, ระบบจอง, mini-app ภายใน, lead form — ไม่ต้องจ้าง dev ไม่ต้องเช่า SaaS แพง ๆ",
  },
  {
    kicker: "งาน Automation",
    icon: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 6h7M6 8.5v7M18 8.5v7M8.5 18h7" /></>,
    title: "งานซ้ำให้ระบบทำเอง",
    stack: "Codex CLI + Python + Sheets + LINE",
    result: "ประหยัด 60-80% เวลา",
    text: "Auto invoice, file rename, daily report, sync ข้อมูลข้ามแอป, แจ้งเตือน LINE/อีเมล อัตโนมัติ",
  },
  {
    kicker: "สร้างภาพ AI",
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="M21 16l-5-5L5 21" /></>,
    title: "ภาพแบรนด์/สินค้า/โฆษณา",
    stack: "Midjourney + DALL-E + Manus",
    result: "ภาพ 50 ภาพ/ชั่วโมง",
    text: "Poster, banner, IG carousel, ภาพสินค้า, ภาพประกอบโพสต์ — รักษา brand consistency อัตโนมัติ",
  },
  {
    kicker: "สร้างวิดีโอ",
    icon: <><rect x="3" y="6" width="14" height="12" rx="2" /><path d="M17 10l4-2v8l-4-2z" /><path d="M9 12l2.5 1.5L9 15z" /></>,
    title: "Reels / TikTok / YouTube Short",
    stack: "Codex / Claude + Hyperframes + Whisper",
    result: "1 ชม. ได้ 5 คลิป",
    text: "Cut dead air, transcribe ไทย, caption + motion + B-Roll อัตโนมัติ — pipeline เดียวจบ พร้อมโพสต์",
    href: "/ai-editor/online",
    hrefLabel: "ดูคลาส AI Editor",
  },
  {
    kicker: "สร้าง Dashboard",
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 12h18" /><path d="M7 17v-3M11 17v-5M15 17v-7M19 17v-2" /></>,
    title: "Dashboard ของธุรกิจคุณ",
    stack: "Cursor + Sheets/Postgres + Charts",
    result: "Real-time ทุกเมตริก",
    text: "Sales, leads, traffic, ad spend, KPI — ดูบนหน้าเดียว, refresh อัตโนมัติ, ไม่ต้องเปิดหลายแอป",
  },
];

function UseCasesSection() {
  return (
    <section className="bg-soft py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[1120px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">Use Case จริง</span>
          <h2 className="mx-auto max-w-[820px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            ใช้ AI กับงานไหนได้บ้าง — ดูตัวอย่างจากธุรกิจที่ทำจริง
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-[15px] text-muted">
            ทุก use case คือ workflow ที่เราใช้จริงและสอนในคลาส
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {USE_CASES.map((u) => (
            <article key={u.title} className="flex flex-col rounded-[14px] border border-line bg-white p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-sky/45 hover:shadow-brand-sm">
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="grid h-[44px] w-[44px] place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[22px] w-[22px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.9]">
                    {u.icon}
                  </svg>
                </div>
                <span className="inline-flex items-center rounded-full bg-brand-yellow px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink">
                  {u.kicker}
                </span>
              </div>
              <h3 className="mb-1 text-[1.02rem] font-extrabold leading-[1.35] text-ink">{u.title}</h3>
              <p className="mb-3 text-[13.5px] leading-[1.55] text-muted">{u.text}</p>
              <div className="mt-auto grid gap-1.5 border-t border-line pt-3 text-[12px]">
                <div>
                  <span className="font-extrabold uppercase tracking-wider text-muted">Stack:</span>
                  <span className="ml-1.5 text-ink">{u.stack}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#047857]/10 px-2.5 py-0.5 font-extrabold text-[#047857]">
                    <span aria-hidden="true">↑</span> {u.result}
                  </div>
                  {u.href ? (
                    <a href={u.href} className="text-[11.5px] font-extrabold text-brand-blue underline decoration-brand-blue/40 underline-offset-2 hover:decoration-brand-blue">
                      {u.hrefLabel} →
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="services" className="py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container">
        <h2 className="mx-auto max-w-[760px] text-balance text-center text-[clamp(1.75rem,4vw,2.6rem)] font-extrabold leading-[1.18]">
          เราช่วยอะไรคุณได้บ้าง
        </h2>
        <p className="mx-auto mt-[14px] mb-[42px] max-w-[620px] text-center text-muted max-[620px]:mb-8">
          เครื่องมือ AI ที่ออกแบบมาเพื่อคนทำธุรกิจ ไม่ใช่คนทำเทคโนโลยี
        </p>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, text, paths = [], rects = [], circles = [] }) {
  return (
    <article className="group rounded-lg border border-line bg-white px-[26px] py-[30px] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-sky/45 hover:shadow-brand">
      <div className="mb-[18px] grid h-[54px] w-[54px] place-items-center rounded-lg bg-[#eef6ff] text-brand-blue">
        <svg viewBox="0 0 24 24" className="h-[27px] w-[27px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]" aria-hidden="true">
          {rects.map((r, i) => (
            <rect key={`r${i}`} x={r.x} y={r.y} width={r.w} height={r.h} rx={r.rx} />
          ))}
          {paths.map((d, i) => (
            <path key={`p${i}`} d={d} />
          ))}
          {circles.map((c, i) => (
            <circle key={`c${i}`} cx={c.cx} cy={c.cy} r={c.r} />
          ))}
        </svg>
      </div>
      <h3 className="mb-2 text-[1.15rem] font-extrabold">{title}</h3>
      <p className="text-[15px] text-muted">{text}</p>
    </article>
  );
}

/* ─── AI Gallery ────────────────────────────────────────── */
function GallerySection() {
  return (
    <section id="ai-gallery" className="bg-soft py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">ผลงานจริง</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-center text-[clamp(1.75rem,4vw,2.6rem)] font-extrabold leading-[1.18]">
            งานจริงจากคลาส BizDrive
          </h2>
          <p className="mx-auto mt-[14px] max-w-[620px] text-center text-muted">
            ภาพจริงจาก Seminar และ Private 1:1 ที่ผ่านมา · พี่แบงค์ลงมือสอนเอง · ออกแบบ workflow กับลูกค้าจริง
          </p>
        </div>

        <div className="grid grid-cols-4 gap-[18px] max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {GALLERY.map((g) => (
            <GalleryItem key={g.src} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ src, alt, title, sub, featured = false }) {
  return (
    <article
      className={`overflow-hidden rounded-lg border border-line bg-white transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-sky/45 hover:shadow-brand ${
        featured ? "col-span-2 row-span-2 max-[620px]:col-span-1 max-[620px]:row-span-1" : ""
      }`}
    >
      <img src={src} width="900" height="900" alt={alt} loading="lazy" className="aspect-square w-full object-cover" />
      <div className="flex items-start justify-between gap-3 p-[14px] text-[13px] text-muted max-[620px]:flex-col">
        <strong className="text-[14px] leading-[1.25] text-ink">{title}</strong>
        <span className="text-right leading-[1.35] max-[620px]:text-left">{sub}</span>
      </div>
    </article>
  );
}

/* ─── How ───────────────────────────────────────────────── */
function HowSection() {
  return (
    <section id="how" className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container">
        <h2 className="mx-auto max-w-[760px] text-balance text-center text-[clamp(1.75rem,4vw,2.6rem)] font-extrabold leading-[1.18]">
          ทำงานกับเรายังไง
        </h2>
        <p className="mx-auto mt-[14px] mb-[42px] max-w-[620px] text-center text-muted max-[620px]:mb-8">
          เรียบง่าย ตรงไปตรงมา เริ่มได้เลย
        </p>
        <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
          {STEPS.map((s) => (
            <Step key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ num, title, text }) {
  return (
    <div className="rounded-lg border border-line bg-white px-[24px] py-[30px] text-center">
      <span className="mx-auto mb-4 grid h-[44px] w-[44px] place-items-center rounded-full bg-brand-blue text-[19px] font-extrabold text-brand-yellow">
        {num}
      </span>
      <h3 className="mb-2 text-[1.15rem] font-extrabold">{title}</h3>
      <p className="text-[15px] text-muted">{text}</p>
    </div>
  );
}

/* ─── Classroom (real photos) ───────────────────────────── */
const CLASSROOM_PHOTOS = [
  { src: "/assets/gallery/private/private-01.jpg", alt: "บรรยากาศ Private class ที่ BizDrive Academy" },
  { src: "/assets/gallery/seminar/seminar-02.jpg", alt: "พี่แบงค์สอน Private กับลูกค้า" },
  { src: "/assets/gallery/seminar/seminar-04.jpg", alt: "Seminar workshop ที่ BizDrive Academy" },
  { src: "/assets/gallery/private/private-03.jpg", alt: "บรรยากาศคลาสเรียน BizDrive" },
  { src: "/assets/gallery/seminar/seminar-05.jpg", alt: "นักเรียนลงมือทำใน Workshop" },
  { src: "/assets/gallery/private/private-05.jpg", alt: "พี่แบงค์โค้ช 1:1 ในคลาส Private" },
  { src: "/assets/gallery/seminar/seminar-08.jpg", alt: "Hands-on session ใน Workshop" },
  { src: "/assets/gallery/private/private-10.jpg", alt: "Private session — พี่แบงค์ออกแบบ workflow" },
];

function ClassroomSection() {
  return (
    <section id="classroom" className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[1080px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">บรรยากาศจริง</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            บรรยากาศคลาสที่ BizDrive Academy
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[15px] text-muted">
            ภาพจริงจาก Private session + Workshop ที่ผ่านมา · พี่แบงค์ลงมือสอนเองทุกคลาส
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-2">
          {CLASSROOM_PHOTOS.map((p, i) => (
            <figure
              key={p.src}
              className={`overflow-hidden rounded-lg border border-line bg-soft transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-brand-sm ${
                i === 0 ? "col-span-2 row-span-2 aspect-square max-[620px]:col-span-2 max-[620px]:row-span-1 max-[620px]:aspect-[4/3]" : "aspect-square"
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width="1200"
                height="1200"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing / Class ───────────────────────────────────── */
const COURSE_TRACKS = [
  {
    label: "Course 1",
    title: "Manus AI — วางระบบธุรกิจด้วย AI",
    sub: "Online เรียนเอง · Seminar 1 วันเต็ม · เลือกที่จังหวะคุณ",
    count: "2 รูปแบบ",
    accent: { bg: "bg-brand-blue/10", text: "text-brand-blue" },
    cols: 2,
    slugs: MANUS_PLAN_ORDER,
    advice: {
      title: "Course นี้เหมาะกับคุณถ้า…",
      bullets: [
        "อยากใช้ AI วางระบบธุรกิจให้ทำงานต่อเองได้ — ลดงานซ้ำ, automate ส่วนงาน",
        "ทำคอนเทนต์/แคปชั่น/ภาพประกอบเป็นประจำ และอยากให้เร็วขึ้น 3-5 เท่า",
        "เริ่มต้นได้แม้ไม่เคยใช้ AI มาก่อน — Online เรียนเองได้ทันที",
      ],
      pickHint: "💡 มือใหม่ / อยากเริ่มเอง → Online · อยากลงมือกับเพื่อน + hands-on → Seminar",
    },
  },
  {
    label: "Course 2 · ใหม่",
    title: "AI Video Editor — ตัดต่อด้วย AI Agent",
    sub: "Codex CLI / Claude Code + Hyperframes — pipeline จาก footage 1 ชม. → Reels 5 นาที",
    count: "2 รูปแบบ",
    accent: { bg: "bg-[#c2410c]/10", text: "text-[#c2410c]" },
    cols: 2,
    slugs: AI_EDITOR_PLAN_ORDER,
    advice: {
      title: "Course นี้เหมาะกับคุณถ้า…",
      bullets: [
        "ปล่อยวิดีโอ Reels/TikTok/YouTube เป็นประจำ และอยากตัดเองให้ scale ได้",
        "เคยจ้างคนตัดแต่ส่งงานกลับมาไม่ตรงสไตล์ — อยาก brand consistency 100%",
        "พร้อมเรียนใช้ AI Agent (Codex/Claude) สั่งงานผ่านคอมมานด์",
      ],
      pickHint: "💡 อยากลองก่อน → เริ่ม Online · ต้องการ setup pipeline ในวันเดียว → Seminar",
    },
  },
];

function PricingSection() {
  return (
    <section id="class" className="bg-soft py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container">
        <div className="mb-[44px] text-center">
          <span className="section-kicker mb-[14px]">Course เรียน AI</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-center text-[clamp(1.75rem,4vw,2.6rem)] font-extrabold leading-[1.18]">
            เรียน AI แบบลงมือทำจริง — เลือก Course ที่ใช่กับคุณ
          </h2>
          <p className="mx-auto mt-[14px] max-w-[680px] text-center text-muted">
            2 Courses หลัก (Online / Seminar) · หรือถ้าอยากได้ workflow Custom ดู Private 1:1 ด้านล่าง
          </p>
        </div>

        <div className="grid gap-[72px] max-[620px]:gap-[56px]">
          {COURSE_TRACKS.map((track) => (
            <CourseTrack key={track.label} track={track} />
          ))}
          <PrivateCallout />
        </div>
      </div>
    </section>
  );
}

function PrivateCallout() {
  const plan = PLANS[PRIVATE_SLUG];
  return (
    <div>
      <div className="mb-[22px] flex items-start justify-between gap-3 max-[620px]:flex-col">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-blue-dark/10 px-3 py-1 text-[12px] font-extrabold uppercase tracking-wider text-brand-blue-dark">
            Custom 1:1 · ทางเลือกพิเศษ
          </span>
          <h3 className="mt-2 text-[1.3rem] font-extrabold text-ink max-[620px]:text-[1.15rem]">
            Private 1:1 — เนื้อหา Custom ทุกอย่าง
          </h3>
          <p className="mt-1 text-[13.5px] text-muted">
            ไม่ใช่ Manus หรือ AI Editor โดยเฉพาะ — เลือกหัวข้อเองได้ทุก session ตามธุรกิจคุณ
          </p>
        </div>
        <span className="flex-shrink-0 text-[12.5px] font-semibold text-muted max-[620px]:order-first">
          1:1 กับพี่แบงค์
        </span>
      </div>

      <article className="grid grid-cols-[1.1fr_1fr] gap-7 rounded-[14px] border-2 border-brand-blue/25 bg-brand-blue-dark p-7 text-white shadow-brand max-[900px]:grid-cols-1 max-[620px]:p-5">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-yellow px-3 py-1 text-[12px] font-extrabold text-ink">
            {plan.badge}
          </span>
          <h4 className="mt-3 text-[1.35rem] font-extrabold leading-[1.25]">{plan.name}</h4>
          <p className="mt-2 text-[14px] text-white/80">{plan.tagline}</p>
          <ul className="mt-4 grid list-none gap-2 text-[14px] text-white/90">
            {[
              "เลือกหัวข้อเองได้ทุก session — Manus, AI Editor, workflow, automation, business strategy",
              "4 sessions × 90 นาที · spread ใน 4-8 สัปดาห์ตามจังหวะคุณ",
              "60 วัน group support หลัง 4 sessions จบ",
              "Online (Zoom) หรือเจอกันที่ BizDrive Academy",
            ].map((t) => (
              <li key={t} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-[2px] flex-shrink-0 text-brand-yellow">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-5 rounded-[12px] bg-white/[.08] p-5">
          <div className="text-center [font-variant-numeric:tabular-nums]">
            <span className="block text-[12px] font-bold uppercase tracking-wider text-white/70">ราคา 1:1 Custom</span>
            <div className="mt-1 flex items-baseline justify-center gap-1.5">
              {plan.originalPrice ? (
                <span className="text-[14px] font-semibold text-white/50 line-through">฿{plan.originalPrice.toLocaleString()}</span>
              ) : null}
              <span className="text-[1.4rem] font-extrabold text-brand-yellow">฿</span>
              <span className="text-[2.3rem] font-extrabold leading-none text-brand-yellow">{plan.price.toLocaleString()}</span>
            </div>
            <p className="mt-2 text-[12.5px] text-white/70">{plan.priceNote}</p>
          </div>
          <div className="grid gap-2">
            <a href={urlForPlan(PRIVATE_SLUG)} className="btn btn-primary w-full">
              ดูรายละเอียด Private
            </a>
            <a href="/contact" className="btn btn-outline w-full" style={{ borderColor: "rgba(255,255,255,0.35)", color: "white", background: "rgba(255,255,255,0.06)" }}>
              ทักมาสอบถาม
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function CourseTrack({ track }) {
  const colsClass = track.cols === 3 ? "grid-cols-3 max-[900px]:grid-cols-1" : "grid-cols-2 max-[900px]:grid-cols-1";
  return (
    <div>
      <div className="mb-[22px] flex items-start justify-between gap-3 max-[620px]:flex-col">
        <div>
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-extrabold uppercase tracking-wider ${track.accent.bg} ${track.accent.text}`}>
            {track.label}
          </span>
          <h3 className="mt-2 text-[1.3rem] font-extrabold text-ink max-[620px]:text-[1.15rem]">{track.title}</h3>
          <p className="mt-1 text-[13.5px] text-muted">{track.sub}</p>
        </div>
        <span className="flex-shrink-0 text-[12.5px] font-semibold text-muted max-[620px]:order-first">
          {track.count}
        </span>
      </div>

      <div className="mb-[22px] rounded-[14px] border border-line bg-white/70 px-5 py-4 backdrop-blur-sm">
        <strong className="block text-[13px] font-extrabold uppercase tracking-wider text-muted">
          {track.advice.title}
        </strong>
        <ul className="mt-2 grid list-none gap-1.5">
          {track.advice.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-[14px] leading-[1.6] text-ink/85">
              <span aria-hidden="true" className={`mt-[2px] flex-shrink-0 ${track.accent.text}`}>✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t border-line/60 pt-3 text-[13px] text-ink/80">
          {track.advice.pickHint}
        </p>
      </div>

      <div className={`grid gap-[22px] ${colsClass}`}>
        {track.slugs.map((slug, i) => (
          <ClassCard key={slug} plan={PLANS[slug]} featured={i === 0} />
        ))}
      </div>
    </div>
  );
}

function ClassCard({ plan, featured }) {
  return (
    <article className={`flex flex-col rounded-[14px] border bg-white p-[28px] text-center transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-brand ${featured ? "border-brand-blue/35 shadow-brand" : "border-line"}`}>
      <span className={`mx-auto mb-4 inline-flex items-center rounded-full px-[14px] py-1.5 text-[13px] font-extrabold ${featured ? "bg-brand-yellow text-ink" : "bg-soft text-brand-blue"}`}>
        {plan.badge}
      </span>
      <h3 className="text-[1.2rem] font-extrabold leading-[1.3]">{plan.name}</h3>
      <p className="mt-2 text-[14px] text-muted">{plan.cardSub}</p>
      <div className="my-5 flex flex-wrap items-baseline justify-center gap-1 border-y border-line py-[18px] [font-variant-numeric:tabular-nums]">
        <span className="text-[1.4rem] font-extrabold text-brand-blue">฿</span>
        <span className="text-[clamp(2rem,5vw,2.6rem)] font-extrabold leading-none text-brand-blue">
          {plan.price.toLocaleString()}
        </span>
      </div>
      <p className="mb-[20px] text-[13.5px] text-muted">{plan.tagline}</p>
      <a href={urlForPlan(plan.slug)} className={`btn mt-auto w-full ${featured ? "btn-primary" : "btn-outline"}`}>
        ดูรายละเอียด
      </a>
    </article>
  );
}

/* ─── Pricing Comparison ─────────────────────────────────── */
const COMPARE_COLS = [...MANUS_PLAN_ORDER, ...AI_EDITOR_PLAN_ORDER];

const COMPARE_ROWS = [
  { label: "ราคา", values: ["฿3,900", "฿9,900", "฿3,900", "฿9,900"], highlight: true },
  { label: "รูปแบบ", values: ["Self-paced online", "Workshop 1 วัน · in-person", "Self-paced online", "Workshop 1 วัน · in-person"] },
  { label: "ระยะเวลา", values: ["เรียนได้ตลอด", "1 วันเต็ม", "เรียนได้ตลอด", "1 วันเต็ม"] },
  { label: "ที่เรียน", values: ["ที่ไหนก็ได้", "BizDrive Academy", "ที่ไหนก็ได้", "BizDrive Academy"] },
  { label: "ขนาดกลุ่ม", values: ["—", "20 ท่าน/รอบ", "—", "15 ท่าน/รอบ"] },
  { label: "Support หลังจบ", values: ["Community", "30 วัน", "Community + Office hour", "30 วัน"] },
  { label: "Hands-on workshop", values: [false, true, false, true] },
  { label: "Setup pipeline บนเครื่องคุณ", values: [false, false, false, true] },
  { label: "Recording / ทบทวนได้", values: [true, true, true, true] },
  { label: "เหมาะกับ", values: ["มือใหม่ AI", "อยาก hands-on + network", "คนทำ Reels/TikTok เอง", "อยาก setup pipeline ในวันเดียว"] },
];

function ComparisonSection() {
  return (
    <section className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[1080px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">เปรียบเทียบ 2 Courses</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            เลือก Course / รูปแบบที่ใช่กับธุรกิจคุณ
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[14.5px] text-muted">
            4 รูปแบบ (Manus Online/Seminar + AI Editor Online/Seminar) · หากต้องการเนื้อหา Custom 1:1 ดู <a href="/private" className="font-bold text-brand-blue underline decoration-brand-blue/40 underline-offset-2 hover:decoration-brand-blue">Private 1:1</a>
          </p>
        </div>

        <div className="overflow-x-auto rounded-[14px] border border-line bg-white shadow-brand-sm">
          <table className="w-full min-w-[820px] border-collapse text-left text-[13.5px]">
            <thead>
              <tr className="bg-soft">
                <th className="sticky left-0 z-10 bg-soft px-3 py-4 text-[12px] font-bold uppercase tracking-wide text-muted">
                  คุณสมบัติ
                </th>
                {COMPARE_COLS.map((slug) => {
                  const plan = PLANS[slug];
                  const shortName = plan.name.replace("Manus AI — ", "Manus ").replace("AI Video Editor — ", "Video ");
                  return (
                    <th key={slug} className="px-3 py-4 text-center">
                      <a href={urlForPlan(slug)} className="group inline-block">
                        <span className="block text-[11px] font-semibold text-muted">{plan.badge}</span>
                        <span className="block text-[14.5px] font-extrabold text-ink group-hover:text-brand-blue">
                          {shortName}
                        </span>
                      </a>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 1 ? "bg-soft/40" : ""}>
                  <td className="sticky left-0 z-10 bg-inherit px-3 py-3 text-[12.5px] font-semibold text-muted">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td
                      key={j}
                      className={`px-3 py-3 text-center ${row.highlight ? "[font-variant-numeric:tabular-nums] text-[1rem] font-extrabold text-brand-blue" : ""}`}
                    >
                      {typeof v === "boolean" ? (
                        v ? (
                          <span aria-label="ใช่" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#047857]/10 text-[#047857]">✓</span>
                        ) : (
                          <span aria-label="ไม่" className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted/15 text-muted">—</span>
                        )
                      ) : (
                        <span className={row.highlight ? "" : "text-ink"}>{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="px-3 py-4"></td>
                {COMPARE_COLS.map((slug, i) => (
                  <td key={slug} className="px-3 py-4 text-center">
                    <a href={urlForPlan(slug)} className={`btn ${i === 0 ? "btn-primary" : "btn-outline"} text-[12.5px]`} style={{ minHeight: "38px", padding: "7px 14px" }}>
                      ดู
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-[12.5px] text-muted">เลื่อนแนวนอนได้บนมือถือ · คลิกชื่อคลาสเพื่อดูข้อมูลเต็ม</p>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="bg-[linear-gradient(180deg,#fff,#f8fbff)] py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-[44px] max-[900px]:grid-cols-1">
          <div>
            <h2 className="text-balance text-[clamp(1.75rem,4vw,2.6rem)] font-extrabold leading-[1.18] max-[900px]:text-center">
              เกี่ยวกับ BizDrive
            </h2>
            <p className="mt-4 text-[15px] text-muted">
              BizDrive เกิดจากความเชื่อว่า เจ้าของธุรกิจตัวเล็กก็ทำสิ่งใหญ่ได้ ถ้ามีเครื่องมือที่ใช่
              เราเป็นทีมเล็ก ๆ ที่ลงมือทำธุรกิจจริง เลยเข้าใจว่าอะไรใช้ได้จริง อะไรแค่ดูดีในสไลด์
            </p>
            <p className="mt-4 text-[15px] text-muted">
              เราไม่ขายเทคโนโลยีที่ฟังดูเท่ แต่ส่งมอบสิ่งที่ทำให้ ธุรกิจคุณเดินหน้าได้ — ทีละก้าว
              อย่างมั่นคง
            </p>
          </div>
          <div className="rounded-lg bg-brand-blue-dark p-[34px] text-white max-[620px]:p-[26px]">
            <div className="mb-5 flex items-center gap-4">
              <div className="relative h-[68px] w-[68px] flex-shrink-0 overflow-hidden rounded-full border-2 border-brand-yellow bg-white/10">
                <img
                  src="/assets/profile/profile-bank-sm.jpg"
                  width="160"
                  height="160"
                  alt="พี่แบงค์ ปรัชญา"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <strong className="block text-[15px] font-extrabold leading-tight">พี่แบงค์ ปรัชญา</strong>
                <span className="text-[12.5px] text-white/70">Founder, BizDrive</span>
              </div>
            </div>
            <blockquote className="border-l-4 border-brand-yellow pl-[18px] text-[1.32rem] font-extrabold leading-[1.5]">
              &ldquo;ทำธุรกิจคนเดียว ไม่ได้แปลว่าต้องทำทุกอย่างคนเดียว&rdquo;
            </blockquote>
            <p className="mt-[18px] text-[14px] text-white/[.78]">
              เราเริ่มจากเป้าหมายทางธุรกิจ แล้วค่อยเลือก AI ที่ช่วยให้งานนั้นเดินเร็วขึ้นจริง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Subscribe ─────────────────────────────────────────── */
function SubscribeSection() {
  return (
    <section id="subscribe" className="bg-soft py-[72px] max-[620px]:py-[54px]">
      <div className="bx-container max-w-[640px] text-center">
        <span className="section-kicker mb-[14px]">รับข่าวสาร</span>
        <h2 className="mx-auto max-w-[560px] text-balance text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold leading-[1.22]">
          ฝากอีเมล เรื่องคลาสและเครื่องมือ AI ใหม่ ๆ ส่งตรงถึงคุณ
        </h2>
        <p className="mx-auto mt-3 mb-6 max-w-[520px] text-[15px] text-muted">
          เปิดรอบใหม่ของคลาส แจ้งสมัครก่อนใคร พร้อมเทคนิคและเวิร์กโฟลว์ AI ที่ BizDrive ใช้จริง
        </p>
        <div className="mx-auto max-w-[460px] text-left">
          <LeadForm source="home-subscribe" buttonLabel="สมัครรับข่าว" />
        </div>
      </div>
    </section>
  );
}

/* ─── Home FAQ ──────────────────────────────────────────── */
const HOME_FAQS = [
  {
    q: "BizDrive ต่างจากคอร์ส AI อื่นยังไง?",
    a: "เราเป็นทีมที่ทำธุรกิจจริงทุกวัน ไม่ใช่ทีมที่อ่านสอนต่อ — สอนเฉพาะ workflow ที่ใช้กับลูกค้าจริงและเห็นผลแล้ว ไม่ใช่ทฤษฎีรวบรวมจาก YouTube · เน้น One Person Business ที่ไม่มีทีม dev/agency · ภาษาไทยล้วน ไม่ต้องอ่าน docs อังกฤษเอง",
  },
  {
    q: "ไม่เคยใช้ AI มาก่อน เริ่มที่คลาสไหนดี?",
    a: "เริ่ม Manus AI Online (฿3,900) — ออกแบบสำหรับมือใหม่ที่สุด · มีตัวอย่าง prompt 50+ ชุดเอาไปใช้ได้เลย · เรียนได้ตลอด · 7-day money back guarantee · ถ้าผ่านไปสองสัปดาห์อยากเจอเพื่อน ค่อยขยับ Seminar/Private ต่อ",
  },
  {
    q: "ค่าใช้จ่ายของเครื่องมือ AI ต่อเดือนเท่าไหร่?",
    a: "เริ่มฟรีได้ทั้งหมด · ถ้าจริงจังประมาณ ฿700-2,000/เดือน (ChatGPT Plus ฿700 + Claude Pro ฿700 + Manus credits ตามใช้) · เทียบค่าผู้ช่วย/นักตัดต่อที่ ฿15,000-30,000/เดือน คุ้มกว่ามาก — เราจะแนะนำใน course ว่าจ่ายอะไรคุ้ม จ่ายอะไรไม่ต้อง",
  },
  {
    q: "ทำธุรกิจอะไรก็เรียนได้ไหม? เหมาะกับธุรกิจไทยหรือเปล่า?",
    a: "เหมาะ — เราเทรน prompt และตัวอย่างกับธุรกิจไทย (ร้านอาหาร, ค้าออนไลน์, ฟรีแลนซ์, B2B, บริการ, การศึกษา) · AI ทุกตัวที่สอนใช้ภาษาไทยได้ดี · ใน Private (1:1) ออกแบบ workflow เฉพาะธุรกิจคุณเลย",
  },
  {
    q: "Manus AI กับ AI Video Editor course ต่างกันยังไง?",
    a: "Manus AI = วางระบบธุรกิจทั้งภาพ (คอนเทนต์, automation, dashboard, ฯลฯ) · AI Video Editor = เฉพาะตัดต่อวิดีโอด้วย Codex/Claude + Hyperframes · ถ้าปล่อยคลิป Reels/TikTok เป็นประจำและอยากตัดเอง → AI Video Editor · ถ้าอยากใช้ AI กว้างกว่านั้น → Manus AI",
  },
  {
    q: "หลังเรียนจบ ติดปัญหาถามได้ที่ไหน?",
    a: "ทุกคลาสมี Community Group (ทีม BizDrive ตอบเอง ทุกวัน) · Seminar มี 30-day group support · Private มี 60-day support + ทักได้ตลอด · ไม่ใช่เรียนจบแล้วทิ้ง",
  },
  {
    q: "ออกใบกำกับภาษี / ใบเสร็จได้ไหม?",
    a: "ออกได้เต็มรูปแบบ (ใบกำกับภาษี/ใบเสร็จ) — แจ้งข้อมูลบริษัทตอนสมัคร หรือทักมาที่ hello@bizdrive.co · ยินดีรับบัตรเครดิตทุกประเภท (Visa, Mastercard, Amex)",
  },
  {
    q: "ถ้าอยากปรึกษาก่อนสมัคร ทำยังไง?",
    a: "ทักผ่าน LINE @bizdrive (ตอบเร็วสุด 1-2 ชม. ในเวลาทำการ) หรือกรอกฟอร์มที่หน้า /contact · สอบถามรายละเอียดก่อนสมัครได้ทุก course",
  },
];

function HomeFaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section id="faq" className="bg-white py-[84px] max-[620px]:py-[62px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bx-container max-w-[800px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">FAQ</span>
          <h2 className="mx-auto max-w-[680px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            คำถามที่เจอบ่อย
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-[14.5px] text-muted">
            ตอบสิ่งที่ลูกค้าถามก่อนสมัครจริง ๆ · ถ้ายังไม่ครอบคลุม <a href="/contact" className="font-bold text-brand-blue underline decoration-brand-blue/40 underline-offset-2 hover:decoration-brand-blue">ทักมาถามได้</a>
          </p>
        </div>
        <div className="grid gap-3">
          {HOME_FAQS.map((f) => (
            <details key={f.q} className="group rounded-lg border border-line bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-extrabold text-ink">
                {f.q}
                <span aria-hidden="true" className="text-brand-blue transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/contact" className="btn btn-outline">มีคำถามเพิ่ม? ทักทีม BizDrive</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact / CTA ─────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="bg-brand-blue py-[84px] text-center text-white max-[620px]:py-[62px]">
      <div className="bx-container">
        <h2 className="mx-auto max-w-[700px] text-[clamp(1.65rem,4vw,2.45rem)] font-extrabold leading-[1.22]">
          พร้อมให้ AI ช่วยขับเคลื่อนธุรกิจคุณแล้วหรือยัง
        </h2>
        <p className="my-[14px] mb-7 text-white/[.82]">ทักมาคุยกันก่อนได้ ไม่มีค่าใช้จ่าย · ตอบทุกข้อความเอง</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/contact" className="btn bg-brand-yellow text-ink hover:brightness-105 max-[620px]:w-full max-[620px]:max-w-[300px]">
            กรอกฟอร์มติดต่อ →
          </a>
          <a
            href="https://lin.ee/tLEXtzuJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 font-bold text-white transition-[background-color,border-color] hover:border-white/50 hover:bg-white/15 max-[620px]:w-full max-[620px]:max-w-[300px] max-[620px]:justify-center"
          >
            <img src="/assets/brand/contact/line.svg" alt="" width="20" height="20" className="h-[20px] w-[20px]" />
            <span>LINE <span className="font-extrabold tabular-nums">@bizdrive</span></span>
          </a>
          <a
            href="tel:+66953340643"
            className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 font-bold text-white transition-[background-color,border-color] hover:border-white/50 hover:bg-white/15 max-[620px]:w-full max-[620px]:max-w-[300px] max-[620px]:justify-center"
          >
            <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-brand-yellow text-brand-blue">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.4]">
                <path d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 .94.66l1.5 4.1a1 1 0 0 1-.27 1.04l-1.6 1.6a14 14 0 0 0 6.5 6.5l1.6-1.6a1 1 0 0 1 1.04-.27l4.1 1.5a1 1 0 0 1 .66.94V19a2 2 0 0 1-2 2A18 18 0 0 1 3 5z" />
              </svg>
            </span>
            <span className="font-extrabold tabular-nums">095-334-0643</span>
          </a>
        </div>
        <div className="mt-7 flex flex-col items-center gap-2">
          <p className="text-[12.5px] font-semibold uppercase tracking-wider text-white/70">ติดตามเรา</p>
          <SocialIcons variant="dark" size="md" />
        </div>
      </div>
    </section>
  );
}
