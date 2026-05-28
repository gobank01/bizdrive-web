import { ACADEMY, CONTACT } from "../class/_data";
import SocialIcons from "./SocialIcons";

export default function LocationContact({ darkBg = false }) {
  const surface = darkBg
    ? "bg-brand-blue text-white"
    : "bg-white text-ink";
  return (
    <section className={`${surface} py-[84px] max-[620px]:py-[62px]`}>
      <div className="bx-container max-w-[1040px]">
        <div className="mb-[28px] text-center">
          <span className={`mb-[14px] inline-flex items-center rounded-full px-[14px] py-2 text-sm font-bold ${darkBg ? "bg-white/15 text-white" : "section-kicker"}`}>
            สถานที่และติดต่อ
          </span>
          <h2 className={`mx-auto max-w-[760px] text-balance text-[clamp(1.55rem,3.6vw,2.3rem)] font-extrabold leading-[1.22] ${darkBg ? "text-white" : "text-ink"}`}>
            เจอกันที่ {ACADEMY.name}
          </h2>
        </div>
        <div className="grid grid-cols-[1.15fr_1fr] gap-[22px] max-[900px]:grid-cols-1">
          <div className={`overflow-hidden rounded-[14px] border ${darkBg ? "border-white/15" : "border-line"} shadow-brand-sm`}>
            <iframe
              src={ACADEMY.embedUrl}
              title={`แผนที่ ${ACADEMY.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] w-full border-0"
            />
          </div>
          <div className="flex flex-col gap-3">
            <ContactRow
              darkBg={darkBg}
              logo="/assets/brand/contact/googlemaps.svg"
              logoAlt="Google Maps"
              label="สถานที่"
              primary={ACADEMY.name}
              secondary={ACADEMY.city}
              cta={{ href: ACADEMY.mapsUrl, label: "เปิดใน Google Maps" }}
            />
            <ContactRow
              darkBg={darkBg}
              logo="/assets/brand/contact/phone.svg"
              logoAlt="โทร"
              label="โทร"
              primary={CONTACT.phone}
              cta={{ href: `tel:${CONTACT.phoneTel}`, label: "โทรเลย" }}
            />
            <ContactRow
              darkBg={darkBg}
              logo="/assets/brand/contact/line.svg"
              logoAlt="LINE"
              label="LINE"
              primary={CONTACT.line}
              cta={{ href: CONTACT.lineUrl, label: "เพิ่มเพื่อน LINE" }}
            />
            <ContactRow
              darkBg={darkBg}
              logo="/assets/brand/contact/gmail.svg"
              logoAlt="Email"
              label="อีเมล"
              primary={CONTACT.email}
              cta={{ href: `mailto:${CONTACT.email}`, label: "ส่งอีเมล" }}
            />
            <ContactRow
              darkBg={darkBg}
              icon={<><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18M7 15h3" /></>}
              paymentLogos={[
                { src: "/assets/brand/contact/visa.svg", alt: "Visa" },
                { src: "/assets/brand/contact/mastercard.svg", alt: "Mastercard" },
                { src: "/assets/brand/contact/amex.svg", alt: "American Express" },
              ]}
              label="การชำระเงิน"
              primary={CONTACT.acceptedPayments}
              secondary={CONTACT.taxInvoice}
            />
          </div>
        </div>

        <div className={`mt-7 flex flex-wrap items-center justify-between gap-4 rounded-lg border px-5 py-4 max-[620px]:justify-center ${darkBg ? "border-white/15 bg-white/[.04]" : "border-line bg-white"}`}>
          <div className={`flex flex-col gap-0.5 max-[620px]:items-center max-[620px]:text-center ${darkBg ? "text-white" : "text-ink"}`}>
            <span className={`text-[12px] font-semibold uppercase tracking-wider ${darkBg ? "text-white/70" : "text-muted"}`}>ติดตามเรา</span>
            <span className="text-[14.5px] font-extrabold">Facebook · TikTok · YouTube · LINE</span>
          </div>
          <SocialIcons variant={darkBg ? "dark" : "light"} size="md" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, logo, logoAlt, paymentLogos, label, primary, secondary, cta, darkBg }) {
  const card = darkBg ? "border-white/15 bg-white/[.06]" : "border-line bg-white";
  const iconBg = darkBg ? "bg-white/15 text-brand-yellow" : "bg-soft text-brand-blue";
  const logoBg = darkBg ? "bg-white" : "bg-white border border-line";
  const labelText = darkBg ? "text-white/70" : "text-muted";
  const primaryText = darkBg ? "text-white" : "text-ink";
  const secondaryText = darkBg ? "text-white/70" : "text-muted";
  const linkText = darkBg ? "text-brand-yellow decoration-brand-yellow/50 hover:decoration-brand-yellow" : "text-brand-blue decoration-brand-blue/40 hover:decoration-brand-blue";
  const isExt = cta?.href?.startsWith("http");
  return (
    <article className={`flex items-start gap-3 rounded-lg border p-4 ${card}`}>
      <div aria-hidden="true" className={`grid h-11 w-11 flex-shrink-0 place-items-center overflow-hidden ${logo ? "rounded-[10px]" : `rounded-lg ${iconBg}`}`}>
        {logo ? (
          <img src={logo} alt={logoAlt || ""} loading="lazy" className="h-11 w-11 object-contain" />
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]">
            {icon}
          </svg>
        )}
      </div>
      <div className="flex-1">
        <div className={`text-[12px] font-semibold uppercase tracking-wide ${labelText}`}>{label}</div>
        <div className={`text-[15px] font-extrabold ${primaryText}`}>{primary}</div>
        {secondary ? <div className={`text-[13px] ${secondaryText}`}>{secondary}</div> : null}
        {paymentLogos ? (
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            {paymentLogos.map((p) => (
              <span key={p.alt} className={`inline-flex h-9 w-12 items-center justify-center rounded-md border px-2 ${darkBg ? "border-white/20 bg-white" : "border-line bg-white"}`} title={p.alt}>
                <img src={p.src} alt={p.alt} loading="lazy" className="h-5 w-auto object-contain" />
              </span>
            ))}
          </div>
        ) : null}
        {cta ? (
          <a
            href={cta.href}
            target={isExt ? "_blank" : undefined}
            rel={isExt ? "noopener noreferrer" : undefined}
            className={`mt-1.5 inline-flex text-[13px] font-bold underline underline-offset-2 ${linkText}`}
          >
            {cta.label} →
          </a>
        ) : null}
      </div>
    </article>
  );
}
