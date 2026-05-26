import { CONTACT } from "../../class/_data";

export const metadata = {
  title: "ขอบคุณที่สมัครเรียน — BizDrive",
  description: "ชำระเงินสำเร็จ ยินดีต้อนรับสู่คลาส BizDrive",
  robots: { index: false, follow: false },
};

export default async function CheckoutSuccessPage({ searchParams }) {
  const sp = await searchParams;
  const sessionId = typeof sp?.session_id === "string" ? sp.session_id : null;

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#fff_70%)] py-[72px] max-[620px]:py-[54px]">
        <div className="bx-container max-w-[760px] text-center">
          <div className="mx-auto mb-5 grid h-[88px] w-[88px] place-items-center rounded-full bg-brand-mint/[.15] text-[#047857]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[44px] w-[44px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3]">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <span className="badge mb-[14px]">ชำระเงินสำเร็จ</span>
          <h1 className="mt-1.5 text-balance text-[clamp(1.9rem,5vw,3rem)] font-extrabold leading-[1.2]">
            ขอบคุณที่สมัครเรียน — เจอกันในคลาสครับ
          </h1>
          <p className="mx-auto my-5 max-w-[600px] text-[clamp(1rem,2vw,1.13rem)] text-muted">
            เราได้รับการชำระเงินของคุณเรียบร้อยแล้ว · อีเมลต้อนรับและขั้นตอนถัดไปจะส่งไปที่อีเมลของคุณภายใน 5-10 นาที (เช็ค inbox + กล่องสแปม)
          </p>

          <div className="mx-auto mb-6 grid max-w-[460px] gap-3 text-left">
            <NextStep num="1" title="เช็คอีเมล">
              อีเมลต้อนรับมีลิงก์เข้าเรียน + รายละเอียดการเริ่มต้น
            </NextStep>
            <NextStep num="2" title="เข้ากลุ่ม Community">
              ลิงก์เข้ากลุ่มอยู่ในอีเมล — ทีม BizDrive ตอบทุกคำถาม
            </NextStep>
            <NextStep num="3" title="ถ้าไม่ได้รับอีเมลใน 10 นาที">
              ทักผ่าน LINE <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-blue underline decoration-brand-blue/40 hover:decoration-brand-blue">{CONTACT.line}</a> พร้อมแจ้งอีเมลที่ใช้สมัคร
            </NextStep>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="btn bg-brand-yellow text-ink hover:brightness-105">
              ทักผ่าน LINE
            </a>
            <a href="/" className="btn btn-outline">กลับหน้าแรก</a>
          </div>

          {sessionId ? (
            <p className="mt-8 text-[11.5px] text-muted">
              Session ID: <code className="rounded bg-soft px-1.5 py-0.5 font-mono">{sessionId.slice(0, 12)}…</code>
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}

function NextStep({ num, title, children }) {
  return (
    <div className="grid grid-cols-[40px_1fr] gap-3 rounded-lg border border-line bg-white p-4 text-left shadow-brand-sm">
      <span className="grid h-[36px] w-[36px] place-items-center rounded-full bg-brand-blue text-[15px] font-extrabold text-brand-yellow">
        {num}
      </span>
      <div>
        <strong className="block text-[15px] text-ink">{title}</strong>
        <span className="text-[13.5px] text-muted">{children}</span>
      </div>
    </div>
  );
}
