export const LEAD_STATUSES = [
  {
    value: "new",
    label: "ใหม่",
    className: "bg-[#dbe7f6] text-[#1B3A8C] border-[#1B3A8C]/20",
    border: "border-l-[#1B3A8C]",
    bg: "bg-[#f5f9ff]",
    accent: "bg-[#1B3A8C]",
    avatar: "bg-[#dbe7f6] text-[#1B3A8C]",
    dot: "bg-[#1B3A8C]",
    text: "text-[#1B3A8C]",
  },
  {
    value: "contacted",
    label: "โทรแล้ว",
    className: "bg-[#fdebb1] text-[#7a5400] border-[#b87f00]/30",
    border: "border-l-[#b87f00]",
    bg: "bg-[#fffbf0]",
    accent: "bg-[#b87f00]",
    avatar: "bg-[#fdebb1] text-[#7a5400]",
    dot: "bg-[#b87f00]",
    text: "text-[#7a5400]",
  },
  {
    value: "no_answer",
    label: "โทรไม่ติด",
    className: "bg-[#e2e0f0] text-[#54519a] border-[#6b67c0]/30",
    border: "border-l-[#6b67c0]",
    bg: "bg-[#f6f5fc]",
    accent: "bg-[#6b67c0]",
    avatar: "bg-[#e2e0f0] text-[#54519a]",
    dot: "bg-[#6b67c0]",
    text: "text-[#54519a]",
  },
  {
    value: "follow_up",
    label: "รอติดตาม",
    className: "bg-[#cdeef0] text-[#0d6068] border-[#0e8c96]/30",
    border: "border-l-[#0e8c96]",
    bg: "bg-[#eefbfc]",
    accent: "bg-[#0e8c96]",
    avatar: "bg-[#cdeef0] text-[#0d6068]",
    dot: "bg-[#0e8c96]",
    text: "text-[#0d6068]",
  },
  {
    value: "qualified",
    label: "สนใจจริง",
    className: "bg-[#fde2d2] text-[#9a3412] border-[#c2410c]/25",
    border: "border-l-[#c2410c]",
    bg: "bg-[#fef5ee]",
    accent: "bg-[#c2410c]",
    avatar: "bg-[#fde2d2] text-[#9a3412]",
    dot: "bg-[#c2410c]",
    text: "text-[#9a3412]",
  },
  {
    value: "customer",
    label: "ปิดการขาย",
    className: "bg-[#c8ebd9] text-[#065f46] border-[#047857]/25",
    border: "border-l-[#047857]",
    bg: "bg-[#f0f8f4]",
    accent: "bg-[#047857]",
    avatar: "bg-[#c8ebd9] text-[#065f46]",
    dot: "bg-[#047857]",
    text: "text-[#065f46]",
  },
  {
    value: "lost",
    label: "ไม่สนใจ",
    className: "bg-[#dfe2e8] text-[#4b5563] border-[#9aa3b2]/30",
    border: "border-l-[#9aa3b2]",
    bg: "bg-[#f6f7f9]",
    accent: "bg-[#9aa3b2]",
    avatar: "bg-[#dfe2e8] text-[#4b5563]",
    dot: "bg-[#9aa3b2]",
    text: "text-[#4b5563]",
  },
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
