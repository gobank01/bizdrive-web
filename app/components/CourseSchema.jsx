import { urlForPlan } from "@/lib/urls";

const BASE_URL = "https://bizdrive-web.vercel.app";

export default function CourseSchema({ plan }) {
  if (!plan) return null;
  const url = `${BASE_URL}${urlForPlan(plan.slug)}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: plan.name,
    description: plan.tagline,
    provider: {
      "@type": "Organization",
      name: "BizDrive",
      url: BASE_URL,
      sameAs: [
        "https://www.facebook.com/bizdrive168",
        "https://www.tiktok.com/@bizdrive168",
        "https://www.youtube.com/@BizDrive168",
        "https://lin.ee/tLEXtzuJ",
      ],
    },
    url,
    inLanguage: "th",
    educationalLevel: "Beginner to Intermediate",
    offers: {
      "@type": "Offer",
      price: plan.price,
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().slice(0, 10),
      url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: plan.slug === "manus-ai-online" ? "online" : plan.slug === "manus-ai-seminar" ? "onsite" : "blended",
      location:
        plan.slug === "manus-ai-online"
          ? undefined
          : {
              "@type": "Place",
              name: "BizDrive Academy",
              address: { "@type": "PostalAddress", addressLocality: "Bangkok", addressCountry: "TH" },
            },
      instructor: {
        "@type": "Person",
        name: "พี่แบงค์ ปรัชญา",
        jobTitle: "Founder, BizDrive",
      },
    },
    syllabusSections: plan.modules?.map((m) => ({
      "@type": "Syllabus",
      name: m.title,
      description: m.text,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
