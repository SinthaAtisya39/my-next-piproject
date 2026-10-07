import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Latihan 3: Maintenance Mode
  const isMaintenance = process.env.MAINTENANCE_MODE === "true";
  const isMaintenancePage = pathname === "/maintenance";

  if (isMaintenance && !isMaintenancePage) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  if (!isMaintenance && isMaintenancePage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 2. Latihan 1: Logger
  if (pathname.startsWith("/api/")) {
    const waktu = new Date().toISOString();
    console.log(`[${waktu}] ${request.method} ${pathname}`);
  }

  // 3. Latihan 2: Auth Guard Menggunakan Cookie
  if (pathname === "" || pathname.startsWith("")) {
    const token = request.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};