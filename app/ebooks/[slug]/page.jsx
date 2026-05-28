import { notFound } from "next/navigation";
import { EBOOKS, EBOOK_SLUGS, BUNDLES, ebookBySlug } from "../_data";
import { PaymentButton } from "@/components/PaymentButton";

export function generateStaticParams() {
  return EBOOK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ebook = ebookBySlug(slug);
  if (!ebook) return { title: "eBook ไม่พบ — BizDrive" };
  return {
    title: `${ebook.title} — eBook ฿${ebook.price} · BizDrive`,
    description: `${ebook.tagline} · ${ebook.pages} หน้า · PDF ส่งทันที · อัปเดตฟรีตลอดอายุ`,
    openGraph: {
      title: ebook.title,
      description: ebook.tagline,
      type: "book",
    },
  };
}

const ACCENTS = {
  blue: { ring: "border-brand-blue/30", chip: "bg-brand-blue/10 text-brand-blue", text: "text-brand-blue", grad: "from-brand-blue/[.06] to-white" },
  purple: { ring: "border-[#6b46c1]/30", chip: "bg-[#6b46c1]/10 text-[#6b46c1]", text: "text-[#6b46c1]", grad: "from-[#6b46c1]/[.06] to-white" },
  orange: { ring: "border-[#c2410c]/30", chip: "bg-[#c2410c]/10 text-[#c2410c]", text: "text-[#c2410c]", grad: "from-[#c2410c]/[.06] to-white" },
};

