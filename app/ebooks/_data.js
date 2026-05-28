export const EBOOK_PRICE = 390;

export const EBOOKS = {
  "manus-ai": {
    slug: "manus-ai",
    title: "Manus AI — วางระบบธุรกิจด้วย AI Agent",
    tagline: "คู่มือใช้ Manus AI แทนทีมงาน 5 ตำแหน่งใน 30 นาที",
    pages: 86,
    cover: "/assets/ebooks/manus-ai-cover.jpg",
    badge: "Bestseller",
    accent: "blue",
    summary:
      "Manus AI คือ Autonomous Agent ที่ research → execute → deliver งานจริงได้เอง · เล่มนี้สอนวิธีใช้ตั้งแต่ prompt แรกจนถึง workflow ครบวงจร · เหมาะกับเจ้าของธุรกิจ ฟรีแลนซ์ ที่อยากย่นเวลาทำงาน 70%",
    chapters: [
      "Manus AI คืออะไร · ต่างจาก ChatGPT/Claude ยังไง",
      "Setup เริ่มต้น + Workspace แรก",
      "10 Prompt patterns ที่ใช้บ่อยสุด",
      "ทำ Market Research + Competitor Analysis",
      "เขียน Sales Page + Email Sequence",
      "Workflow Automation — Auto Invoice, File Rename, Notify",
      "Real Case Studies — 5 ธุรกิจไทยที่ใช้จริง",
    ],
    bonuses: [
      "Prompt Library 50+ ชุด (Manus AI)",
      "Template เริ่ม project สำหรับ 7 อุตสาหกรรม",
      "Update ฟรีตลอดอายุ ebook",
    ],
    forWhom: [
      "เจ้าของธุรกิจคนเดียว/ทีมเล็ก ที่อยาก leverage AI",
      "คนที่ลอง ChatGPT แล้วยังรู้สึก 'ทำไม่ได้จริง'",
      "ฟรีแลนซ์ที่อยากย่นเวลาทำ research/proposal",
    ],
    price: EBOOK_PRICE,
    productId: "ebook-manus-ai",
    stripeUrl: null,
    pdfUrl: null,
  },
  "claude": {
    slug: "claude",
    title: "Claude AI — Deep Reasoning + Coding ด้วย Anthropic",
    tagline: "เจาะลึก Claude Projects · Artifacts · Claude Code · MCP",
    pages: 92,
    cover: "/assets/ebooks/claude-cover.jpg",
    badge: "ใหม่",
    accent: "orange",
    summary:
      "Claude (Anthropic) เก่งเรื่อง analysis, long-form, coding, system thinking — เล่มนี้สอนใช้งานทั้ง Projects, Artifacts, Claude Code, MCP servers · เหมาะกับงานที่ ChatGPT ทำได้ไม่ลึกพอ เช่น process เอกสารยาว, code review, document drafting",
    chapters: [
      "Claude คืออะไร · ทำไมต่างจาก ChatGPT/Gemini",
      "Projects — รวบรวมความรู้ของคุณให้ Claude จำได้",
      "Artifacts — สร้างเอกสาร/แอปจาก chat",
      "Claude Code (CLI) — AI ใน terminal สำหรับ dev/non-dev",
      "MCP Servers — เชื่อม Claude กับ Notion/Gmail/Drive",
      "Long Context 200K tokens — งานเอกสารยาว",
      "Anthropic API — ใช้งานเชิงโปรแกรม",
    ],
    bonuses: [
      "Claude Prompt Library 50+ ชุด",
      "MCP Setup Guide (Notion/Gmail/Drive)",
      "Update ฟรีตลอดอายุ ebook",
    ],
    forWhom: [
      "Power user ที่อยากใช้ Claude แทน ChatGPT บางงาน",
      "นักพัฒนา/ฟรีแลนซ์ที่อยากใช้ Claude Code",
      "คนทำงาน document/research/analysis เป็นหลัก",
    ],
    price: EBOOK_PRICE,
    stripeUrl: null,
    pdfUrl: null,
  },
};

export const EBOOK_SLUGS = Object.keys(EBOOKS);

export const BUNDLES = [
  {
    slug: "all-ebooks",
    title: "BizDrive AI eBook Bundle",
    tagline: "รวมทุกเล่ม · ราคาพิเศษ · ประหยัด ฿90",
    bookSlugs: ["manus-ai", "claude"],
    price: 690,
    originalPrice: 780,
    stripeUrl: null,
    badge: "ประหยัดสุด",
  },
];

export function ebookBySlug(slug) {
  return EBOOKS[slug] || null;
}

export function bundleBySlug(slug) {
  return BUNDLES.find((b) => b.slug === slug) || null;
}

export function totalSavings(bundle) {
  if (!bundle?.originalPrice || !bundle?.price) return 0;
  return bundle.originalPrice - bundle.price;
}
