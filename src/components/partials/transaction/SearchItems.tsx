"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

export default function SearchItems() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-3 mb-5">
      <Input
        className="sm:col-span-2 col-span-full"
        placeholder="Search items..."
      />
      <Button className="bg-teal sm:row-start-1 sm:col-start-3 row-start-3">
        Add
      </Button>
      {false && (
        <div className="sm:col-span-2 align-middle col-span-full relative bg-muted/30 rounded-lg p-2">
          <span className="text-sm align-middle block font-bold">
            {"sepatu"}
          </span>
          <span className="absolute text-sm right-2 top-2 text-yellow">
            {formatCurrency(200000)}
          </span>
        </div>
      )}
      <Button className="bg-teal sm:col-end-4 row-start-3 sm:row-start-2">
        Jumlah
      </Button>
    </div>
  );
}
