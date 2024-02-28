import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest, res: NextResponse) {
  const token = await getToken({
    req,
    secret: process?.env?.NEXTAUTH_SECRET,
  });

  if (!token) {
    const url = new URL("/api/auth/signin", req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
