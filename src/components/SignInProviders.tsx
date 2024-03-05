"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa6";
import { Separator } from "./ui/separator";

export default function SignInProviders() {
  return (
    <div className="flex flex-col w-full gap-2">
      <Separator className="bg-muted mb-3" />
      <Button
        className="flex gap-2 items-center bg-muted/20"
        onClick={() => signIn("google")}
      >
        <FcGoogle size={20} />
        Google
      </Button>

      <Button
        className="flex gap-2 items-center bg-muted/20"
        onClick={() => signIn("github")}
      >
        <FaGithubAlt size={20} />
        Github
      </Button>
    </div>
  );
}
