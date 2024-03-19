import Chart from "@/components/ui/chart";
import { product } from "@/data/Product";
import { countPropertyFromArray, formatCurrency } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col justify-between backdrop-brightness-100">
      <div className="flex sm:flex-row flex-col gap-4 sm:gap-8 mb-8">
        <div className="rounded-lg border p-3 h-24 w-full relative">
          <h1 className="font-bold uppercase">Product</h1>
          <span className="text-3xl absolute font-bold text-teal bottom-3 right-6">
            {product.length}
          </span>
        </div>
        <div className="rounded-lg border p-3 h-24 w-full relative">
          <h1 className="font-bold uppercase">Stock</h1>
          <span className="text-3xl absolute font-bold text-teal bottom-3 right-6 uppercase">
            {countPropertyFromArray(product, "stock")} pcs
          </span>
        </div>
        <div className="rounded-lg border p-3 h-24 w-full relative">
          <h1 className="font-bold uppercase">Income</h1>
          <span className="text-3xl absolute font-bold text-teal bottom-3 right-6">
            {formatCurrency(countPropertyFromArray(product, "price"))}
          </span>
        </div>
      </div>
      <div className="h-72 p-3 sm:w-[25rem] border backdrop-hue-rotate-30 w-full rounded-lg mb-8">
        <Chart data={product} dataKey="price" />
      </div>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, magni?
        Quae consectetur, alias dolorum eum commodi facilis expedita laborum,
        fugiat ab iure enim labore veritatis rem voluptatem perspiciatis at
        quisquam!
      </h1>
    </main>
  );
}
