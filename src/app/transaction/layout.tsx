import TransactionProvider from "@/context/TransactionContext";
import { LayoutProps } from "@/type";

export default function layout({ children }: LayoutProps) {
  return <TransactionProvider>{children}</TransactionProvider>;
}
