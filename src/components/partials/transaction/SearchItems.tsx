"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTransaction } from "@/context/TransactionContext";
import { product as data } from "@/data/Product";
import { Product } from "@/type";
import { KeyboardEvent, useRef, useState } from "react";

export default function SearchItems() {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const { addProduct, setTotal } = useTransaction();
  const productRef = useRef<HTMLInputElement>(null);
  const searchProduct = () => {
    const product = data.find(
      (item) =>
        item.name == productRef.current?.value ||
        item.id == productRef.current?.value
    );
    setSelectedProduct(product);
  };
  const selectProduct = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      addProduct && addProduct({ ...selectedProduct, amount: 1 });
    }
  };
  const countSubTotal = () => {
    setTotal && setTotal(100000);
  };
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-3 mb-5">
      <Input
        ref={productRef}
        onChange={searchProduct}
        onKeyUp={selectProduct}
        className="sm:col-span-2 col-span-full"
        placeholder="Search items..."
      />
      <Button
        disabled={typeof selectedProduct?.id ? false : true}
        onClick={() =>
          addProduct && addProduct({ ...selectedProduct, amount: 1 })
        }
        className="bg-teal sm:row-start-1 sm:col-start-3 row-start-3"
      >
        Add
      </Button>
      {selectedProduct && (
        <div className="sm:col-span-2 col-span-full relative bg-muted/30 rounded-lg p-2">
          <span className="text-sm block font-bold">
            {selectedProduct.name}
          </span>
          <span className="font-thin text-teal">{selectedProduct.price}</span>
          <span className="absolute right-2 top-2 text-yellow">
            {selectedProduct.stock}
          </span>
        </div>
      )}
      <Button
        onClick={countSubTotal}
        className="bg-teal sm:col-end-4 row-start-3 sm:row-start-2"
      >
        Jumlah
      </Button>
    </div>
  );
}
