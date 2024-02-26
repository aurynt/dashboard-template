"use client";

import { PageProps } from "@/type";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }: PageProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
