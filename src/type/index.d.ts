import { ColumnDef } from "@tanstack/react-table";
import { NextMiddleware } from "next/server";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ein: string;
};

export type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
};

export type PageProps<T = {}> = {
  children: ReactNode;
} & T;

export type MiddlewareProps<T = {}> = {
  middleware: NextMiddleware;
} & T;