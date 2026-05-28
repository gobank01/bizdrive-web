import { authHeaders, checksum, post } from "./core.js";

// Recurring API v1.0.3 — base: api-recurring.chillpay.co/api/v1

const u = (client, path) => `${client.base.recurring}/api/v1/${path}`;

// Recurring uses snake_case params and includes merchant_code + api_key INSIDE the
// checksum (in addition to headers). Order from doc:
// customer_id + customer_email + order_no + currency + description + billing_due_date
// + billing_cycle + billing_round + total_billing + amount_per_round + merchant_code + api_key + MD5_SECRET

// 1. Generate Recurring Schedule
export async function generate(client, params) {
  const {
    customer_id,
    customer_email = "",
    order_no,
    currency,
    description = "",
    billing_due_date,
    billing_cycle, // "day" | "month" | "year"
    billing_round, // number
    total_billing = null,
    amount_per_round,
  } = params;

  const body = {
    customer_id,
    customer_email,
    order_no,
    currency,
    description,
    billing_due_date,
    billing_cycle,
    billing_round,
    total_billing,
    amount_per_round,
    check_sum: checksum(
      [
        customer_id,
        customer_email,
        order_no,
        currency,
        description,
        billing_due_date,
        billing_cycle,
        billing_round,
        total_billing,
        amount_per_round,
        client.merchantCode,
        client.apiKey,
      ],
      client.md5Secret
    ),
  };
  return post(u(client, "recurringschedule"), authHeaders(client), body);
}

// 2. Get Recurring Schedule
export async function get(client, { recurring_schedule_id }) {
  return post(u(client, "recurringschedule/get"), authHeaders(client), {
    recurring_schedule_id,
    check_sum: checksum([recurring_schedule_id, client.merchantCode, client.apiKey], client.md5Secret),
  });
}

// 3. Search Recurring Schedules
export async function search(client, params = {}) {
  const {
    customer_id = null,
    order_no = null,
    status = null,
    page_size = 10,
    page_number = 1,
  } = params;

  return post(u(client, "recurringschedule/search"), authHeaders(client), {
    customer_id,
    order_no,
    status,
    page_size,
    page_number,
    check_sum: checksum(
      [customer_id, order_no, status, page_size, page_number, client.merchantCode, client.apiKey],
      client.md5Secret
    ),
  });
}

// 4. Cancel Recurring Schedule
export async function cancel(client, { recurring_schedule_id }) {
  return post(u(client, "recurringschedule/cancel"), authHeaders(client), {
    recurring_schedule_id,
    check_sum: checksum([recurring_schedule_id, client.merchantCode, client.apiKey], client.md5Secret),
  });
}

// 5. Get Recurring Transactions (one schedule's history)
export async function getTransactions(client, { recurring_schedule_id }) {
  return post(u(client, "recurringtransactions/get"), authHeaders(client), {
    recurring_schedule_id,
    check_sum: checksum([recurring_schedule_id, client.merchantCode, client.apiKey], client.md5Secret),
  });
}

// 6. Search Recurring Transactions (across schedules)
export async function searchTransactions(client, params = {}) {
  const {
    customer_id = null,
    order_no = null,
    status = null,
    page_size = 10,
    page_number = 1,
  } = params;

  return post(u(client, "recurringtransactions/search"), authHeaders(client), {
    customer_id,
    order_no,
    status,
    page_size,
    page_number,
    check_sum: checksum(
      [customer_id, order_no, status, page_size, page_number, client.merchantCode, client.apiKey],
      client.md5Secret
    ),
  });
}
