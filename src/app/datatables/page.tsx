import { columns } from "./columns";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { data } from "@/data/Payment";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import DataTable from "@/components/ui/data-table";

export default async function page() {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollArea>
        <DataTable columns={columns} data={data} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Suspense>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Data Table",
  };
}
