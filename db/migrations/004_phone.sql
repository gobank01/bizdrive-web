-- Migration 004: เพิ่ม phone column สำหรับ leads
ALTER TABLE leads ADD COLUMN IF NOT EXISTS phone TEXT;
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads (phone);
