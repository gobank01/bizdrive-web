export default function Nav() {
  return (
    <header className="nav-bar" id="nav">
      <div className="bx-container flex min-h-[72px] items-center justify-between gap-6">
        <a href="/" className="inline-flex min-h-[44px] items-center gap-2.5 font-extrabold">
          <img
            src="/assets/brand/logo-192.png"
            width="192"
            height="192"
            alt=""
            aria-hidden="true"
            className="h-[40px] w-[40px]"
          />
          <span className="text-xl text-brand-blue">BizDrive</span>
        </a>
        <nav className="flex items-center gap-[22px] max-[900px]:gap-[14px] max-[620px]:hidden" aria-label="เมนูหลัก">
          <NavLink href="/#class">คลาสเรียน</NavLink>
          <NavLink href="/#how">วิธีทำงาน</NavLink>
          <NavLink href="/#faq">FAQ</NavLink>
          <NavLink href="/#about">เกี่ยวกับเรา</NavLink>
          <a href="/contact" className="btn btn-ghost">
            ติดต่อ
          </a>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[44px] items-center text-[15px] font-semibold text-muted transition-colors hover:text-brand-blue"
    >
      {children}
    </a>
  );
}
