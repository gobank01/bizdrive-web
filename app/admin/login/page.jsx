export const dynamic = "force-dynamic";

export const metadata = {
  title: "เข้าสู่ระบบ — BizDrive Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({ searchParams }) {
  const sp = await searchParams;
  const hasError = sp?.error === "1";
  const next = typeof sp?.next === "string" ? sp.next : "/admin";

  return (
    <section className="flex min-h-[72vh] items-center bg-[linear-gradient(180deg,#f8fbff_0%,#fff_70%)] py-20">
      <div className="bx-container max-w-[440px]">
        <div className="rounded-[14px] border border-line bg-white p-8 shadow-brand max-[620px]:p-6">
          <div className="mb-6 text-center">
            <img src="/assets/brand/logo-192.png" width="192" height="192" alt="" aria-hidden="true" className="mx-auto mb-3 h-[56px] w-[56px]" />
            <h1 className="text-[1.4rem] font-extrabold text-ink">BizDrive Admin</h1>
            <p className="mt-1 text-[13.5px] text-muted">ใส่ token เพื่อเข้าสู่ระบบจัดการ</p>
          </div>
          <form action="/admin/auth" method="post" className="grid gap-3">
            <input type="hidden" name="next" value={next} />
            <label className="grid gap-1.5">
              <span className="text-[13px] font-semibold text-muted">Admin Token</span>
              <input
                type="password"
                name="token"
                required
                autoComplete="current-password"
                spellCheck={false}
                autoFocus
                className="rounded-lg border-2 border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition-[border-color] duration-150 focus:border-brand-blue"
              />
            </label>
            {hasError ? (
              <p role="alert" aria-live="polite" className="rounded-lg border border-brand-orange/30 bg-brand-orange/[.06] px-3 py-2 text-[13px] text-[#c2410c]">
                Token ไม่ถูกต้อง ลองใหม่อีกครั้ง
              </p>
            ) : null}
            <button type="submit" className="btn btn-primary mt-2">เข้าสู่ระบบ</button>
          </form>
          <p className="mt-4 text-center text-[12px] text-muted">
            หากลืม token ทักหา dev team
          </p>
        </div>
      </div>
    </section>
  );
}
