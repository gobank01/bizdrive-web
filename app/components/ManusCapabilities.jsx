const CAPABILITIES = [
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </>
    ),
    title: "Autonomous Agent ตัวจริง",
    text: "ไม่ใช่แค่ chatbot — Manus วางแผน เปิด browser/terminal/file system ทำงานเอง ทดสอบผลลัพธ์ แล้วส่งงานเสร็จ โดยไม่ต้องคอยพิมพ์สั่งทีละขั้น",
  },
  {
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <circle cx="8" cy="14" r="1.5" />
        <path d="M11 13l3 3 4-5" />
      </>
    ),
    title: "คอนเทนต์และภาพ",
    text: "สร้าง poster, banner, IG carousel, ad creative หลายขนาดต่อหลาย platform พร้อมใช้ — รักษา brand consistency อัตโนมัติ",
  },
  {
    icon: (
      <>
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path d="M17 10l4-2v8l-4-2z" />
        <path d="M9 12l2.5 1.5L9 15z" />
      </>
    ),
    title: "วิดีโอ Reels/TikTok",
    text: "Image-to-video, talking-head, ใส่ caption + ดนตรีอัตโนมัติ — ผลิตคลิปสั้นเป็นชุดได้ในเวลาเป็นนาที",
  },
  {
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M11 7v4l3 2" />
      </>
    ),
    title: "งานวิจัยและข้อมูล",
    text: "เปิดเว็บจริง อ่านจริง สรุปจริง — เก็บข้อมูลคู่แข่ง วิเคราะห์กลุ่มลูกค้า ทำ report พร้อมส่ง",
  },
  {
    icon: (
      <>
        <path d="M3 3h18v18H3z" />
        <path d="M3 8h18" />
        <circle cx="6" cy="5.5" r="0.5" fill="currentColor" />
        <circle cx="8" cy="5.5" r="0.5" fill="currentColor" />
        <path d="M7 12h7M7 15h5M7 18h6" />
      </>
    ),
    title: "Web App Builder",
    text: "สั่งให้ Manus สร้างเว็บเต็มได้ — มี database, Stripe payment, SEO มาในตัว เหมาะกับ landing page หรือ internal tool",
  },
  {
    icon: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="8" r="2.5" />
        <circle cx="8" cy="17" r="2.5" />
        <circle cx="17" cy="17" r="2.5" />
        <path d="M11 8h3M8 11v3M14.5 10l1 2M10 15l2-2" />
      </>
    ),
    title: "Wide Research · Multi-Agent",
    text: "Manus กระจายงานให้ subagent หลายตัวทำขนาน — เร่งงาน research/วิเคราะห์/ผลิตคอนเทนต์ขนาดใหญ่ในรอบเดียว",
  },
];

const CONNECTORS = ["ChatGPT/Claude", "Canva", "Instagram", "Meta Ads", "Gmail", "Slack", "Google Drive", "Notion"];

export default function ManusCapabilities() {
  return (
    <section className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[1120px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">เทคโนโลยี</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            Manus AI ทำอะไรได้บ้าง
          </h2>
          <p className="mx-auto mt-3 max-w-[680px] text-[15px] text-muted">
            ต่างจาก chatbot ที่รอคุณพิมพ์ Manus AI เป็น <strong className="text-ink">autonomous agent</strong> ที่วางแผน
            เปิดเครื่องมือจริง ทำงานเองทุกขั้นตอน แล้วส่งผลลัพธ์ให้คุณตรวจ
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {CAPABILITIES.map((c) => (
            <article
              key={c.title}
              className="group rounded-[14px] border border-line bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-sky/45 hover:shadow-brand-sm"
            >
              <div className="mb-[18px] grid size-[50px] place-items-center rounded-lg bg-[#eef6ff] text-brand-blue">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[25px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.7]">
                  {c.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-[1.08rem] font-extrabold leading-[1.35] text-ink">{c.title}</h3>
              <p className="text-[14px] leading-[1.65] text-muted">{c.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-9 rounded-[14px] border border-line bg-soft p-5">
          <div className="grid grid-cols-[auto_1fr] items-center gap-4 max-[620px]:grid-cols-1 max-[620px]:text-center">
            <span className="text-[12.5px] font-extrabold uppercase tracking-wider text-muted max-[620px]:text-[13px]">
              เชื่อมต่อได้กับเครื่องมือที่คุณใช้
            </span>
            <div className="flex flex-wrap gap-2 max-[620px]:justify-center">
              {CONNECTORS.map((name) => (
                <span key={name} className="rounded-full border border-line bg-white px-3 py-1.5 text-[12.5px] font-semibold text-ink">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[12.5px] text-muted">
          อ้างอิงเทคโนโลยีจาก <a href="https://manus.im" target="_blank" rel="noopener noreferrer" className="font-bold text-brand-blue underline-offset-2 hover:underline">manus.im</a> (autonomous AI agent platform) · BizDrive Manus AI Class สอน workflow ที่ใช้ Manus + เครื่องมืออื่นร่วมกัน
        </p>
      </div>
    </section>
  );
}
