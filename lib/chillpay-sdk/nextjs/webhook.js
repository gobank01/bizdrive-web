// ChillPay sends callbacks (PayLink, Recurring, PayOut) to URLs you configure
// in the merchant dashboard. Bodies are URL-encoded form data with a CheckSum
// field. Verify it before trusting the payload.
//
// Recurring callback Checksum order (from doc):
//   recurring_schedule_id + recurring_transaction_id + transaction_id + status
//   + amount + currency + payment_date + + MD5_SECRET
//
// PayLink callback Checksum order:
//   payLinkId + transactionId + status + amount + currency + paymentDate + MD5_SECRET
//
// The exact ordering can shift between ChillPay versions — confirm against the
// callback section of whichever doc you're integrating. This helper just gives
// you a verified body and a typed error if it fails.

import { createHash } from "node:crypto";

export function md5(values, secret) {
  const joined = values.map((v) => (v == null ? "" : String(v))).join("") + secret;
  return createHash("md5").update(joined, "utf8").digest("hex");
}

/**
 * Generic webhook handler factory. Pass the field order ChillPay uses for that
 * particular callback type.
 *
 * Example (PayLink):
 *   export const POST = createWebhookHandler({
 *     fields: ["payLinkId", "transactionId", "status", "amount", "currency", "paymentDate"],
 *     checksumField: "checkSum",
 *     onEvent: async (body) => { /* update DB *​/ },
 *   });
 */
export function createWebhookHandler({ fields, checksumField = "checkSum", onEvent, md5Secret }) {
  const secret = md5Secret ?? process.env.CHILLPAY_MD5_SECRET;
  if (!secret) throw new Error("CHILLPAY_MD5_SECRET missing for webhook handler");

  return async function POST(req) {
    let body;
    const ct = req.headers.get("content-type") ?? "";
    try {
      if (ct.includes("application/json")) {
        body = await req.json();
      } else {
        const form = await req.formData();
        body = Object.fromEntries(form.entries());
      }
    } catch {
      return new Response("Bad body", { status: 400 });
    }

    const provided = body[checksumField] ?? body.CheckSum ?? body.Checksum;
    const expected = md5(fields.map((f) => body[f]), secret);

    if (!provided || String(provided).toLowerCase() !== expected.toLowerCase()) {
      return new Response("Invalid checksum", { status: 403 });
    }

    try {
      await onEvent(body);
    } catch (e) {
      // ChillPay retries on non-2xx — return 500 so we get a retry on transient
      // errors, but log so it doesn't silently fail forever.
      console.error("[chillpay-webhook] handler failed:", e);
      return new Response("Handler error", { status: 500 });
    }
    return new Response("OK", { status: 200 });
  };
}
