"use client";
import { Product } from "@/type";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart({
  data,
  dataKey,
}: {
  data: Product[];
  dataKey: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke="#8884d8"
          strokeWidth={2}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
