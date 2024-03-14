"use client";

import { PageProps } from "@/type";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children, session }: PageProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
