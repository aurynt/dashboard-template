"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/utils";
import { KeyboardEvent, useRef } from "react";
import { toast } from "sonner";

export default function Payment() {
  return (
    <div className="backdrop-hue-rotate-90 border p-4 flex flex-col justify-between w-full sm:w-[25%] sm:min-w-72 rounded-2xl mr-5 gap-5">
      <div className="flex flex-col gap-7">
        <h1 className="text-xl font-bold">Payment</h1>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Sub total</span>
          <span className="font-bold text-xl">{formatCurrency(0)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="text-teal text-2xl font-black">
            {formatCurrency(0)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`${0 < 0 ? "text-red" : ""} font-semibold`}>
            Cashback
          </span>
          <span className={`${0 < 0 ? "text-red" : ""} text-xl font-black`}>
            {formatCurrency(0)}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold">Cash</Label>
          <Input defaultValue={0} className="text-end" />
        </div>
        <Button variant={"outline"} className="border-teal font-semibold">
          Pay
        </Button>
      </div>
      <Button onClick={print} className="bg-teal mb-5 font-semibold">
        Print Struct
      </Button>
    </div>
  );
}
