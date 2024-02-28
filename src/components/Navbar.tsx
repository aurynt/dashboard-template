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

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSearch = (e: any) => {
    console.log(e.target.value);
  };
  const { data: session, status } = useSession();

  return (
    <>
      <nav className="flex justify-between gap-5 bg-transparent min-h-[80px] w-full items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-3 items-center overflow-hidden relative">
          <Dialog>
            <DialogTrigger>
              <FiSearch size={23} />
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
          <div>
            <FiMenu
              size={23}
              className="sm:hidden"
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          </div>
          <div>
            <BiBell size={23} />
          </div>
          {status == "authenticated" ? (
            <Button
              onClick={() => signOut()}
              className="bg-muted/30 gap-1 flex items-center font-bold rounded-full"
            >
              <PiUserBold size={18} />
              Sign Out
            </Button>
          ) : (
            <Button
              onClick={() => signIn()}
              className="bg-muted/30 gap-1 flex items-center font-bold rounded-full"
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
