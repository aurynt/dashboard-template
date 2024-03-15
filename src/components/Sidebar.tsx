"use client";

import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { PiRepeatBold } from "react-icons/pi";
import { TbBrandAirtable } from "react-icons/tb";
import { FiSettings, FiX, FiLogOut } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { signOut, useSession, signIn } from "next-auth/react";
import { Button } from "./ui/button";

const nav = [
  { href: "/", label: "dashboard", icons: <MdDashboard size={20} /> },
  {
    href: "/transaction",
    label: "transaction",
    icons: <PiRepeatBold size={20} />,
  },
  {
    href: "/datatables",
    label: "data tables",
    icons: <TbBrandAirtable size={20} />,
  },
];

export default function Sidebar({
  className,
  setOpenSidebar,
}: {
  className: string;
  setOpenSidebar?: () => void;
}) {
  const location = usePathname();
  const { data: session, status } = useSession();
  return (
    <section
      className={`bg-slate-950 bg-opacity-60 min-h-screen p-5 ${className}`}
    >
      <div className="flex sm:justify- justify-between min-h-fit relative mb-16">
        <div className="absolute  bg-teal rounded-full h-16 left-3 top-2 w-16 blur-lg"></div>
        <div className="absolute  bg-white rounded-full h-10 left-0 top-2 w-10 blur-lg"></div>
        <Image
          className="z-10 aspect-square"
          priority
          src={"/logo.png"}
          alt="logo"
          width={60}
          height={60}
        />
        <FiX
          className="top-3 right-0 absolute sm:hidden"
          size={23}
          onClick={setOpenSidebar}
        />
      </div>
      <div className="w-full sm:items-center flex flex-col justify-between h-5/6 overflow-y-scroll">
        <div className="flex flex-col gap-5">
          {nav.map((item, i) => (
            <Link
              onClick={setOpenSidebar}
              key={i}
              href={item.href}
              className={`sm:text-[8px] text-lg capitalize text-center ${
                location == item.href ? "text-teal" : "text-white"
              } flex sm:flex-col hover:text-yellow items-center gap-3 sm:gap-0`}
            >
              {item.icons}
              <span className="text-nowrap">{item.label}</span>
            </Link>
          ))}
        </div>
        {status === "authenticated" ? (
          <div className="flex w-full sm:flex-col gap-1 justify-between items-center sm:mb-0 mb-5">
            <Link
              onClick={setOpenSidebar}
              href={"/profile"}
              className="flex items-end gap-2"
            >
              <Avatar className="cursor-pointer sm:h-8 sm:w-8 rounded-full">
                <AvatarImage src={session?.user?.image as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex items-start sm:hidden flex-col hover:text-yellow">
                <p className="text-sm">{session?.user?.name as string}</p>
                <p className="text-[12px]">{session?.user?.email as string}</p>
              </div>
            </Link>
            <button
              className="hover:text-yellow sm:hidden"
              onClick={() => signOut()}
            >
              <FiLogOut size={23} />
            </button>
          </div>
        ) : (
          <Button
            variant={"ghost"}
            className="bg-muted/20 mb-5 hover:text-yellow sm:hidden"
            onClick={() => signIn()}
          >
            Sign in
          </Button>
        )}
      </div>
    </section>
  );
}
