import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const jar = await cookies();
  jar.delete("admin_session");
  const url = new URL("/admin/login", request.url);
  return NextResponse.redirect(url, { status: 303 });
}
