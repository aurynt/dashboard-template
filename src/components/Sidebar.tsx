"use client";

import Image from "next/image";
import Link from "next/link";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiRepeatBold } from "react-icons/pi";
import { TbBrandAirtable } from "react-icons/tb";
import { FiSettings, FiX } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "dashboard", icons: <MdDashboard size={20} /> },
  {
    href: "/transfers",
    label: "transfers",
    icons: <PiRepeatBold size={20} />,
  },
  { href: "/card", label: "card", icons: <FaCreditCard size={20} /> },
  {
    href: "/settings",
    label: "settings",
    icons: <FiSettings size={20} />,
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
  return (
    <section
      className={`bg-slate-950 bg-opacity-60 min-h-screen p-5 ${className}`}
    >
      <div className="flex sm:justify- justify-between min-h-fit relative mb-16">
        <div className="absolute  bg-teal rounded-full h-16 left-3 top-2 w-16 blur-lg"></div>
        <div className="absolute  bg-white rounded-full h-10 left-0 top-2 w-10 blur-lg"></div>
        <Image
          className="z-10"
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
              className={`sm:text-[10px] text-lg capitalize text-center ${
                location == item.href ? "text-teal" : "text-white"
              } flex sm:flex-col items-center gap-3 sm:gap-1`}
            >
              {item.icons}
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex w-full sm:flex-col gap-1 justify-between items-center sm:mb-0 mb-5">
          <Link
            onClick={setOpenSidebar}
            href={"/profile"}
            className="flex items-end gap-2"
          >
            <Avatar className="cursor-pointer sm:h-8 sm:w-8 rounded-full bg-teal">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex items-start sm:hidden flex-col">
              <p className="text-sm">Heri Riyanto</p>
              <p className="text-[12px]">rheri6599@gmail.com</p>
            </div>
          </Link>
          {false ? (
            <IoLogOutOutline size={25} />
          ) : (
            <Link href={"/sign-in"}>
              <IoLogInOutline size={25} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
