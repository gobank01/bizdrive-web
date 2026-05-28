import { authHeaders, checksum, post } from "./core.js";

// PayLink API v1.0.3 — base: api-paylink.chillpay.co/api/v1/paylink

const u = (client, path) => `${client.base.paylink}/api/v1/paylink/${path}`;

// 1. Generate PayLink — returns { payLinkId, paymentUrl, qrImage (base64), ... }
export async function generate(client, params) {
  const {
    productImage = "",
    productName,
    productDescription,
    paymentLimit = 1,
    startDate,
    expiredDate,
    currency = "THB",
    amount,
  } = params;

  const body = {
    ProductImage: productImage,
    ProductName: productName,
    ProductDescription: productDescription,
    PaymentLimit: paymentLimit,
    StartDate: startDate,
    ExpiredDate: expiredDate,
    Currency: currency,
    Amount: amount,
    Checksum: checksum(
      [productImage, productName, productDescription, paymentLimit, startDate, expiredDate, currency, amount],
      client.md5Secret
    ),
  };
  return post(u(client, "generate"), authHeaders(client), body);
}

// 2. Close PayLink — disable but don't delete
export async function close(client, { payLinkId }) {
  return post(u(client, "close"), authHeaders(client), {
    PayLinkId: payLinkId,
    Checksum: checksum([payLinkId], client.md5Secret),
  });
}

// 3. Delete PayLink — only if never paid
export async function remove(client, { payLinkId }) {
  return post(u(client, "delete"), authHeaders(client), {
    PayLinkId: payLinkId,
    Checksum: checksum([payLinkId], client.md5Secret),
  });
}

// 4. Search PayLinks
export async function search(client, params = {}) {
  const {
    orderBy = "PayLinkId",
    orderDir = "DESC",
    pageSize = 10,
    pageNumber = 1,
    productName = null,
    status = null,
    createdDateFrom = null,
    createdDateTo = null,
  } = params;

  return post(u(client, "search"), authHeaders(client), {
    OrderBy: orderBy,
    OrderDir: orderDir,
    PageSize: pageSize,
    PageNumber: pageNumber,
    ProductName: productName,
    Status: status,
    CreatedDateFrom: createdDateFrom,
    CreatedDateTo: createdDateTo,
    Checksum: checksum(
      [orderBy, orderDir, pageSize, pageNumber, productName, status, createdDateFrom, createdDateTo],
      client.md5Secret
    ),
  });
}

// 5. PayLink Details
export async function details(client, { payLinkId }) {
  return post(u(client, "details"), authHeaders(client), {
    PayLinkId: payLinkId,
    Checksum: checksum([payLinkId], client.md5Secret),
  });
}

// 6. Search PayLink Transactions
export async function searchTransactions(client, params = {}) {
  const {
    payLinkId,
    orderBy = "TransactionId",
    orderDir = "DESC",
    pageSize = 10,
    pageNumber = 1,
  } = params;

  return post(u(client, "transactions/search"), authHeaders(client), {
    PayLinkId: payLinkId,
    OrderBy: orderBy,
    OrderDir: orderDir,
    PageSize: pageSize,
    PageNumber: pageNumber,
    Checksum: checksum([payLinkId, orderBy, orderDir, pageSize, pageNumber], client.md5Secret),
  });
}

// 7. PayLink Transaction Details
export async function transactionDetails(client, { transactionId }) {
  return post(u(client, "transactions/details"), authHeaders(client), {
    TransactionId: transactionId,
    Checksum: checksum([transactionId], client.md5Secret),
  });
}
