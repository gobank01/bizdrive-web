import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { safeEq } from "@/lib/admin";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const form = await request.formData();
  const token = String(form.get("token") || "");
  const nextRaw = String(form.get("next") || "/admin");
  const next = nextRaw.startsWith("/admin") ? nextRaw : "/admin";
  const expected = process.env.ADMIN_TOKEN;

  if (!expected || !safeEq(token, expected)) {
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("error", "1");
    if (next !== "/admin") url.searchParams.set("next", next);
    return NextResponse.redirect(url, { status: 303 });
  }

  const jar = await cookies();
  jar.set("admin_session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  const url = new URL(next, request.url);
  return NextResponse.redirect(url, { status: 303 });
}
