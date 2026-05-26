import { ACADEMY, CONTACT, SOCIAL_LINKS } from "../class/_data";

const BASE_URL = "https://bizdrive-web.vercel.app";

/**
 * Organization + LocalBusiness JSON-LD schema (sitewide)
 * Helps Google understand BizDrive as a real business with:
 * - Physical location (Knowledge Panel eligibility)
 * - Contact methods
 * - Social profiles
 * - Educational organization type
 */
export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": `${BASE_URL}#organization`,
        name: "BizDrive",
        alternateName: "BizDrive Academy",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/assets/brand/logo-square-512.png`,
          width: 512,
          height: 512,
        },
        image: `${BASE_URL}/assets/brand/logo-192.png`,
        description:
          "BizDrive สอนเจ้าของธุรกิจไทยใช้ AI หลายตัว (Manus AI, ChatGPT, Claude, Gemini, Codex CLI, Cursor, Hyperframes) เพื่อวางระบบธุรกิจ ตัดวิดีโอด้วย AI Agent ทำคอนเทนต์ และ automate งานซ้ำ",
        founder: {
          "@type": "Person",
          name: "พี่แบงค์ ปรัชญา",
          alternateName: "Prachaya Piyasirisilp",
          jobTitle: "Founder",
        },
        email: CONTACT.email,
        telephone: CONTACT.phoneTel,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangkok",
          addressRegion: "Bangkok",
          addressCountry: "TH",
        },
        sameAs: SOCIAL_LINKS.map((s) => s.url),
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: CONTACT.phoneTel,
            email: CONTACT.email,
            contactType: "customer service",
            areaServed: "TH",
            availableLanguage: ["Thai", "English"],
          },
        ],
        knowsAbout: [
          "Manus AI",
          "ChatGPT",
          "Claude (Anthropic)",
          "Google Gemini",
          "OpenAI Codex CLI",
          "Cursor IDE",
          "Hyperframes (Video Framework)",
          "AI Workflow Automation",
          "AI Video Editing",
          "Prompt Engineering",
          "One Person Business",
        ],
        slogan: "ทำธุรกิจคนเดียวให้เหมือนมีทีมใหญ่",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}#localbusiness`,
        name: ACADEMY.name,
        url: BASE_URL,
        image: `${BASE_URL}/assets/brand/logo-192.png`,
        description:
          "BizDrive Academy — สถานที่จัด Seminar และ Private 1:1 Custom Coaching เกี่ยวกับ AI สำหรับธุรกิจ ที่กรุงเทพมหานคร",
        address: {
          "@type": "PostalAddress",
          addressLocality: ACADEMY.city,
          addressCountry: "TH",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 13.8955122,
          longitude: 100.6589236,
        },
        hasMap: ACADEMY.mapsUrl,
        telephone: CONTACT.phoneTel,
        email: CONTACT.email,
        priceRange: "฿3,900–฿39,000",
        paymentAccepted: "Credit Card (Visa, Mastercard, American Express), PromptPay",
        currenciesAccepted: "THB",
        parentOrganization: { "@id": `${BASE_URL}#organization` },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}#website`,
        url: BASE_URL,
        name: "BizDrive",
        publisher: { "@id": `${BASE_URL}#organization` },
        inLanguage: "th-TH",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
