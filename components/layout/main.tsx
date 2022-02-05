import Header from "@components/header";
import type { ReactChildren } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
