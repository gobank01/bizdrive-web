import { CONTACT } from "../../class/_data";

export const metadata = {
  title: "ยกเลิกการชำระเงิน — BizDrive",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#fff_70%)] py-[72px] max-[620px]:py-[54px]">
      <div className="bx-container max-w-[680px] text-center">
        <div className="mx-auto mb-5 grid h-[78px] w-[78px] place-items-center rounded-full bg-brand-yellow/[.18] text-ink">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[36px] w-[36px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.5]">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>
        <span className="badge mb-[14px]">ยังไม่ได้สมัคร</span>
        <h1 className="text-balance text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold leading-[1.22]">
          ยังไม่ได้ชำระเงิน — ไม่เป็นไรครับ
        </h1>
        <p className="mx-auto my-5 max-w-[520px] text-[clamp(1rem,2vw,1.1rem)] text-muted">
          ถ้าไม่แน่ใจ ทักมาคุยก่อนได้ — ทีม BizDrive ช่วยตอบคำถามและช่วยเลือกคลาสที่เหมาะกับคุณ
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="btn bg-[#00C300] text-white hover:brightness-105">
            ทักผ่าน LINE {CONTACT.line}
          </a>
          <a href="/contact" className="btn btn-outline">กรอกฟอร์มติดต่อ</a>
          <a href="/#class" className="btn btn-outline">ดูคลาสอีกครั้ง</a>
        </div>
      </div>
    </section>
  );
}
