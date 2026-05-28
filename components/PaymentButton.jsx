import { BuyButton } from "./BuyButton";

function activeGateway() {
  const v = (process.env.PAYMENT_GATEWAY || "chillpay").toLowerCase();
  return v === "stripe" ? "stripe" : "chillpay";
}

export function PaymentButton({ chillpayProductId, stripeUrl, amount, className, children }) {
  const gateway = activeGateway();
  const label = children ?? `ซื้อเลย ฿${(amount ?? 0).toLocaleString()}`;

  if (gateway === "stripe" && stripeUrl) {
    return (
      <a
        href={stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className ?? "btn btn-primary"}
      >
        {label}
      </a>
    );
  }

  if (gateway === "chillpay" && chillpayProductId) {
    return (
      <BuyButton productId={chillpayProductId} className={className}>
        {label}
      </BuyButton>
    );
  }

  return (
    <a href="/contact" className={className ?? "btn btn-primary"}>
      แจ้งความสนใจ
    </a>
  );
}
