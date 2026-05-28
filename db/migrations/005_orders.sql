-- Migration 005: orders table (ChillPay PayLink)
CREATE TABLE IF NOT EXISTS orders (
  pay_link_id    BIGINT PRIMARY KEY,
  product_id     TEXT NOT NULL,
  customer_email TEXT,
  amount         BIGINT NOT NULL,
  currency       TEXT NOT NULL DEFAULT 'THB',
  status         TEXT NOT NULL CHECK (status IN ('pending','paid','failed','refunded')),
  transaction_id BIGINT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  paid_at        TIMESTAMPTZ,
  payment_date   TEXT,
  metadata       JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_orders_email      ON orders (customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_status     ON orders (status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders (created_at DESC);
