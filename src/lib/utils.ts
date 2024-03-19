import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

export const countPropertyFromArray = (arr: any[], key: string) => {
    return arr.reduce((prev, item) => prev + item[key], 0);
  };