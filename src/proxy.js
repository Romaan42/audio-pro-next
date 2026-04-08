import checkAdmin from "@/lib/checkAdminLogin";
import { NextResponse } from "next/server";
import checkUserLogin from "./lib/checkLoginUser";

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const isAdmin = await checkAdmin();
  const isUserLoggedIn = await checkUserLogin();

  if ((pathname === "/admin" || pathname.startsWith("/admin/")) && !isAdmin) {
    return NextResponse.redirect(new URL("/i-am-admin", request.url));
  }

  if (pathname === "/i-am-admin" && isAdmin) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  if ((pathname === "/checkout" || pathname === "/orders") && !isUserLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/login" && isUserLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/i-am-admin", "/checkout", "/orders", "/login"],
};
