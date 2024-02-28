import { type ClassValue, clsx } from "clsx"
import { getProviders } from "next-auth/react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
