const GALLERIES = {
  "manus-ai-seminar": Array.from({ length: 20 }, (_, i) => ({
    src: `/assets/gallery/seminar/seminar-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `บรรยากาศ Manus AI Seminar ที่ BizDrive Academy ${i + 1}`,
  })),
  "manus-ai-private": Array.from({ length: 25 }, (_, i) => ({
    src: `/assets/gallery/private/private-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `บรรยากาศ Private Class กับพี่แบงค์ ที่ BizDrive Academy ${i + 1}`,
  })),
};

const HEADINGS = {
  "manus-ai-seminar": {
    title: "บรรยากาศ Seminar จริง",
    sub: "Workshop กลุ่มเล็ก ที่ BizDrive Academy · ลงมือทำกับธุรกิจของคุณตลอดวัน",
  },
  "manus-ai-private": {
    title: "Private Session ที่ผ่านมา",
    sub: "พี่แบงค์ดูแลตัวต่อตัว · ออกแบบ workflow เฉพาะธุรกิจคุณ",
  },
};

export default function ClassGallery({ slug }) {
  const items = GALLERIES[slug];
  const head = HEADINGS[slug];
  if (!items || items.length === 0) return null;

  return (
    <section className="bg-white py-[84px] max-[620px]:py-[62px]">
      <div className="bx-container max-w-[1160px]">
        <div className="mb-[34px] text-center">
          <span className="section-kicker mb-[14px]">บรรยากาศจริง</span>
          <h2 className="mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2]">
            {head.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[15px] text-muted">{head.sub}</p>
        </div>

        <div className="grid grid-cols-4 gap-3 max-[900px]:grid-cols-3 max-[620px]:grid-cols-2">
          {items.map((g, i) => (
            <figure
              key={g.src}
              className={`relative overflow-hidden rounded-lg border border-line bg-soft transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-brand-sm ${
                i === 0 ? "col-span-2 row-span-2 aspect-square max-[900px]:col-span-2 max-[900px]:row-span-2 max-[620px]:col-span-2" : "aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width="1200"
                height="1200"
                className="h-full w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
