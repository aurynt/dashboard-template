"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const disablePath = ["/sign-in", "/sign-up"];
  return (
    <Fragment>
      {!disablePath.includes(pathName) ? (
        <>
          <Sidebar className="w-24 sm:block hidden" />
          <div className="flex flex-col h-screen px-5 gap-5 w-full">
            <Navbar />
            <ScrollArea>
              {children}
              <Footer />
            </ScrollArea>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </Fragment>
  );
}
