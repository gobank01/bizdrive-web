-- BizDrive — leads table
-- รัน SQL นี้ครั้งเดียวบน Neon SQL Editor หลังสร้าง project

CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  plan_slug TEXT,
  source TEXT,
  utm_source TEXT,
  utm_campaign TEXT,
  utm_medium TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_plan_slug ON leads (plan_slug);
