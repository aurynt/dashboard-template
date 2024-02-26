"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-separator";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-transparent border -backdrop-hue-rotate-60 p-5 rounded-lg flex-col flex gap-3">
        <h1 className="text-2xl text-center">Sign In</h1>
        <form className="flex-col flex gap-3">
          <div className="flex flex-col gap-1">
            <Label>Username</Label>
            <Input />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Password</Label>
            <Input type="password" />
          </div>
          <div className="flex gap-1">
            <Checkbox />
            <Label className="text-sm">Show password</Label>
          </div>
          <Button className="bg-yellow w-full">Submit</Button>
        </form>
        <Link
          href={"#"}
          className="text-blue-400 w-full block text-end text-sm"
        >
          Forgot passsword?
        </Link>
        <Button onClick={() => signIn("google")}>Google</Button>
      </div>
    </div>
  );
}
