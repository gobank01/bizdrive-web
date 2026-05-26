import LeadForm from "./LeadForm";

/**
 * CheckoutButton — renders Stripe Payment Link button when plan.stripeUrl is set,
 * falls back to LeadForm (email capture) otherwise.
 *
 * When Stripe is wired:
 * 1. User clicks "สมัครเรียน — จ่ายผ่าน Stripe" → external link to Stripe Payment Link
 * 2. After payment, Stripe redirects to /checkout/success
 * 3. Webhook /api/stripe-webhook fires and sends welcome email
 *
 * Setup: see /docs/STRIPE_SETUP.md
 */
export default function CheckoutButton({ plan, source, leadButtonLabel = "แจ้งเตือนฉัน", variant = "primary" }) {
  if (plan?.stripeUrl) {
    return (
      <div className="grid gap-3">
        <a
          href={plan.stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg w-full"
          data-plan={plan.slug}
          data-price={plan.price}
        >
          สมัครเรียน — ฿{plan.price.toLocaleString()}
        </a>
        <p className="text-center text-[12.5px] text-muted">
          จ่ายผ่าน Stripe · บัตรเครดิต/PromptPay · เข้าเรียนทันทีหลังชำระ
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="mb-3 text-center text-[13px] font-semibold text-brand-blue">
        เปิดรับสมัครเร็ว ๆ นี้ — ฝากอีเมลเพื่อรับแจ้งเตือนก่อนใคร
      </p>
      <LeadForm planSlug={plan.slug} source={source} buttonLabel={leadButtonLabel} variant={variant === "light" ? "light" : "primary"} />
    </>
  );
}
