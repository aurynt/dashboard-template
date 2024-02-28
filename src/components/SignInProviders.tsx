"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn, getProviders } from "next-auth/react";

export default function SignInProviders() {
  const provider = getProviders();
  return <Button onClick={() => signIn()}>Google</Button>;
}
