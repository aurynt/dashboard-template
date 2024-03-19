import { columns } from "./columns";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import DataTable from "@/components/ui/data-table";
import { product } from "@/data/Product";
import FormProduct from "@/components/partials/datatable/Form";

export default async function page() {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollArea className="mt-5">
        <DataTable columns={columns} data={product}>
          <FormProduct />
        </DataTable>
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
