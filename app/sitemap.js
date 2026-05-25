import { ALL_PLAN_SLUGS } from "./class/_data";
import { urlForPlan } from "@/lib/urls";

const BASE = "https://bizdrive-web.vercel.app";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    ...ALL_PLAN_SLUGS.map((slug) => ({
      url: `${BASE}${urlForPlan(slug)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  ];
}
