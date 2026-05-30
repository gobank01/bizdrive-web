// สีไฟจราจร 5 สี (เข้าใจง่าย): ⚪ขาว=ใหม่ 🟡เหลือง=กำลังคุย/รอ 🟠ส้ม=ร้อน/ต้องตามด่วน 🟢เขียว=สำเร็จ 🔴แดง=จบ
const PALETTE = {
  white:  { className: "bg-white text-[#475569] border-[#cbd5e1]",        border: "border-l-[#cbd5e1]", bg: "bg-[#fbfcfe]", accent: "bg-[#cbd5e1]", avatar: "bg-[#eef2f7] text-[#475569]", dot: "bg-[#94a3b8]", text: "text-[#475569]" },
  yellow: { className: "bg-[#fef3c7] text-[#92600e] border-[#eab308]/45", border: "border-l-[#eab308]", bg: "bg-[#fffdf3]", accent: "bg-[#eab308]", avatar: "bg-[#fef3c7] text-[#92600e]", dot: "bg-[#eab308]", text: "text-[#92600e]" },
  orange: { className: "bg-[#ffedd5] text-[#9a3412] border-[#f97316]/45", border: "border-l-[#f97316]", bg: "bg-[#fff7ed]", accent: "bg-[#f97316]", avatar: "bg-[#ffedd5] text-[#9a3412]", dot: "bg-[#f97316]", text: "text-[#9a3412]" },
  green:  { className: "bg-[#dcfce7] text-[#166534] border-[#22c55e]/45", border: "border-l-[#16a34a]", bg: "bg-[#f3fdf6]", accent: "bg-[#16a34a]", avatar: "bg-[#dcfce7] text-[#166534]", dot: "bg-[#16a34a]", text: "text-[#166534]" },
  red:    { className: "bg-[#fee2e2] text-[#991b1b] border-[#ef4444]/45", border: "border-l-[#ef4444]", bg: "bg-[#fef5f5]", accent: "bg-[#ef4444]", avatar: "bg-[#fee2e2] text-[#991b1b]", dot: "bg-[#ef4444]", text: "text-[#991b1b]" },
};

export const LEAD_STATUSES = [
  { value: "new",       label: "ใหม่",       ...PALETTE.white },
  { value: "contacted", label: "โทรแล้ว",    ...PALETTE.yellow },
  { value: "no_answer", label: "โทรไม่ติด",  ...PALETTE.orange },
  { value: "follow_up", label: "รอติดตาม",   ...PALETTE.yellow },
  { value: "qualified", label: "สนใจจริง",   ...PALETTE.orange },
  { value: "customer",  label: "ปิดการขาย",  ...PALETTE.green },
  { value: "lost",      label: "ไม่สนใจ",     ...PALETTE.red },
];

const STATUS_BY_VALUE = Object.fromEntries(LEAD_STATUSES.map((s) => [s.value, s]));

export const FUNNEL_STAGES = ["new", "contacted", "qualified", "customer"];

const FMT_TIME = new Intl.DateTimeFormat("th-TH", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
});

export function stageInfo(status) {
  const idx = FUNNEL_STAGES.indexOf(status);
  if (idx >= 0) return { stage: idx + 1, total: FUNNEL_STAGES.length, lost: false };
  if (status === "lost") return { stage: 0, total: FUNNEL_STAGES.length, lost: true };
  return { stage: 1, total: FUNNEL_STAGES.length, lost: false };
}

export function statusLabel(value) {
  return STATUS_BY_VALUE[value]?.label || value;
}

export function statusClass(value) {
  return STATUS_BY_VALUE[value]?.className || "bg-soft text-ink border-line";
}

export function statusStyle(value) {
  return STATUS_BY_VALUE[value] || STATUS_BY_VALUE.new;
}

export function fmtTime(t) {
  if (!t) return "—";
  return FMT_TIME.format(new Date(t));
}

export function safeEq(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
