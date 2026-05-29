export default function SectionDivider({ tone = "white" }) {
  const bgClass = tone === "soft" ? "bg-soft" : tone === "blue" ? "bg-[linear-gradient(180deg,#fff,#f8fbff)]" : "bg-white";
  return (
    <div aria-hidden="true" className={`${bgClass} py-[44px] max-[620px]:py-[32px]`}>
      <div className="bx-container">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-line/70" />
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rotate-45 bg-brand-blue/30" />
            <span className="size-2 rotate-45 bg-brand-yellow" />
            <span className="size-1.5 rotate-45 bg-brand-blue/30" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-line/70 via-line to-transparent" />
        </div>
      </div>
    </div>
  );
}
