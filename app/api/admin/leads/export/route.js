import { cookies } from "next/headers";
import { getSql } from "@/lib/db";
import { safeEq } from "@/lib/admin";

export const dynamic = "force-dynamic";

function csvCell(v) {
  if (v === null || v === undefined) return "";
  const s = String(v);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export async function GET() {
  const jar = await cookies();
  const session = jar.get("admin_session")?.value;
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || !session || !safeEq(session, expected)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const sql = getSql();
  const rows = await sql`
    SELECT id, email, name, phone, plan_slug, source, status, notes, tags, utm_source, utm_campaign, utm_medium, referrer, contacted_at, created_at
    FROM leads
    ORDER BY created_at DESC
  `;

  const header = ["id","email","name","phone","plan_slug","source","status","notes","tags","utm_source","utm_campaign","utm_medium","referrer","contacted_at","created_at"];
  const lines = [header.join(",")];
  for (const r of rows) {
    lines.push([
      r.id, r.email, r.name, r.phone, r.plan_slug, r.source, r.status, r.notes,
      Array.isArray(r.tags) ? r.tags.join("|") : "",
      r.utm_source, r.utm_campaign, r.utm_medium, r.referrer,
      r.contacted_at?.toISOString?.() || r.contacted_at || "",
      r.created_at?.toISOString?.() || r.created_at || "",
    ].map(csvCell).join(","));
  }
  const csv = "﻿" + lines.join("\n");
  const stamp = new Date().toISOString().slice(0, 10);
  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="bizdrive-leads-${stamp}.csv"`,
    },
  });
}
