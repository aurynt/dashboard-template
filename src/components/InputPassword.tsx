"use client";
import React, { HtmlHTMLAttributes, useState } from "react";
import { Input } from "./ui/input";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function InputPassword(
  props: HtmlHTMLAttributes<HTMLInputElement>
) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="relative w-full">
      {show ? (
        <LuEye
          onClick={handleClick}
          className="absolute right-2 top-2 cursor-pointer"
          size={20}
        />
      ) : (
        <LuEyeOff
          onClick={handleClick}
          className="absolute right-2 top-2 cursor-pointer"
          size={20}
        />
      )}
      <Input type={show ? "text" : "password"} {...props} />
    </div>
  );
}

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus:bg-muted/10 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
