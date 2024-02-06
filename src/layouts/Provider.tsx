import { Fragment, ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
