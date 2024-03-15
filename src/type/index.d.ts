import { ColumnDef } from "@tanstack/react-table";
import { NextMiddleware } from "next/server";
import { ReactNode } from "react";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export type Product<T = {}> = {
  id: string;
  name: string;
  price: number;
  stock: number;
} & T;

export type User = {
  id: string;
  name:string;
  email: string;
  address: string;
};

export type DataTableProps<TData,TValue> = {
  columns: ColumnDef<TData,TValue>[];
  data: TData[];
  children?:ReactNode
};

export type PageProps<T = {}> = {
  children: ReactNode;
  session: Session;
} & T;
export type LayoutProps<T = {}> = {
  children: ReactNode;
} & T;

export type MiddlewareProps<T = {}> = {
  middleware: NextMiddleware;
} & T;
