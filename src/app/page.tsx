import Chart from "@/components/ui/chart";
import { product } from "@/data/Product";
import { countPropertyFromArray, formatCurrency } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex sm:flex-row flex-col gap-5 justify-between backdrop-brightness-100">
      <div className="flex flex-col">
        <div className="flex w-full sm:flex-row flex-col gap-5 mb-8">
          <div className="rounded-lg border p-3 h-24 w-full relative">
            <h1 className="font-bold capitalize">Product</h1>
            <span className="text-3xl absolute font-bold text-teal bottom-3 right-6">
              {product.length}
            </span>
          </div>
          <div className="rounded-lg border p-3 h-24 w-full relative">
            <h1 className="font-bold capitalize">Stock</h1>
            <span className="text-3xl absolute font-bold text-teal bottom-3 right-6 capitalize">
              {countPropertyFromArray(product, "stock")} pcs
            </span>
          </div>
          <div className="rounded-lg border p-3 h-24 w-full relative">
            <h1 className="font-bold capitalize">Revenue</h1>
            <span className="text-xl absolute font-bold text-teal bottom-3 right-6">
              {formatCurrency(countPropertyFromArray(product, "price"))}
            </span>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem accusantium inventore consectetur dignissimos hic
          tenetur nam magnam quas cumque, nulla ratione, sed ullam illum saepe.
          Nostrum nulla totam rem vero.
        </h1>
      </div>
      <div className="h-72 p-3 sm:w-[25rem] min-w-72 border backdrop-hue-rotate-30 w-full rounded-lg mb-8">
        <Chart data={product} dataKey="price" />
      </div>
    </main>
  );
}
