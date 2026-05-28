import { cookies } from "next/headers";
import { getSql } from "@/lib/db";
import { safeEq } from "@/lib/admin";

export const dynamic = "force-dynamic";

const MIGRATIONS = [
  {
    id: "002_crm",
    statements: [
      `ALTER TABLE leads
         ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'new',
         ADD COLUMN IF NOT EXISTS notes TEXT,
         ADD COLUMN IF NOT EXISTS tags TEXT[],
         ADD COLUMN IF NOT EXISTS contacted_at TIMESTAMPTZ,
         ADD COLUMN IF NOT EXISTS last_activity_at TIMESTAMPTZ NOT NULL DEFAULT NOW()`,
      `CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status)`,
      `CREATE INDEX IF NOT EXISTS idx_leads_last_activity ON leads (last_activity_at DESC)`,
      `UPDATE leads
         SET last_activity_at = COALESCE(last_activity_at, created_at),
             status = COALESCE(status, 'new')
         WHERE last_activity_at IS NULL OR status IS NULL`,
    ],
  },
  {
    id: "003_activities",
    statements: [
      `CREATE TABLE IF NOT EXISTS lead_activities (
        id BIGSERIAL PRIMARY KEY,
        lead_id BIGINT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
        kind TEXT NOT NULL,
        payload JSONB,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )`,
      `CREATE INDEX IF NOT EXISTS idx_activities_lead ON lead_activities (lead_id, created_at DESC)`,
      `CREATE INDEX IF NOT EXISTS idx_activities_kind ON lead_activities (kind)`,
    ],
  },
  {
    id: "004_phone",
    statements: [
      `ALTER TABLE leads ADD COLUMN IF NOT EXISTS phone TEXT`,
      `CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads (phone)`,
    ],
  },
  {
    id: "005_orders",
    statements: [
      `CREATE TABLE IF NOT EXISTS orders (
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
      )`,
      `CREATE INDEX IF NOT EXISTS idx_orders_email      ON orders (customer_email)`,
      `CREATE INDEX IF NOT EXISTS idx_orders_status     ON orders (status)`,
      `CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders (created_at DESC)`,
    ],
  },
];

export async function POST() {
  const jar = await cookies();
  const session = jar.get("admin_session")?.value;
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || !session || !safeEq(session, expected)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const sql = getSql();
  const results = [];
  for (const m of MIGRATIONS) {
    const stepResults = [];
    for (const stmt of m.statements) {
      try {
        await sql.query(stmt);
        stepResults.push({ ok: true });
      } catch (err) {
        stepResults.push({ ok: false, error: err.message });
      }
    }
    results.push({ id: m.id, steps: stepResults });
  }

  const summary = {
    ok: results.every((r) => r.steps.every((s) => s.ok)),
    migrations: results,
  };
  return Response.json(summary);
}

export async function GET() {
  const jar = await cookies();
  const session = jar.get("admin_session")?.value;
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || !session || !safeEq(session, expected)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const sql = getSql();
  try {
    const [{ has_crm_cols }] = await sql`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'leads' AND column_name = 'status'
      ) as has_crm_cols
    `;
    const [{ has_activities }] = await sql`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'lead_activities'
      ) as has_activities
    `;
    return Response.json({
      ok: true,
      "002_crm": has_crm_cols,
      "003_activities": has_activities,
    });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
