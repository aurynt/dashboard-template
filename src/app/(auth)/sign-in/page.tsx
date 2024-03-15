"use client";
import { InputPassword } from "@/components/InputPassword";
import SignInProviders from "@/components/SignInProviders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Page() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-transparent min-w-80 border -backdrop-hue-rotate-60 p-5 rounded-lg flex-col flex gap-5">
        <h1 className="text-2xl text-center my-3">Sign In</h1>
        <div className="flex-col flex gap-5">
          <div className="flex flex-col gap-2">
            <Label>Username</Label>
            <Input
              onChange={(e) => setData({ ...data, username: e.target.value })}
              name="username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex">
              <Label>Password</Label>
              <Link
                href={"/forgot-password"}
                className="text-blue-400 w-full block text-end text-sm"
              >
                Forgot password?
              </Link>
            </div>
            <InputPassword
              onChange={(e) => setData({ ...data, password: e.target.value })}
              name="password"
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
