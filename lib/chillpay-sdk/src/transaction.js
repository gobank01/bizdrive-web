import { authHeaders, checksum, post } from "./core.js";

// Transaction API v1.0.6 — base: api-transaction.chillpay.co/api/v1

const u = (client, path) => `${client.base.transaction}/api/v1/${path}`;

// 1. Search Payment Transactions
export async function searchPayments(client, params = {}) {
  const {
    orderBy = "TransactionId",
    orderDir = "DESC",
    pageSize = 10,
    pageNumber = 1,
    searchKeyword = null,
    merchantCode = null,
    paymentChannel = null,
    routeNo = null,
    orderNo = null,
    status = null,
    transactionDateFrom = null,
    transactionDateTo = null,
    paymentDateFrom = null,
    paymentDateTo = null,
  } = params;

  return post(u(client, "payment/search"), authHeaders(client), {
    OrderBy: orderBy,
    OrderDir: orderDir,
    PageSize: pageSize,
    PageNumber: pageNumber,
    SearchKeyword: searchKeyword,
    MerchantCode: merchantCode,
    PaymentChannel: paymentChannel,
    RouteNo: routeNo,
    OrderNo: orderNo,
    Status: status,
    TransactionDateFrom: transactionDateFrom,
    TransactionDateTo: transactionDateTo,
    PaymentDateFrom: paymentDateFrom,
    PaymentDateTo: paymentDateTo,
    Checksum: checksum(
      [
        orderBy, orderDir, pageSize, pageNumber, searchKeyword, merchantCode,
        paymentChannel, routeNo, orderNo, status,
        transactionDateFrom, transactionDateTo, paymentDateFrom, paymentDateTo,
      ],
      client.md5Secret
    ),
  });
}

// 2. Search Settlements
export async function searchSettlements(client, params = {}) {
  const {
    orderBy = "TransactionId",
    orderDir = "DESC",
    pageSize = 10,
    pageNumber = 1,
    searchKeyword = null,
    merchantCode = null,
    paymentChannel = null,
    routeNo = null,
    orderNo = null,
    settled = null,
    transactionDateFrom = null,
    transactionDateTo = null,
    paymentDateFrom = null,
    paymentDateTo = null,
    transferDateFrom = null,
    transferDateTo = null,
    cutOffTimeDateFrom = null,
    cutOffTimeDateTo = null,
  } = params;

  return post(u(client, "settlement/search"), authHeaders(client), {
    OrderBy: orderBy,
    OrderDir: orderDir,
    PageSize: pageSize,
    PageNumber: pageNumber,
    SearchKeyword: searchKeyword,
    MerchantCode: merchantCode,
    PaymentChannel: paymentChannel,
    RouteNo: routeNo,
    OrderNo: orderNo,
    Settled: settled,
    TransactionDateFrom: transactionDateFrom,
    TransactionDateTo: transactionDateTo,
    PaymentDateFrom: paymentDateFrom,
    PaymentDateTo: paymentDateTo,
    TransferDateFrom: transferDateFrom,
    TransferDateTo: transferDateTo,
    CutOffTimeDateFrom: cutOffTimeDateFrom,
    CutOffTimeDateTo: cutOffTimeDateTo,
    Checksum: checksum(
      [
        orderBy, orderDir, pageSize, pageNumber, searchKeyword, merchantCode,
        paymentChannel, routeNo, orderNo, settled,
        transactionDateFrom, transactionDateTo, paymentDateFrom, paymentDateTo,
        transferDateFrom, transferDateTo, cutOffTimeDateFrom, cutOffTimeDateTo,
      ],
      client.md5Secret
    ),
  });
}

// 3. Search Voids
export async function searchVoids(client, params = {}) {
  const {
    orderBy = "TransactionId",
    orderDir = "DESC",
    pageSize = 10,
    pageNumber = 1,
    searchKeyword = null,
    merchantCode = null,
    orderNo = null,
    status = null,
    transactionDateFrom = null,
    transactionDateTo = null,
  } = params;

  return post(u(client, "void/search"), authHeaders(client), {
    OrderBy: orderBy,
    OrderDir: orderDir,
    PageSize: pageSize,
    PageNumber: pageNumber,
    SearchKeyword: searchKeyword,
    MerchantCode: merchantCode,
    OrderNo: orderNo,
    Status: status,
    TransactionDateFrom: transactionDateFrom,
    TransactionDateTo: transactionDateTo,
    Checksum: checksum(
      [orderBy, orderDir, pageSize, pageNumber, searchKeyword, merchantCode, orderNo, status, transactionDateFrom, transactionDateTo],
      client.md5Secret
    ),
  });
}

// 4. Search Refunds
export async function searchRefunds(client, params = {}) {
  // Same signature as searchVoids per doc tables 4.1/4.2
  const {
    orderBy = "TransactionId",
    orderDir = "DESC",
    pageSize = 10,
    pageNumber = 1,
    searchKeyword = null,
    merchantCode = null,
    orderNo = null,
    status = null,
    transactionDateFrom = null,
    transactionDateTo = null,
  } = params;

  return post(u(client, "refund/search"), authHeaders(client), {
    OrderBy: orderBy,
    OrderDir: orderDir,
    PageSize: pageSize,
    PageNumber: pageNumber,
    SearchKeyword: searchKeyword,
    MerchantCode: merchantCode,
    OrderNo: orderNo,
    Status: status,
    TransactionDateFrom: transactionDateFrom,
    TransactionDateTo: transactionDateTo,
    Checksum: checksum(
      [orderBy, orderDir, pageSize, pageNumber, searchKeyword, merchantCode, orderNo, status, transactionDateFrom, transactionDateTo],
      client.md5Secret
    ),
  });
}

// 5. Get Payment Transaction Details
export async function paymentDetails(client, { transactionId }) {
  return post(u(client, "payment/details"), authHeaders(client), {
    TransactionId: transactionId,
    Checksum: checksum([transactionId], client.md5Secret),
  });
}

// 6. Request Void — use before settlement
export async function requestVoid(client, { transactionId }) {
  return post(u(client, "void/request"), authHeaders(client), {
    TransactionId: transactionId,
    Checksum: checksum([transactionId], client.md5Secret),
  });
}

// 7. Request Refund — use after settlement
export async function requestRefund(client, { transactionId, refundAmount = null, requestNote = null }) {
  return post(u(client, "refund/request"), authHeaders(client), {
    TransactionId: transactionId,
    RefundAmount: refundAmount,
    RequestNote: requestNote,
    Checksum: checksum([transactionId, refundAmount, requestNote], client.md5Secret),
  });
}
