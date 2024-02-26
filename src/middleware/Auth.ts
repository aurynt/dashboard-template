import { MiddlewareProps } from "@/type";
import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default function Auth({
  middleware,
  pathName,
}: MiddlewareProps<{ pathName: string[] }>) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const path = req.nextUrl.pathname;

    if (pathName.includes(path)) {
      const token = getToken({ req, secret: process.env.NEXTAUTH_SECRET });
      console.log(token);

      if (!token) {
        const url = new URL("/login");
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
}
