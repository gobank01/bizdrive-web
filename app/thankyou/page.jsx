import Reviews from "../components/Reviews";

export const metadata = {
  title: "ขอบคุณสำหรับการสั่งซื้อ — BizDrive",
  description:
    "ขอบคุณที่สมัครเรียนคลาส AI กับ BizDrive — เราได้รับการชำระเงินของคุณเรียบร้อยแล้ว",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
    <section className="flex min-h-[60vh] items-center bg-[linear-gradient(180deg,#f8fbff_0%,#fff_70%)] py-24">
      <div className="bx-container max-w-[660px] text-center">
        <div className="mx-auto mb-[22px] grid h-[78px] w-[78px] place-items-center rounded-full bg-brand-mint/[.12] text-brand-mint">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-[38px] w-[38px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3]"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <span className="badge mb-[18px]">ชำระเงินสำเร็จ</span>
        <h1 className="mt-1.5 text-[clamp(1.8rem,5vw,2.8rem)] font-extrabold leading-[1.2]">
          ขอบคุณสำหรับการสั่งซื้อ
        </h1>
        <p className="mx-auto my-[18px] mb-[26px] max-w-[680px] text-[clamp(1rem,2vw,1.18rem)] text-muted">
          เราได้รับการชำระเงินของคุณเรียบร้อยแล้ว — ยินดีต้อนรับสู่คลาสเรียน AI ของ BizDrive
          แล้วพบกันในคลาส
        </p>

        <div className="mx-auto mb-9 flex max-w-[440px] items-center gap-4 rounded-[14px] border border-line bg-white p-4 text-left shadow-brand-sm">
          <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-full border-2 border-brand-yellow bg-soft">
            <img
              src="/assets/profile/profile-bank-sm.jpg"
              width="160"
              height="160"
              alt="พี่แบงค์ ปรัชญา"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <strong className="block text-[15px] font-extrabold leading-tight text-ink">พี่แบงค์ ปรัชญา</strong>
            <span className="block text-[12.5px] text-muted">Founder, BizDrive</span>
            <p className="mt-1.5 text-[13.5px] leading-[1.55] text-ink">
              ขอบคุณที่เชื่อใจ — แล้วเจอกันในคลาสครับ
            </p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-[14px] text-left max-[620px]:grid-cols-1">
          <ThankStep title="1. อีเมลต้อนรับ" text="เราส่งอีเมลพร้อมข้อมูลการเข้าเรียนไปที่อีเมลของคุณทันที" />
          <ThankStep title="2. เช็กกล่องจดหมาย" text="เปิดอีเมลเพื่อดูลิงก์เข้าเรียนและขั้นตอนถัดไป" />
          <ThankStep title="3. เริ่มลงมือ" text="ทำตามเวิร์กโฟลว์ AI ได้ทันทีหลังได้รับข้อมูล" />
        </div>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <a href="/" className="btn btn-primary max-[620px]:w-full max-[620px]:max-w-[284px]">
            กลับหน้าแรก
          </a>
          <a
            href="mailto:hello@bizdrive.co"
            className="btn btn-outline max-[620px]:w-full max-[620px]:max-w-[284px]"
          >
            ติดต่อทีมงาน
          </a>
        </div>
        <p className="mt-[22px] text-[13px] text-muted">
          หากไม่ได้รับอีเมลภายใน 24 ชั่วโมง โปรดเช็กกล่องสแปม หรือทักมาที่ hello@bizdrive.co
        </p>
      </div>
    </section>
    <Reviews seed="thankyou" />
    </>
  );
}

function ThankStep({ title, text }) {
  return (
    <div className="rounded-lg border border-line bg-white px-[16px] py-[18px]">
      <strong className="block text-[15px] font-extrabold text-brand-blue">{title}</strong>
      <span className="mt-1.5 block text-[13px] text-muted">{text}</span>
    </div>
  );
}
