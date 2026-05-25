import { REVIEWS, PLAYLIST_ID, PLAYLIST_URL } from "../class/_reviews";

function hashSeed(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i)) * 16777619;
  return (h >>> 0) || 1;
}

function shuffleDeterministic(arr, seedStr) {
  const a = arr.slice();
  let seed = hashSeed(seedStr);
  for (let i = a.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Reviews({ darkBg = false, limit = 6, seed = "default" }) {
  const surface = darkBg ? "bg-brand-blue-dark text-white" : "bg-soft text-ink";
  const items = shuffleDeterministic(REVIEWS, seed).slice(0, limit);

  return (
    <section className={`${surface} py-[84px] max-[620px]:py-[62px]`}>
      <div className="bx-container max-w-[1120px]">
        <div className="mb-[34px] text-center">
          <span className={`mb-[14px] inline-flex items-center rounded-full px-[14px] py-2 text-sm font-bold ${darkBg ? "bg-white/15 text-white" : "section-kicker"}`}>
            รีวิวจากผู้เรียน
          </span>
          <h2 className={`mx-auto max-w-[760px] text-balance text-[clamp(1.65rem,3.8vw,2.5rem)] font-extrabold leading-[1.2] ${darkBg ? "text-white" : "text-ink"}`}>
            เสียงจริงจากคนที่ผ่านคลาสมาแล้ว
          </h2>
          <p className={`mx-auto mt-3 max-w-[620px] text-[14.5px] ${darkBg ? "text-white/75" : "text-muted"}`}>
            รวมรีวิวสั้น ๆ จากผู้เรียนคลาส AI ของ BizDrive
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {items.map((v) => (
            <ReviewCard key={v.id} video={v} darkBg={darkBg} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-[14.5px] font-extrabold underline underline-offset-2 ${darkBg ? "text-brand-yellow decoration-brand-yellow/50 hover:decoration-brand-yellow" : "text-brand-blue decoration-brand-blue/40 hover:decoration-brand-blue"}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
            </svg>
            ดูรีวิวทั้งหมด {REVIEWS.length} คลิปบน YouTube →
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ video, darkBg }) {
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}&list=${PLAYLIST_ID}`;
  const card = darkBg
    ? "border-white/10 bg-white/[.04] hover:bg-white/[.07]"
    : "border-line bg-white hover:shadow-brand";
  const titleColor = darkBg ? "text-white" : "text-ink";
  const metaColor = darkBg ? "text-white/65" : "text-muted";
  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col overflow-hidden rounded-[14px] border transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-1 ${card}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          width="480"
          height="360"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-black/55 text-white shadow-brand backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <span aria-hidden="true" className="absolute right-2 top-2 rounded bg-black/70 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
          Short
        </span>
      </div>
      <div className="flex-1 p-4">
        <h3 className={`line-clamp-2 text-[14.5px] font-extrabold leading-[1.4] ${titleColor}`}>
          {video.title || "คลิปรีวิว"}
        </h3>
        <p className={`mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold ${metaColor}`}>
          <span>YouTube</span>
          <span aria-hidden="true">•</span>
          <span>ดูบน YouTube →</span>
        </p>
      </div>
    </a>
  );
}
