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
    stripeUrl: "https://buy.stripe.com/7sYeVd0G1cIvfc99GH1VK07",
    stripePriceId: "price_1TbwI8GwqPLvBau9hHZUs4uX",
    pdfUrl: "https://bizdrive.app/downloads/manus-ai-ebook.pdf",
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
  "one-person-business": {
    slug: "one-person-business",
    title: "One Person Business — ทำธุรกิจคนเดียวด้วย AI",
    tagline: "Playbook สร้างธุรกิจ ฿1M/ปี โดยไม่ต้องจ้างพนักงาน",
    pages: 72,
    cover: "/assets/ebooks/manus-ai-cover.jpg",
    badge: "Coming Soon",
    accent: "purple",
    summary:
      "Framework ครบจบสำหรับทำธุรกิจคนเดียว — เลือก niche, สร้าง offer, build automation, ขยายโดยไม่จ้างคน · ใช้ AI แทนทีม 5 ตำแหน่ง (marketer, designer, support, ops, content)",
    chapters: [
      "Mindset ของ One Person Business",
      "เลือก niche ที่ตลาดต้องการจริง",
      "Offer Stacking — สร้างให้ลูกค้า say yes",
      "Tech Stack ขั้นต่ำ (Notion + Stripe + AI)",
      "Content Engine ที่รันเอง 80%",
      "Sales Funnel ด้วย AI Agent",
      "Scale to ฿1M/ปี without hiring",
    ],
    bonuses: [
      "One Person Business Canvas",
      "Stack template (Notion + AI tools)",
      "Update ฟรีตลอดอายุ ebook",
    ],
    forWhom: [
      "เจ้าของธุรกิจคนเดียว ไม่อยากจ้างคน",
      "ฟรีแลนซ์ที่อยาก scale revenue โดยไม่ scale ชั่วโมง",
      "พนักงานประจำที่อยากเริ่ม side business",
    ],
    price: EBOOK_PRICE,
    stripeUrl: null,
    pdfUrl: null,
    comingSoon: true,
  },
  "ai-editor": {
    slug: "ai-editor",
    title: "AI Video Editor — ตัดต่อด้วย AI เร็วกว่า CapCut",
    tagline: "ตัดวิดีโอ 1 ชม. ลงเหลือ 5 นาที ด้วย AI agent",
    pages: 80,
    cover: "/assets/ebooks/claude-cover.jpg",
    badge: "Coming Soon",
    accent: "blue",
    summary:
      "เปลี่ยน workflow ตัดต่อวิดีโอจาก manual editing → AI-powered editing · ใช้ Whisper + ChatGPT + HyperFrames + Auto caption ตัดได้ทั้ง reels, talking head, sales video",
    chapters: [
      "ทำไม AI Editor ดีกว่า CapCut/Premiere",
      "Auto Transcribe + Cut dead air (Whisper)",
      "Kinetic Captions + Punch animation",
      "Auto B-roll + Stock footage matching",
      "Voice clone + AI dubbing",
      "Render pipeline — 9:16 + 1:1 + 16:9",
      "Real Case: ตัด talking head 100 คลิป/เดือนคนเดียว",
    ],
    bonuses: [
      "AI Editor Stack (Whisper + Claude + HyperFrames)",
      "Caption template library",
      "Update ฟรีตลอดอายุ ebook",
    ],
    forWhom: [
      "Content creator ที่ตัดวิดีโอเองทุกวัน",
      "เจ้าของธุรกิจที่อยากทำ video marketing โดยไม่ต้องจ้าง editor",
      "ทีมที่อยากผลิตวิดีโอ 10x volume",
    ],
    price: EBOOK_PRICE,
    stripeUrl: null,
    pdfUrl: null,
    comingSoon: true,
  },
};

export const EBOOK_SLUGS = Object.keys(EBOOKS);

export const BUNDLES = [
  {
    slug: "all-ebooks",
    title: "BizDrive AI eBook Bundle (4 เล่ม)",
    tagline: "รวม 4 เล่มเด็ด · ประหยัด ฿570 · ส่ง PDF ทุกเล่มทันที (เล่มที่ยังไม่ออก ส่งให้ฟรีเมื่อพร้อม)",
    bookSlugs: ["manus-ai", "claude", "one-person-business", "ai-editor"],
    price: 990,
    originalPrice: 1560,
    stripeUrl: "https://buy.stripe.com/eVq5kD4Wh37Ve857yz1VK09",
    stripePriceId: "price_1Tc2FFGwqPLvBau9jRlA5sAu",
    badge: "ประหยัดสุด · คุ้มที่สุด",
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
