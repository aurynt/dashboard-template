"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTransaction } from "@/context/TransactionContext";
import { formatCurrency } from "@/lib/utils";
import { KeyboardEvent, useRef } from "react";
import { toast } from "sonner";

export default function Payment() {
  const { total, cash, product, setCash, done, setDone } = useTransaction();
  const cashRef = useRef<HTMLInputElement>(null);
  const pay = () => {
    if (cash < total) {
      toast("Less money", {
        style: {
          color: "#FA5145",
        },
      });
      return;
    }
    const sale = {
      total,
      pelangganId: "habajhvbj",
    };
    const detail = product.map((item) => {
      return {
        produkId: item.id,
        penjualanId: "sjvbajbk",
        subTotal: item.subTotal,
        jumlah: item.amount,
      };
    });
    setDone && setDone(false);
    console.log({ detail, sale });
  };

  const changeCash = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (cashRef.current!.value == "0" || cashRef.current!.value == "") {
        toast("Cash cannot be empty", {
          style: {
            color: "#FA5145",
          },
        });
        return;
      }
      setDone && setDone(true);
      setCash && setCash(parseInt(cashRef.current!.value));
    }
  };
  return (
    <div className="backdrop-hue-rotate-90 border p-4 flex flex-col justify-between w-full sm:w-[25%] sm:min-w-72 rounded-2xl mr-5 gap-5">
      <div className="flex flex-col gap-7">
        <h1 className="text-xl font-bold">Payment</h1>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Sub total</span>
          <span className="font-bold text-xl">{formatCurrency(total)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="text-teal text-2xl font-black">
            {formatCurrency(total)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span
            className={`${cash - total < 0 ? "text-red" : ""} font-semibold`}
          >
            Cashback
          </span>
          <span
            className={`${
              cash - total < 0 ? "text-red" : ""
            } text-xl font-black`}
          >
            {formatCurrency(cash - total)}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-semibold">Cash</Label>
          <Input
            ref={cashRef}
            onKeyUp={changeCash}
            defaultValue={cash}
            className="text-end"
          />
        </div>
        <Button
          disabled={!done}
          onClick={pay}
          variant={"outline"}
          className="border-teal font-semibold"
        >
          Pay
        </Button>
      </div>
      <Button
        disabled={!done}
        onClick={print}
        className="bg-teal mb-5 font-semibold "
      >
        Print Struct
      </Button>
    </div>
  );
}