export default async function EbookDetailPage({ params }) {
  const { slug } = await params;
  const ebook = ebookBySlug(slug);
  if (!ebook) notFound();
  const accent = ACCENTS[ebook.accent] || ACCENTS.blue;
  const otherEbooks = EBOOK_SLUGS.filter((s) => s !== slug).map((s) => EBOOKS[s]);
  const bundle = BUNDLES.find((b) => b.bookSlugs.includes(slug));

  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br ${accent.grad} pt-[64px] pb-[48px] max-[620px]:pt-[40px] max-[620px]:pb-[32px]`}>
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="bx-container relative max-w-[1080px]">
          <a href="/ebooks" className="mb-5 inline-flex items-center gap-1 text-[13px] font-bold text-muted hover:text-brand-blue">
            ← ดู eBook ทั้งหมด
          </a>
          <div className="grid grid-cols-[1fr_0.85fr] gap-10 items-center max-[760px]:grid-cols-1 max-[760px]:gap-7">
            <div>
              {ebook.badge ? (
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11.5px] font-extrabold uppercase tracking-wider ${accent.chip}`}>
                  {ebook.badge}
                </span>
              ) : null}
              <h1 className="mt-3 text-[clamp(1.85rem,4.6vw,2.95rem)] font-extrabold leading-[1.18]">
                {ebook.title}
              </h1>
              <p className="mt-3 text-[clamp(1rem,2.2vw,1.18rem)] text-ink/75 leading-[1.55]">{ebook.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] text-muted">
                <span>📖 {ebook.pages} หน้า</span>
                <span>🇹🇭 ภาษาไทย</span>
                <span>📱 PDF · เปิดได้ทุกอุปกรณ์</span>
                <span>♾️ อัปเดตฟรีตลอดอายุ</span>
              </div>
              <div className="mt-7 flex flex-wrap items-baseline gap-3">
                <span className={`text-[2.4rem] font-extrabold tabular-nums ${accent.text}`}>฿{ebook.price.toLocaleString()}</span>
                <span className="text-[13.5px] text-muted">· PDF ส่งทันทีหลังชำระเงิน</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {ebook.productId || ebook.stripeUrl ? (
                  <PaymentButton
                    chillpayProductId={ebook.productId}
                    stripeUrl={ebook.stripeUrl}
                    amount={ebook.price}
                    className="btn btn-primary btn-lg max-[620px]:w-full max-[620px]:max-w-[320px]"
                  >
                    ซื้อ eBook — ฿{ebook.price.toLocaleString()}
                  </PaymentButton>
                ) : (
                  <a href={`/contact?topic=ebook-${ebook.slug}`} className="btn btn-primary btn-lg max-[620px]:w-full max-[620px]:max-w-[320px]">
                    แจ้งความสนใจ
                  </a>
                )}
                {bundle ? (
                  <a href="/ebooks#books" className="btn btn-outline">
                    หรือซื้อรวม Bundle ประหยัด ฿{(bundle.originalPrice - bundle.price).toLocaleString()}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="grid place-items-center">
              <div className={`aspect-[3/4] w-[280px] overflow-hidden rounded-[14px] border-2 ${accent.ring} bg-white shadow-brand max-[620px]:w-[220px] transition-transform duration-300 hover:-rotate-1 hover:scale-[1.02]`}>
                <picture>
                  <source type="image/webp" srcSet={ebook.cover?.replace(/\.jpg$/, ".webp")} />
                  <img src={ebook.cover} alt={ebook.title} width="280" height="373" className="h-full w-full object-cover" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-white py-[64px] max-[620px]:py-[48px]">
        <div className="bx-container max-w-[760px]">
          <span className="section-kicker mb-3">เกี่ยวกับเล่มนี้</span>
          <h2 className="text-[clamp(1.4rem,3vw,1.95rem)] font-extrabold leading-[1.25]">เล่มนี้สำหรับใคร · จะได้อะไร</h2>
          <p className="mt-4 text-[15.5px] leading-[1.7] text-ink/85">{ebook.summary}</p>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-soft py-[64px] max-[620px]:py-[48px]">
        <div className="bx-container max-w-[760px]">
          <span className="section-kicker mb-3">เนื้อหา</span>
          <h2 className="text-[clamp(1.4rem,3vw,1.95rem)] font-extrabold leading-[1.25]">{ebook.chapters.length} บท · {ebook.pages} หน้า</h2>
          <ol className="mt-6 grid gap-2.5">
            {ebook.chapters.map((c, i) => (
              <li key={c} className="flex items-start gap-3 rounded-[12px] border border-line bg-white p-4">
                <span className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full ${accent.chip} text-[13px] font-extrabold tabular-nums`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[14.5px] font-bold text-ink leading-[1.5]">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* For whom */}
      <section className="bg-white py-[64px] max-[620px]:py-[48px]">
        <div className="bx-container max-w-[760px]">
          <span className="section-kicker mb-3">เหมาะกับใคร</span>
          <h2 className="text-[clamp(1.4rem,3vw,1.95rem)] font-extrabold leading-[1.25]">เล่มนี้เหมาะกับคุณถ้า…</h2>
          <ul className="mt-5 grid gap-2.5">
            {ebook.forWhom.map((w) => (
              <li key={w} className="flex gap-2.5 rounded-[10px] border border-line bg-white p-3.5">
                <span className={`mt-0.5 ${accent.text}`}>✓</span>
                <span className="text-[14.5px] text-ink/85 leading-[1.55]">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bonuses */}
      <section className="bg-soft py-[64px] max-[620px]:py-[48px]">
        <div className="bx-container max-w-[760px]">
          <span className="section-kicker mb-3">โบนัส</span>
          <h2 className="text-[clamp(1.4rem,3vw,1.95rem)] font-extrabold leading-[1.25]">แถมฟรีในเล่ม</h2>
          <ul className="mt-5 grid gap-2.5">
            {ebook.bonuses.map((b) => (
              <li key={b} className="flex gap-2.5 rounded-[10px] border border-brand-yellow/40 bg-brand-yellow/[.08] p-3.5">
                <span className="mt-0.5 text-[#c2410c]">🎁</span>
                <span className="text-[14.5px] text-ink/85 leading-[1.55]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Buy CTA */}
      <section className={`bg-gradient-to-br ${accent.grad} py-[72px] max-[620px]:py-[54px]`}>
        <div className="bx-container max-w-[640px] text-center">
          <h2 className="text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold leading-[1.22]">พร้อมเริ่มอ่านแล้วใช่ไหม?</h2>
          <p className="mt-3 text-[15.5px] text-ink/75">PDF ส่งทันทีหลังชำระเงิน · เปิดอ่านได้ทุกอุปกรณ์</p>
          <div className={`mt-5 inline-block text-[2.4rem] font-extrabold tabular-nums ${accent.text}`}>฿{ebook.price.toLocaleString()}</div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {ebook.productId || ebook.stripeUrl ? (
              <PaymentButton
                chillpayProductId={ebook.productId}
                stripeUrl={ebook.stripeUrl}
                amount={ebook.price}
                className="btn btn-primary btn-lg max-[620px]:w-full max-[620px]:max-w-[320px]"
              >
                ซื้อ eBook — ฿{ebook.price.toLocaleString()}
              </PaymentButton>
            ) : (
              <a href={`/contact?topic=ebook-${ebook.slug}`} className="btn btn-primary btn-lg max-[620px]:w-full max-[620px]:max-w-[320px]">
                แจ้งความสนใจ
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Other ebooks */}
      {otherEbooks.length > 0 ? (
        <section className="bg-white py-[64px] max-[620px]:py-[48px]">
          <div className="bx-container max-w-[1000px]">
            <h2 className="mb-7 text-center text-[clamp(1.4rem,3vw,1.95rem)] font-extrabold">eBook เล่มอื่น</h2>
            <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
              {otherEbooks.map((b) => {
                const oa = ACCENTS[b.accent] || ACCENTS.blue;
                return (
                  <a key={b.slug} href={`/ebooks/${b.slug}`} className={`group flex items-center gap-4 rounded-[14px] border-2 ${oa.ring} bg-white p-4 transition-[transform,border-color] hover:-translate-y-0.5`}>
                    <div className={`aspect-[3/4] w-[64px] flex-shrink-0 overflow-hidden rounded-[6px] border ${oa.ring} bg-white`}>
                      <picture>
                        <source type="image/webp" srcSet={b.cover?.replace(/\.jpg$/, ".webp")} />
                        <img src={b.cover} alt={b.title} loading="lazy" width="64" height="85" className="h-full w-full object-cover" />
                      </picture>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-extrabold text-ink">{b.title.split("—")[0].trim()}</h3>
                      <div className="mt-1 text-[12.5px] text-muted">{b.tagline}</div>
                      <div className={`mt-1.5 text-[14px] font-extrabold ${oa.text}`}>฿{b.price.toLocaleString()} →</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
