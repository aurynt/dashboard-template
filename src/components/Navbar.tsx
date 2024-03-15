"use client";
import { BiBell } from "react-icons/bi";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { PiUserBold } from "react-icons/pi";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSearch = (e: any) => {
    console.log(e.target.value);
  };
  const { status } = useSession();
  const path = usePathname();

  return (
    <>
      <nav className="flex justify-between gap-5 bg-transparent min-h-[80px] w-full items-center">
        <h1 className="text-2xl font-bold capitalize">Kaise</h1>
        <div className="flex gap-3 items-center overflow-hidden relative">
          <Dialog>
            <DialogTrigger>
              <FiSearch className="hover:text-yellow" size={23} />
            </DialogTrigger>
            <DialogContent className="backdrop-blur-xl">
              <DialogHeader className="gap-3">
                <DialogTitle>What are you looking for?</DialogTitle>
                <div className="flex gap-1 relative items-center">
                  <Input
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="w-full"
                  />
                  <DialogClose
                    asChild
                    className="absolute right-2 cursor-pointer"
                  >
                    <FiSearch size={23} onClick={() => console.log("oke")} />
                  </DialogClose>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div className="hover:text-yellow sm:hidden">
            <FiMenu size={23} onClick={() => setOpenSidebar(!openSidebar)} />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <BiBell
                  className="hover:text-yellow cursor-pointer"
                  size={23}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black">
              <DropdownMenuItem className="cursor-pointer hover:text-teal">
                harry menghapus barang
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:text-teal">
                jbvhv menambahkan pelanggan
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:text-teal">
                harry menambahkan transaksi
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {status == "authenticated" ? (
            <Button
              variant={"ghost"}
              onClick={() => signOut()}
              className="hover:text-yellow hidden bg-muted/30 gap-1 sm:flex items-center font-bold rounded-full"
            >
              <PiUserBold size={18} />
              Sign Out
            </Button>
          ) : (
            <Button
              variant={"ghost"}
              onClick={() => signIn()}
              className="hover:text-yellow hidden bg-muted/30 gap-1 sm:flex items-center font-bold rounded-full"
            >
              <PiUserBold size={18} />
              Sign In
            </Button>
          )}
        </div>
      </nav>
      <Sidebar
        setOpenSidebar={() => setOpenSidebar(!openSidebar)}
        className={` h-screen w-screen ${
          openSidebar ? "left-0" : "-left-full"
        } top-0 absolute w-full bg-black z-10 backdrop-blur duration-500 ease-in-out`}
      />
    </>
  );
}
