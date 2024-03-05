"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  const { name, image, email } = session?.user!;
  return (
    <div className="border rounded-lg p-5">
      <div className="flex items-center gap-2">
        <Avatar className="cursor-pointer rounded-full bg-teal">
          <AvatarImage src={image as string} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-start flex-col">
          <p className="text-sm">{name}</p>
          <p className="text-[12px]">{email}</p>
        </div>
      </div>
      <div className="mt-8">
        <form className="flex-col flex gap-3 w-full sm:w-1/3">
          <div className="flex flex-col gap-1">
            <Label>Name</Label>
            <Input value={name as string} />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Username</Label>
            <Input value={email as string} />
          </div>
        </form>
      </div>
    </div>
  );
}
