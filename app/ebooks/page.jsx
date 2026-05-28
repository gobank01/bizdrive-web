import { EBOOKS, EBOOK_SLUGS, BUNDLES, EBOOK_PRICE } from "./_data";

export const metadata = {
  title: "eBook BizDrive — เรียน AI แบบกระชับ อ่านได้ทุกที่ · ฿390/เล่ม",
  description:
    "eBook สอน AI สำหรับเจ้าของธุรกิจไทย — Manus AI · Claude · เล่มละ ฿390 · ซื้อรวม Bundle ลด ฿90 · PDF ส่งทันทีหลังชำระเงิน",
  openGraph: {
    title: "eBook BizDrive — เรียน AI แบบกระชับ",
    description: "เล่มละ ฿390 · ซื้อรวม Bundle ราคาพิเศษ · PDF ส่งทันที",
    type: "website",
  },
};

const ACCENTS = {
  blue: { ring: "border-brand-blue/30", chip: "bg-brand-blue/10 text-brand-blue", grad: "from-brand-blue/[.06] to-white" },
  purple: { ring: "border-[#6b46c1]/30", chip: "bg-[#6b46c1]/10 text-[#6b46c1]", grad: "from-[#6b46c1]/[.06] to-white" },
  orange: { ring: "border-[#c2410c]/30", chip: "bg-[#c2410c]/10 text-[#c2410c]", grad: "from-[#c2410c]/[.06] to-white" },
};

