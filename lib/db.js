import { neon } from "@neondatabase/serverless";

let _sql;

export function getSql() {
  if (!_sql) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    _sql = neon(url);
  }
  return _sql;
}

export async function logActivity(leadId, kind, payload = null) {
  if (!leadId || !kind) return;
  try {
    const sql = getSql();
    await sql`
      INSERT INTO lead_activities (lead_id, kind, payload)
      VALUES (${leadId}, ${kind}, ${payload ? JSON.stringify(payload) : null}::jsonb)
    `;
  } catch (err) {
    console.error("logActivity failed:", err.message);
  }
}
