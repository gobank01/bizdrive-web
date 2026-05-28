import { createHash } from "node:crypto";

const BASES = {
  sandbox: {
    transaction: "https://sandbox-api-transaction.chillpay.co",
    paylink: "https://sandbox-apipaylink.chillpay.co",
    recurring: "https://sandbox-api-recurring.chillpay.co",
    payout: "https://sandbox-api-payout.chillpay.co",
  },
  production: {
    transaction: "https://api-transaction.chillpay.co",
    paylink: "https://api-paylink.chillpay.co",
    recurring: "https://api-recurring.chillpay.co",
    payout: "https://api-payout.chillpay.co",
  },
};

export function createClient(config = {}) {
  const merchantCode = config.merchantCode ?? process.env.CHILLPAY_MERCHANT_CODE;
  const apiKey = config.apiKey ?? process.env.CHILLPAY_API_KEY;
  const md5Secret = config.md5Secret ?? process.env.CHILLPAY_MD5_SECRET;
  const env = config.env ?? process.env.CHILLPAY_ENV ?? "sandbox";

  if (!merchantCode || !apiKey || !md5Secret) {
    throw new Error(
      "ChillPay credentials missing. Set CHILLPAY_MERCHANT_CODE, CHILLPAY_API_KEY, CHILLPAY_MD5_SECRET in env or pass to createClient()."
    );
  }
  if (!BASES[env]) {
    throw new Error(`Invalid CHILLPAY_ENV "${env}" — use "sandbox" or "production"`);
  }

  return { merchantCode, apiKey, md5Secret, env, base: BASES[env] };
}

// MD5 checksum: concat(values...) + md5Secret → md5 hash (lowercase hex).
// Null/undefined become "" — matches ChillPay's behavior in their C# samples.
export function checksum(values, md5Secret) {
  const joined = values.map((v) => (v == null ? "" : String(v))).join("") + md5Secret;
  return createHash("md5").update(joined, "utf8").digest("hex");
}

// Low-level POST. Returns parsed JSON; throws on network or non-2xx.
export async function post(url, headers, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    throw new ChillPayError(`Invalid JSON from ${url}`, { status: res.status, raw: text });
  }
  if (!res.ok) {
    throw new ChillPayError(data.message || `HTTP ${res.status}`, { status: res.status, data });
  }
  return data;
}

export class ChillPayError extends Error {
  constructor(message, { status, data, raw } = {}) {
    super(message);
    this.name = "ChillPayError";
    this.status = status;
    this.data = data;
    this.raw = raw;
  }
}

export function authHeaders(client) {
  return {
    "CHILLPAY-MerchantCode": client.merchantCode,
    "CHILLPAY-ApiKey": client.apiKey,
  };
}
