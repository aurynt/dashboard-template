"use client";
import { KeyboardEvent, useRef } from "react";
import SearchItems from "./SearchItems";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaTrash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Item() {
  return (
    <div className="sm:w-[75%] w-full flex flex-col gap-8 justify-between">
      <ScrollArea className="w-full min-h-96 border rounded-2xl h-full backdrop-hue-rotate-30">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/20">
              <TableHead className="sm:min-w-72 ssm:w-96 py-4 rounded-tl-lg">
                Name
              </TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center max-w-32 w-32">Qty</TableHead>
              <TableHead className="text-end">Sub total</TableHead>
              <TableHead className="rounded-tr-lg"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <SearchItems />
    </div>
  );
}
