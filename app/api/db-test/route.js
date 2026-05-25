import { getSql } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sql = getSql();
    const [{ version }] = await sql`SELECT version()`;
    const [{ now }] = await sql`SELECT NOW() as now`;
    const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'leads'
      ) as has_leads_table
    `;
    return Response.json({
      ok: true,
      version,
      now,
      hasLeadsTable: tableCheck[0].has_leads_table,
    });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
