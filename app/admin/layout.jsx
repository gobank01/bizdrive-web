import { headers } from "next/headers";

export const metadata = {
  robots: { index: false, follow: false },
};

const PUBLIC_PATHS = ["/admin/login", "/admin/auth"];

export default async function AdminLayout({ children }) {
  const h = await headers();
  const pathname = h.get("x-pathname") || "";
  const isPublic = PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (isPublic) {
    return <div className="min-h-screen bg-soft">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-soft">
      <header className="border-b border-line bg-white">
        <div className="bx-container flex min-h-[64px] items-center justify-between gap-4">
          <a href="/admin" className="inline-flex items-center gap-2.5 font-extrabold">
            <img src="/assets/brand/logo-192.png" width="192" height="192" alt="" aria-hidden="true" className="h-[34px] w-[34px]" />
            <span className="text-[15px] text-brand-blue">BizDrive Admin</span>
          </a>
          <nav aria-label="Admin" className="flex items-center gap-x-4 gap-y-2 text-[13.5px] font-semibold max-[620px]:gap-x-3">
            <a href="/admin" className="text-muted hover:text-brand-blue">Dashboard</a>
            <a href="/admin/leads" className="text-muted hover:text-brand-blue">Leads</a>
            <form action="/admin/logout" method="post">
              <button type="submit" className="text-muted hover:text-brand-orange">ออกจากระบบ</button>
            </form>
          </nav>
        </div>
      </header>
      <main className="py-8 max-[620px]:py-5">{children}</main>
    </div>
  );
}
