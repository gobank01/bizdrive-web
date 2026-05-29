const BADGES = [
  {
    title: "ชำระปลอดภัย",
    sub: "Stripe SSL · บัตรเครดิตทุกประเภท",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 15h3" />
      </>
    ),
  },
  {
    title: "รับประกัน 7 วัน",
    sub: "คืนเงินเต็มจำนวน ไม่ถาม",
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "ออกใบกำกับภาษี",
    sub: "เต็มรูปแบบ · นิติบุคคล",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
  },
  {
    title: "ข้อมูลเป็นไปตาม PDPA",
    sub: "เก็บปลอดภัย · ลบได้",
    icon: (
      <>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-soft py-12 max-[620px]:py-9">
      <div className="bx-container max-w-[1080px]">
        <div className="grid grid-cols-4 gap-3 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {BADGES.map((b) => (
            <div key={b.title} className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3">
              <div aria-hidden="true" className="grid size-10 flex-shrink-0 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.9]">
                  {b.icon}
                </svg>
              </div>
              <div className="min-w-0">
                <div className="truncate text-[13.5px] font-extrabold text-ink">{b.title}</div>
                <div className="truncate text-[12px] text-muted">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
