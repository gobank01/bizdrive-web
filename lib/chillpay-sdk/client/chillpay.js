// Browser SDK — drop-in for any website.
//
// Talks to YOUR backend proxy (NOT ChillPay directly — secrets never leave server).
// Auto-detects the proxy base URL from the script's data-base attribute, or
// defaults to "/api/chillpay".
//
// Usage 1 — ES module:
//   import { ChillPay } from "/chillpay-sdk/client/chillpay.js";
//   const cp = new ChillPay({ base: "/api/chillpay" });
//   const { data } = await cp.paylink.generate({ productName: "Course", amount: 99000 });
//   window.location.href = data.paymentUrl;
//
// Usage 2 — drop-in <script>:
//   <script src="/chillpay-sdk/client/chillpay.js" data-base="/api/chillpay"></script>
//   <script>
//     ChillPay.paylink.generate({ productName: "Course", amount: 99000 })
//       .then(({ data }) => location.href = data.paymentUrl);
//   </script>

class Resource {
  constructor(client, prefix) {
    this.client = client;
    this.prefix = prefix;
  }
  call(path, body) {
    return this.client._post(`${this.prefix}/${path}`, body);
  }
}

class PayLink extends Resource {
  generate(p) { return this.call("generate", p); }
  close(p)    { return this.call("close", p); }
  delete(p)   { return this.call("delete", p); }
  search(p)   { return this.call("search", p); }
  details(p)  { return this.call("details", p); }
  searchTransactions(p)  { return this.call("transactions/search", p); }
  transactionDetails(p)  { return this.call("transactions/details", p); }
}

class Transaction extends Resource {
  searchPayments(p)     { return this.call("payment/search", p); }
  paymentDetails(p)     { return this.call("payment/details", p); }
  searchSettlements(p)  { return this.call("settlement/search", p); }
  searchVoids(p)        { return this.call("void/search", p); }
  requestVoid(p)        { return this.call("void/request", p); }
  searchRefunds(p)      { return this.call("refund/search", p); }
  requestRefund(p)      { return this.call("refund/request", p); }
}

class Recurring extends Resource {
  generate(p)           { return this.call("schedule/generate", p); }
  get(p)                { return this.call("schedule/get", p); }
  search(p)             { return this.call("schedule/search", p); }
  cancel(p)             { return this.call("schedule/cancel", p); }
  getTransactions(p)    { return this.call("transactions/get", p); }
  searchTransactions(p) { return this.call("transactions/search", p); }
}

export class ChillPay {
  constructor({ base = "/api/chillpay", fetch: fetchImpl } = {}) {
    this.base = base.replace(/\/$/, "");
    this.fetch = fetchImpl ?? globalThis.fetch.bind(globalThis);
    this.paylink = new PayLink(this, "paylink");
    this.transaction = new Transaction(this, "transaction");
    this.recurring = new Recurring(this, "recurring");
  }
  async _post(path, body) {
    const res = await this.fetch(`${this.base}/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body ?? {}),
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    if (!res.ok) throw Object.assign(new Error(data.error || `HTTP ${res.status}`), { status: res.status, data });
    return data;
  }
}

// Drop-in global for plain <script> usage
if (typeof window !== "undefined") {
  const script = document.currentScript;
  const base = script?.dataset?.base ?? "/api/chillpay";
  window.ChillPay = new ChillPay({ base });
  window.ChillPayClass = ChillPay;
}
