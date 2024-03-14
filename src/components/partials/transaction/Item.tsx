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
import { useTransaction } from "@/context/TransactionContext";
import { toast } from "sonner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Item() {
  const { product, setAmount, deleteProduct } = useTransaction();
  const qtyRef = useRef<HTMLInputElement>(null);
  const changeQuantity = (e: KeyboardEvent<HTMLInputElement>, id: string) => {
    if (e.key == "Enter") {
      if (qtyRef.current!.value == "0" || qtyRef.current!.value == "") {
        toast("Amount cannot be empty");
        return;
      }
      setAmount && setAmount(parseInt(qtyRef.current!.value), id);
    }
  };
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
          <TableBody>
            {product.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="py-5 last:rounded-bl-lg">
                    {item.name}
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Input
                      onKeyUp={(e) => changeQuantity(e, item.id)}
                      type="number"
                      inputMode="numeric"
                      defaultValue={item.amount}
                      ref={qtyRef}
                      className="max-w-32"
                    />
                  </TableCell>
                  <TableCell className="text-end">{item.subTotal}</TableCell>
                  <TableCell className="text-red flex justify-center items-center py-5 last:rounded-br-lg">
                    <FaTrash
                      onClick={() => deleteProduct && deleteProduct(i)}
                      size={18}
                      className="text-center inline-block cursor-pointer"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <SearchItems />
    </div>
  );
}
