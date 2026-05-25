import { SOCIAL_LINKS } from "../class/_data";

const ICONS = {
  Facebook: (
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  ),
  TikTok: (
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.06-2.82H12.5v12.16a2.5 2.5 0 1 1-2.5-2.5c.25 0 .5.04.73.11V9.6A6 6 0 1 0 16 15.66V9.49a7.34 7.34 0 0 0 4.5 1.51v-3.1a4.26 4.26 0 0 1-3.9-2.08z" />
  ),
  YouTube: (
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  ),
  LINE: (
    <path d="M19.36 9.5c0-3.55-3.56-6.45-7.93-6.45-4.38 0-7.93 2.9-7.93 6.45 0 3.19 2.82 5.86 6.63 6.36.26.05.61.17.7.39.08.2.05.51.03.71l-.11.68c-.04.2-.16.79.69.43s4.6-2.71 6.27-4.64c1.16-1.27 1.72-2.55 1.72-3.93zM8.9 11.32H7.32a.21.21 0 0 1-.21-.21V7.78c0-.12.1-.21.21-.21h1.58c.12 0 .21.1.21.21v.27c0 .12-.1.21-.21.21H7.81v.62h1.1c.12 0 .21.1.21.21v.27c0 .12-.1.21-.21.21h-1.1v.62h1.1c.12 0 .21.1.21.21v.27c0 .12-.1.21-.21.21zm5-3.32v3.11c0 .12-.1.21-.21.21h-.27a.21.21 0 0 1-.17-.08l-1.43-1.93v1.8c0 .12-.1.21-.21.21h-.27a.21.21 0 0 1-.21-.21V8c0-.12.1-.21.21-.21h.27c.06 0 .13.03.17.08l1.43 1.93V8c0-.12.1-.21.21-.21h.27c.12 0 .21.1.21.21zm-3.18 3.32h-.27a.21.21 0 0 1-.21-.21V8c0-.12.1-.21.21-.21h.27c.12 0 .21.1.21.21v3.11c0 .12-.1.21-.21.21zm6.45-2.59h-.27c-.12 0-.21.1-.21.21v.62l-.93-1.05a.21.21 0 0 0-.13-.07h-.27c-.12 0-.21.1-.21.21v3.11c0 .12.1.21.21.21h.27c.12 0 .21-.1.21-.21v-1.34l.93 1.46c.04.06.1.09.17.09h.27c.12 0 .21-.1.21-.21V8c0-.12-.1-.21-.21-.21z" />
  ),
};

const VARIANTS = {
  light: "bg-soft text-brand-blue hover:bg-brand-blue hover:text-white",
  dark: "bg-white/10 text-white hover:bg-white hover:text-brand-blue",
  outline: "border-2 border-line text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white",
};

const SIZES = {
  sm: { box: "h-9 w-9", svg: "h-4 w-4" },
  md: { box: "h-11 w-11", svg: "h-[19px] w-[19px]" },
  lg: { box: "h-12 w-12", svg: "h-5 w-5" },
};

export default function SocialIcons({ variant = "light", size = "md", className = "" }) {
  const v = VARIANTS[variant] || VARIANTS.light;
  const s = SIZES[size] || SIZES.md;
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`BizDrive ${item.name} — ${item.handle}`}
          title={`${item.name}: ${item.handle}`}
          className={`grid place-items-center rounded-full transition-colors duration-150 ${s.box} ${v}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={s.svg}>
            {ICONS[item.name]}
          </svg>
        </a>
      ))}
    </div>
  );
}
