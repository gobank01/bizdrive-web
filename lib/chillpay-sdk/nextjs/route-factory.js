import { createClient, ChillPayError } from "../src/core.js";
import * as paylink from "../src/paylink.js";
import * as transaction from "../src/transaction.js";
import * as recurring from "../src/recurring.js";

// Maps each route path → SDK call. Keep this list explicit so untrusted bodies
// can't reach random SDK methods.
const HANDLERS = {
  "paylink/generate": paylink.generate,
  "paylink/close": paylink.close,
  "paylink/delete": paylink.remove,
  "paylink/search": paylink.search,
  "paylink/details": paylink.details,
  "paylink/transactions/search": paylink.searchTransactions,
  "paylink/transactions/details": paylink.transactionDetails,

  "transaction/payment/search": transaction.searchPayments,
  "transaction/settlement/search": transaction.searchSettlements,
  "transaction/void/search": transaction.searchVoids,
  "transaction/refund/search": transaction.searchRefunds,
  "transaction/payment/details": transaction.paymentDetails,
  "transaction/void/request": transaction.requestVoid,
  "transaction/refund/request": transaction.requestRefund,

  "recurring/schedule/generate": recurring.generate,
  "recurring/schedule/get": recurring.get,
  "recurring/schedule/search": recurring.search,
  "recurring/schedule/cancel": recurring.cancel,
  "recurring/transactions/get": recurring.getTransactions,
  "recurring/transactions/search": recurring.searchTransactions,
};

/**
 * Creates a Next.js App Router handler.
 *
 * Usage: app/api/chillpay/[...slug]/route.js
 *   import { createRouteHandler } from "@/chillpay-sdk/nextjs/route-factory.js";
 *   export const POST = createRouteHandler();
 *
 * Optional config:
 *   - allowedOrigins: string[] — if set, enforces CORS for those origins.
 *   - guard(req, slug, body): throw to reject. Use for auth/rate limiting.
 */
export function createRouteHandler(config = {}) {
  const client = createClient(config);
  const allowed = config.allowedOrigins;
  const guard = config.guard;

  return async function POST(req, ctx) {
    const slug = Array.isArray(ctx?.params?.slug) ? ctx.params.slug.join("/") : "";
    const handler = HANDLERS[slug];

    const origin = req.headers.get("origin") ?? "";
    const corsHeaders = {};
    if (allowed) {
      if (!allowed.includes(origin)) {
        return new Response(JSON.stringify({ error: "Origin not allowed" }), { status: 403 });
      }
      corsHeaders["Access-Control-Allow-Origin"] = origin;
      corsHeaders["Access-Control-Allow-Methods"] = "POST, OPTIONS";
      corsHeaders["Access-Control-Allow-Headers"] = "Content-Type";
    }

    if (!handler) {
      return new Response(JSON.stringify({ error: `Unknown route: ${slug}` }), {
        status: 404,
        headers: corsHeaders,
      });
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: corsHeaders });
    }

    if (guard) {
      try {
        await guard(req, slug, body);
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message || "Forbidden" }), {
          status: 403,
          headers: corsHeaders,
        });
      }
    }

    try {
      const data = await handler(client, body);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } catch (e) {
      if (e instanceof ChillPayError) {
        return new Response(JSON.stringify({ error: e.message, data: e.data }), {
          status: e.status ?? 502,
          headers: corsHeaders,
        });
      }
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: corsHeaders });
    }
  };
}

export function createOptionsHandler(config = {}) {
  const allowed = config.allowedOrigins;
  return async function OPTIONS(req) {
    const origin = req.headers.get("origin") ?? "";
    if (allowed && !allowed.includes(origin)) {
      return new Response(null, { status: 403 });
    }
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": allowed ? origin : "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  };
}
