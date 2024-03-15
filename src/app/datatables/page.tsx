import { columns } from "./columns";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { data } from "@/data/Payment";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import DataTable from "@/components/ui/data-table";
import FormPayment from "@/components/partials/datatable/Form";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default async function page() {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollArea className="mt-5">
        <DataTable columns={columns} data={data}>
          <FormPayment />
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