export default function EbooksIndexPage() {
  const bundle = BUNDLES[0];
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#fff_72%)] pt-[72px] pb-[42px] max-[620px]:pt-[48px] max-[620px]:pb-[28px]">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="bx-container relative max-w-[860px] text-center">
          <span className="badge mb-[18px]">eBook BizDrive</span>
          <h1 className="mx-auto max-w-[760px] text-balance text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-[1.15]">
            เรียน AI แบบกระชับ — เปิดอ่านได้ทุกที่
          </h1>
          <p className="mx-auto my-5 max-w-[640px] text-[clamp(1rem,2vw,1.13rem)] text-muted">
            สำหรับเจ้าของธุรกิจที่อยากเริ่มเร็ว ไม่มีเวลาเรียนคลาส · เล่มละ ฿{EBOOK_PRICE} · PDF ส่งทันทีหลังชำระเงิน · อัปเดตฟรีตลอดอายุ
          </p>
          <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-3 text-[13.5px] text-muted">
            <span className="inline-flex items-center gap-1.5"><Dot /> {EBOOK_SLUGS.length} เล่ม · ผลิตเพิ่มเรื่อยๆ</span>
            <span className="inline-flex items-center gap-1.5"><Dot /> ภาษาไทย</span>
            <span className="inline-flex items-center gap-1.5"><Dot /> PDF · เปิดได้ทุกอุปกรณ์</span>
          </div>
        </div>
      </section>

      {/* Bundle hero */}
      {bundle ? <BundleHero bundle={bundle} /> : null}

      {/* Books grid */}
      <section id="books" className="bg-soft py-[72px] max-[620px]:py-[54px]">
        <div className="bx-container max-w-[1100px]">
          <div className="mb-9 text-center max-[620px]:mb-7">
            <span className="section-kicker mb-3">ทุกเล่ม</span>
            <h2 className="mx-auto max-w-[680px] text-balance text-[clamp(1.55rem,3.6vw,2.3rem)] font-extrabold leading-[1.22]">
              เลือกเล่มที่ใช่ — หรือซื้อรวมประหยัดกว่า
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[14.5px] text-muted">
              ทุกเล่มเล่มละ ฿{EBOOK_PRICE} · เนื้อหากระชับ 80-100 หน้า · มี case study + prompt template
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
            {EBOOK_SLUGS.map((slug) => <EbookCard key={slug} ebook={EBOOKS[slug]} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-[72px] max-[620px]:py-[54px]">
        <div className="bx-container max-w-[760px]">
          <div className="mb-8 text-center">
            <span className="section-kicker mb-3">คำถามที่พบบ่อย</span>
            <h2 className="text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold leading-[1.22]">eBook ทำงานยังไง</h2>
          </div>
          <div className="grid gap-3">
            <Faq q="ซื้อแล้วได้ไฟล์ยังไง?" a="หลังชำระเงินผ่าน Stripe ระบบจะส่งลิงก์ดาวน์โหลด PDF ไปที่อีเมลของคุณภายใน 1-2 นาที · ถ้าไม่ได้รับให้เช็คกล่อง Spam ก่อน หรือทักทีม BizDrive ทาง LINE @bizdrive" />
            <Faq q="PDF เปิดอ่านบนอุปกรณ์ไหนได้บ้าง?" a="เปิดได้ทุกอุปกรณ์ — iPhone, iPad, Android, Mac, Windows · แนะนำ Apple Books (iOS) หรือ Adobe Acrobat Reader (อื่นๆ)" />
            <Faq q="มี DRM ไหม? โหลดมาแล้วใช้ได้ตลอดไหม?" a="ไม่มี DRM · โหลดเก็บไว้ในเครื่องได้ตลอด · แต่ขอความกรุณาไม่แชร์ต่อ (ไฟล์มี watermark ส่วนตัวระบุอีเมลผู้ซื้อ)" />
            <Faq q="ออกใบกำกับภาษีได้ไหม?" a="ได้ครับ — ทักทีม BizDrive แจ้งชื่อ-ที่อยู่บริษัทพร้อมเลขผู้เสียภาษีหลังชำระเงิน · เราออกใบกำกับเต็มรูปแบบให้ภายใน 1-2 วันทำการ" />
            <Faq q="ซื้อรวม Bundle แล้วต่อมามีเล่มใหม่ จะได้เล่มใหม่ฟรีไหม?" a="Bundle ปัจจุบันคุ้มสำหรับเล่มที่อยู่ในตอนนี้ · เล่มที่ผลิตในอนาคตจะมี discount พิเศษให้คนที่ซื้อ Bundle (เช็ค Email อัพเดท)" />
            <Faq q="ขอเงินคืนได้ไหม?" a="ขอคืนได้ภายใน 7 วันถ้ายังไม่ดาวน์โหลด — แต่เนื่องจากเป็น digital product เมื่อดาวน์โหลดแล้ว ขอคืนเงินไม่ได้ตามมาตรฐาน · ถ้ามีปัญหาทักมาคุยได้ครับ" />
          </div>
        </div>
      </section>

      {/* Cross-sell to classes */}
      <section className="bg-brand-blue py-[72px] text-white max-[620px]:py-[54px]">
        <div className="bx-container max-w-[760px] text-center">
          <h2 className="text-[clamp(1.4rem,3vw,1.95rem)] font-extrabold leading-[1.25]">
            อยากเรียนเชิงลึกกว่า eBook?
          </h2>
          <p className="mt-3 text-white/80">
            ลองคลาสเรียน BizDrive — Online ฿3,900 · Seminar ฿9,900 · Workshop hands-on ที่ Bangkok
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/#class" className="btn bg-brand-yellow text-ink hover:brightness-105">ดูคลาสทั้งหมด →</a>
            <a href="/contact" className="btn btn-outline border-white/40 text-white hover:bg-white/10">ปรึกษาทีม BizDrive</a>
          </div>
        </div>
      </section>
    </>
  );
}

function BundleHero({ bundle }) {
  const books = bundle.bookSlugs.map((s) => EBOOKS[s]).filter(Boolean);
  const savings = (bundle.originalPrice || 0) - bundle.price;
  return (
    <section className="bg-white py-[56px] max-[620px]:py-[40px]">
      <div className="bx-container max-w-[1040px]">
        <div className="relative overflow-hidden rounded-[18px] border-2 border-brand-yellow/60 bg-gradient-to-br from-[#fffbeb] via-white to-[#fef3c7] p-7 shadow-brand max-[620px]:p-5">
          <div className="absolute -right-6 -top-6 grid h-24 w-24 place-items-center rounded-full bg-brand-yellow text-center text-[12px] font-extrabold leading-tight text-ink max-[620px]:h-20 max-[620px]:w-20 max-[620px]:-right-4 max-[620px]:-top-4">
            ประหยัด<br />฿{savings.toLocaleString()}
          </div>
          <div className="grid grid-cols-[1.1fr_1fr] gap-7 items-center max-[760px]:grid-cols-1">
            <div>
              <span className="inline-flex items-center rounded-full bg-brand-blue px-3 py-1 text-[11.5px] font-extrabold uppercase tracking-wider text-brand-yellow">
                {bundle.badge}
              </span>
              <h2 className="mt-3 text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold leading-[1.2]">
                {bundle.title}
              </h2>
              <p className="mt-2 text-[15px] text-muted">{bundle.tagline}</p>
              <ul className="mt-4 grid gap-1.5 text-[14px] text-ink/85">
                {books.map((b) => (
                  <li key={b.slug} className="flex gap-2"><span className="text-brand-blue">✓</span>{b.title}</li>
                ))}
                <li className="flex gap-2"><span className="text-brand-blue">✓</span>Bonus PDF + Prompt library ครบทุกเล่ม</li>
                <li className="flex gap-2"><span className="text-brand-blue">✓</span>อัปเดตฟรีตลอดอายุทุกเล่ม</li>
              </ul>
              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                {bundle.originalPrice ? (
                  <span className="text-[15px] text-muted line-through">฿{bundle.originalPrice.toLocaleString()}</span>
                ) : null}
                <span className="text-[2rem] font-extrabold text-brand-blue tabular-nums">฿{bundle.price.toLocaleString()}</span>
                <span className="text-[13px] text-muted">({books.length} เล่ม รวมกัน)</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {bundle.stripeUrl ? (
                  <a href={bundle.stripeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg max-[620px]:w-full">
                    ซื้อ Bundle — ฿{bundle.price.toLocaleString()}
                  </a>
                ) : (
                  <a href="/contact?topic=ebook-bundle" className="btn btn-primary btn-lg max-[620px]:w-full">
                    แจ้งความสนใจ Bundle
                  </a>
                )}
                <a href="#books" className="btn btn-outline">หรือเลือกซื้อแยกเล่ม</a>
              </div>
            </div>
            <div className="relative grid place-items-center">
              <div className="relative flex items-end gap-3">
                {books.map((b, i) => (
                  <BookCoverMini
                    key={b.slug}
                    ebook={b}
                    style={{ transform: `rotate(${(i - (books.length - 1) / 2) * 4}deg) translateY(${i % 2 === 0 ? 0 : -6}px)` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookCoverMini({ ebook, style }) {
  const accent = ACCENTS[ebook.accent] || ACCENTS.blue;
  const webp = ebook.cover?.replace(/\.jpg$/, ".webp");
  return (
    <div
      className={`relative aspect-[3/4] w-[140px] flex-shrink-0 overflow-hidden rounded-[8px] border-2 ${accent.ring} bg-white shadow-brand-sm max-[620px]:w-[110px]`}
      style={style}
    >
      <picture>
        <source type="image/webp" srcSet={webp} />
        <img src={ebook.cover} alt={ebook.title} loading="lazy" className="h-full w-full object-cover" />
      </picture>
    </div>
  );
}

function EbookCard({ ebook }) {
  const accent = ACCENTS[ebook.accent] || ACCENTS.blue;
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-[16px] border-2 ${accent.ring} bg-white shadow-brand-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-brand`}>
      <div className={`relative grid aspect-[16/9] place-items-center bg-gradient-to-br ${accent.grad} p-6`}>
        {ebook.badge ? (
          <span className={`absolute right-3 top-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold ${accent.chip} z-10`}>
            {ebook.badge}
          </span>
        ) : null}
        <div className={`aspect-[3/4] w-[120px] overflow-hidden rounded-[8px] border-2 ${accent.ring} bg-white shadow-brand transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-105`}>
          <picture>
            <source type="image/webp" srcSet={ebook.cover?.replace(/\.jpg$/, ".webp")} />
            <img src={ebook.cover} alt={ebook.title} loading="lazy" width="120" height="160" className="h-full w-full object-cover" />
          </picture>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[17px] font-extrabold leading-tight text-ink">{ebook.title}</h3>
        <p className="mt-1.5 text-[13.5px] text-muted leading-[1.55]">{ebook.tagline}</p>
        <ul className="mt-3 grid gap-1 text-[13px] text-ink/80">
          {ebook.chapters.slice(0, 3).map((c) => (
            <li key={c} className="flex gap-1.5"><span className={accent.chip.split(" ")[1]}>✓</span>{c}</li>
          ))}
          <li className="text-[12px] text-muted">+ อีก {ebook.chapters.length - 3} บท</li>
        </ul>
        <div className="mt-auto pt-4 flex items-baseline justify-between gap-3">
          <span className="text-[1.5rem] font-extrabold text-brand-blue tabular-nums">฿{ebook.price.toLocaleString()}</span>
          <a href={`/ebooks/${ebook.slug}`} className="btn btn-primary">ดูรายละเอียด →</a>
        </div>
      </div>
    </article>
  );
}

function Faq({ q, a }) {
  return (
    <details className="group rounded-[12px] border border-line bg-white p-4 transition-colors hover:border-brand-sky/40">
      <summary className="flex cursor-pointer items-start justify-between gap-3 list-none">
        <span className="text-[15px] font-extrabold text-ink">{q}</span>
        <span aria-hidden="true" className="mt-0.5 text-brand-blue transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="mt-2.5 text-[14px] leading-[1.65] text-muted">{a}</p>
    </details>
  );
}

function Dot() {
  return <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-brand-yellow" />;
}
