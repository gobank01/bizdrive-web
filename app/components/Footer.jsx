import CookieSettingsLink from "./CookieSettingsLink";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink py-10">
      <div className="bx-container grid gap-6 max-[620px]:text-center">
        <div className="flex flex-wrap items-center justify-between gap-4 max-[620px]:justify-center">
          <div className="inline-flex min-h-[44px] items-center gap-2.5 font-extrabold">
            <img
              src="/assets/brand/logo-192.png"
              width="192"
              height="192"
              alt=""
              aria-hidden="true"
              className="h-[40px] w-[40px]"
            />
            <span className="text-xl text-white">BizDrive</span>
          </div>
          <SocialIcons variant="dark" size="sm" />
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-[#aeb7c5] max-[620px]:justify-center" aria-label="ลิงก์ทางกฎหมายและติดต่อ">
          <a href="https://lin.ee/tLEXtzuJ" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white">LINE @bizdrive</a>
          <a href="tel:+66953340643" className="font-semibold hover:text-white">โทร 095-334-0643</a>
          <a href="mailto:hello@bizdrive.co" className="font-semibold hover:text-white">hello@bizdrive.co</a>
          <a href="/privacy" className="font-semibold hover:text-white">นโยบายความเป็นส่วนตัว</a>
          <a href="/terms" className="font-semibold hover:text-white">เงื่อนไข</a>
          <CookieSettingsLink className="font-semibold hover:text-white" />
        </nav>
        <p className="text-sm text-[#aeb7c5] max-[620px]:text-center">© {year} BizDrive · ขับเคลื่อนธุรกิจไทยด้วย AI</p>
      </div>
    </footer>
  );
}
