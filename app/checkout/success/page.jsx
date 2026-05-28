import { CONTACT } from "../../class/_data";
import { EBOOKS } from "../../ebooks/_data";
import { getOrder, getProduct, saveOrder, PRODUCTS } from "@/lib/chillpay";

export const metadata = {
  title: "ชำระเงินสำเร็จ — BizDrive",
  description: "ขอบคุณที่อุดหนุน BizDrive — รายละเอียดและขั้นตอนถัดไปอยู่ในอีเมล",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

async function fetchPayLinkStatus(payLinkId) {
  try {
    const { createClient } = await import("@/lib/chillpay-sdk/src/core.js");
    const { details } = await import("@/lib/chillpay-sdk/src/paylink.js");
    const client = createClient();
    const res = await details(client, { payLinkId: Number(payLinkId) });
    return res?.data ?? null;
  } catch (err) {
    console.error("[checkout/success] PayLink details failed:", err.message);
    return null;
  }
}

async function loadOrder(payLinkId) {
  if (!payLinkId) return null;

  let order = await getOrder(payLinkId);

  if (order && order.status === "paid") return order;

  const remote = await fetchPayLinkStatus(payLinkId);
  if (remote && (remote.status === "Success" || remote.numberOfUse > 0)) {
    const updated = await saveOrder(payLinkId, {
      productId: order?.productId ?? "",
      amount: Math.round((remote.amount ?? 0) * 100),
      currency: remote.currency ?? "THB",
      status: "paid",
      paidAt: new Date().toISOString(),
    });
    return updated;
  }

  return order;
}

export default async function CheckoutSuccessPage({ searchParams }) {
  const sp = await searchParams;
  const payLinkId =
    pick(sp?.payLinkId) ?? pick(sp?.PayLinkId) ?? pick(sp?.paylinkid) ?? null;

  const order = await loadOrder(payLinkId);
  const product = order ? getProduct(order.productId) : null;
  const ebook = product?.kind === "ebook" ? EBOOKS[product.ebookSlug] : null;
  const isEbook = !!ebook;
  const isPaid = order?.status === "paid";

  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#fff_70%)] py-[72px] max-[620px]:py-[54px]">
      <div className="bx-container max-w-[760px] text-center">
        <div className="mx-auto mb-5 grid h-[88px] w-[88px] place-items-center rounded-full bg-brand-mint/[.15] text-[#047857]">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[44px] w-[44px] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:3]">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <span className="badge mb-[14px]">ชำระเงินสำเร็จ</span>

        <h1 className="mt-1.5 text-balance text-[clamp(1.85rem,4.6vw,2.85rem)] font-extrabold leading-[1.2]">
          {isEbook
            ? "ขอบคุณที่ซื้อ eBook — ดาวน์โหลดได้เลย"
            : "ขอบคุณที่อุดหนุน BizDrive"}
        </h1>

        <p className="mx-auto my-5 max-w-[600px] text-[clamp(1rem,2vw,1.13rem)] text-muted">
          {isEbook
            ? "ลิงก์ดาวน์โหลด PDF กำลังถูกส่งไปที่อีเมลของคุณภายใน 5-10 นาที · เช็คทั้ง inbox และกล่องสแปม"
            : "อีเมลต้อนรับและขั้นตอนถัดไปจะส่งไปที่อีเมลของคุณภายใน 5-10 นาที (เช็ค inbox + กล่องสแปม)"}
        </p>

        {order ? <OrderSummary order={order} product={product} ebook={ebook} /> : null}

        <div className="mx-auto mb-6 grid max-w-[480px] gap-3 text-left">
          {isEbook ? <EbookSteps /> : <CourseSteps />}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="btn bg-[#00C300] text-white hover:brightness-105">
            ทักผ่าน LINE {CONTACT.line}
          </a>
          {isEbook ? (
            <a href="/ebooks" className="btn btn-outline">ดู eBook เล่มอื่น</a>
          ) : (
            <a href="/" className="btn btn-outline">กลับหน้าแรก</a>
          )}
        </div>

        {!isPaid && order ? (
          <p className="mx-auto mt-8 max-w-[560px] rounded-[10px] border border-brand-yellow/40 bg-brand-yellow/[.08] p-3.5 text-[13px] text-ink/80">
            ⏳ ระบบยังกำลังยืนยันการชำระเงิน — ปกติใช้เวลาไม่เกิน 2-3 นาที ลอง refresh หน้านี้อีกครั้ง หรือทักทีมงานถ้าผ่านไป 10 นาทีแล้วยังไม่ได้รับอีเมล
          </p>
        ) : null}

        {order?.payLinkId ? (
          <p className="mt-6 text-[11.5px] text-muted">
            Reference:{" "}
            <code className="rounded bg-soft px-1.5 py-0.5 font-mono">
              {order.payLinkId}
            </code>
            {order.transactionId ? (
              <>
                {" · Transaction "}
                <code className="rounded bg-soft px-1.5 py-0.5 font-mono">
                  {order.transactionId}
                </code>
              </>
            ) : null}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function pick(v) {
  if (Array.isArray(v)) return v[0];
  if (typeof v === "string") return v;
  return null;
}

function OrderSummary({ order, product, ebook }) {
  const title = ebook?.title ?? product?.name ?? "BizDrive";
  return (
    <div className="mx-auto mb-7 grid max-w-[480px] gap-2 rounded-[12px] border border-line bg-white p-4 text-left shadow-brand-sm">
      <div className="flex items-center justify-between gap-3 text-[13.5px]">
        <span className="text-muted">รายการ</span>
        <span className="font-extrabold text-ink text-right">{title}</span>
      </div>
      <div className="flex items-center justify-between gap-3 text-[13.5px]">
        <span className="text-muted">จำนวน</span>
        <span className="font-extrabold text-brand-blue tabular-nums">
          ฿{(Number(order.amount) / 100).toLocaleString("th-TH", { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 text-[13.5px]">
        <span className="text-muted">สถานะ</span>
        <span className={`font-extrabold ${order.status === "paid" ? "text-[#047857]" : "text-brand-yellow"}`}>
          {order.status === "paid" ? "✓ ชำระเงินแล้ว" : "กำลังยืนยัน…"}
        </span>
      </div>
    </div>
  );
}

function EbookSteps() {
  return (
    <>
      <NextStep num="1" title="เช็คอีเมล">
        ลิงก์ดาวน์โหลด PDF จะส่งไปที่อีเมลที่คุณใช้จ่ายเงิน · เก็บอีเมลไว้ — โหลดได้ตลอด
      </NextStep>
      <NextStep num="2" title="โหลดไฟล์ PDF">
        เปิดอ่านได้ทุกอุปกรณ์ (iPhone, iPad, Android, Mac, Windows)
      </NextStep>
      <NextStep num="3" title="ไม่ได้รับอีเมลภายใน 10 นาที?">
        ทักผ่าน LINE{" "}
        <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-blue underline decoration-brand-blue/40 hover:decoration-brand-blue">
          {CONTACT.line}
        </a>{" "}
        แจ้งอีเมล + เลข Reference ด้านล่าง
      </NextStep>
    </>
  );
}

function CourseSteps() {
  return (
    <>
      <NextStep num="1" title="เช็คอีเมล">
        อีเมลต้อนรับมีลิงก์เข้าเรียน + รายละเอียดการเริ่มต้น
      </NextStep>
      <NextStep num="2" title="เข้ากลุ่ม Community">
        ลิงก์เข้ากลุ่มอยู่ในอีเมล — ทีม BizDrive ตอบทุกคำถาม
      </NextStep>
      <NextStep num="3" title="ไม่ได้รับอีเมลภายใน 10 นาที?">
        ทักผ่าน LINE{" "}
        <a href={CONTACT.lineUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-blue underline decoration-brand-blue/40 hover:decoration-brand-blue">
          {CONTACT.line}
        </a>{" "}
        พร้อมแจ้งอีเมลที่ใช้สมัคร
      </NextStep>
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
