import { nextAuthPages } from "@/config";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse, NextFetchEvent, NextRequest } from "next/server";

const publicPaths = ["/blog"];

const authPaths = ["/signup", "/forgot-password"];

const nextAuthMiddleware = withAuth({
  callbacks: { authorized: ({ token }) => !!token },
  pages: nextAuthPages,
});

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  if (publicPaths.includes(pathname) || authPaths.includes(pathname)) {
    return NextResponse.next();
  }
  return nextAuthMiddleware(req as NextRequestWithAuth, event);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
