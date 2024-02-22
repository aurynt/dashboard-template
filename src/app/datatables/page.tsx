import DataTable from "@/components/Datatable";
import { columns } from "@/components/Columns";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { getData } from "@/data/User";
import type { User } from "@/type";
import { ScrollBar } from "@/components/ui/scroll-area";

export default async function page() {
  const res = await getData();
  return (
    <Suspense fallback={<Loading />}>
      <DataTable columns={columns} data={res.users as User[]} />
      <ScrollBar orientation="horizontal" />
    </Suspense>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Data Table",
  };
}
