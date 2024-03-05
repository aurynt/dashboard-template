"use client";
import InputPassword from "@/components/InputPassword";
import SignInProviders from "@/components/SignInProviders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
// import { handleSubmit } from "./actions";

export default function Page() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-transparent min-w-80 border -backdrop-hue-rotate-60 p-5 rounded-lg flex-col flex gap-5">
        <h1 className="text-2xl text-center">Forgot Password</h1>
        <div className="flex-col flex gap-3">
          <div className="flex flex-col gap-1">
            <Input
              type="email"
              placeholder="Enter your email address..."
              onChange={(e) => setData({ ...data, username: e.target.value })}
              name="username"
            />
          </div>
          <Button onClick={handleSubmit} className="bg-yellow w-full">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

// export function generateMetadata(): Metadata {
//   return {
//     title: "Sign In",
//     description: "Sign in to your account",
//     keywords: "sign in, sign up, sign in with google",
//   };
// }
