import Item from "@/components/partials/transaction/Item";
import Payment from "@/components/partials/transaction/Payments";
import React, { Suspense } from "react";
import Loading from "./loading";

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex sm:flex-row flex-col gap-5 sm:h-[82vh] justify-between mb-5">
        <Item />
        <Payment />
      </div>
    </Suspense>
  );
}
