-- Migration 002: เพิ่ม CRM fields ให้ leads
-- รันใน Neon SQL Editor ครั้งเดียว

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'new',
  ADD COLUMN IF NOT EXISTS notes TEXT,
  ADD COLUMN IF NOT EXISTS tags TEXT[],
  ADD COLUMN IF NOT EXISTS contacted_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS last_activity_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_last_activity ON leads (last_activity_at DESC);

-- Update existing rows: set last_activity_at = created_at, status = 'new'
UPDATE leads
SET last_activity_at = COALESCE(last_activity_at, created_at),
    status = COALESCE(status, 'new')
WHERE last_activity_at IS NULL OR status IS NULL;
