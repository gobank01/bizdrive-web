-- Migration 003: Activity log สำหรับ leads
-- รันใน Neon SQL Editor ครั้งเดียว

CREATE TABLE IF NOT EXISTS lead_activities (
  id BIGSERIAL PRIMARY KEY,
  lead_id BIGINT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_activities_lead ON lead_activities (lead_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activities_kind ON lead_activities (kind);
