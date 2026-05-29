import Link from "next/link";
import { PLANS, ALL_PLAN_SLUGS } from "./class/_data";
import { urlForPlan } from "@/lib/urls";

export const metadata = {
  title: "ไม่พบหน้าที่คุณค้นหา — BizDrive",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#fff_70%)] py-[72px] max-[620px]:py-[54px]">
      <div className="bx-container max-w-[760px] text-center">
        <div className="mx-auto mb-7 grid size-[110px] place-items-center rounded-full bg-brand-blue text-[60px] font-extrabold text-brand-yellow shadow-brand max-[620px]:h-[90px] max-[620px]:w-[90px] max-[620px]:text-[44px]">
          404
        </div>
        <h1 className="mx-auto max-w-[600px] text-balance text-[clamp(1.8rem,4.4vw,2.6rem)] font-extrabold leading-[1.18]">
          หาหน้านี้ไม่เจอครับ
        </h1>
        <p className="mx-auto my-5 mb-8 max-w-[520px] text-[clamp(1rem,2vw,1.13rem)] text-muted">
          อาจถูกย้าย ลบไปแล้ว หรือลิงก์พิมพ์ผิด ลองไปต่อที่หน้าเหล่านี้ดูครับ
        </p>

        <div className="mb-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary max-[620px]:w-full max-[620px]:max-w-[300px]">
            กลับหน้าแรก
          </Link>
          <Link href="/#class" className="btn btn-outline max-[620px]:w-full max-[620px]:max-w-[300px]">
            ดูคลาสเรียน
          </Link>
        </div>

        <div className="mx-auto grid max-w-[860px] grid-cols-3 gap-3 text-left max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
          {ALL_PLAN_SLUGS.map((slug) => {
            const plan = PLANS[slug];
            return (
              <Link
                key={slug}
                href={urlForPlan(slug)}
                className="group rounded-lg border border-line bg-white p-4 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-brand-sky/45 hover:shadow-brand-sm"
              >
                <span className="block text-[12.5px] font-semibold text-muted">{plan.badge}</span>
                <strong className="mt-1 block text-[15px] font-extrabold text-ink">
                  {plan.name}
                </strong>
                <span className="mt-1 block text-[13px] text-muted">{plan.cardSub}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
