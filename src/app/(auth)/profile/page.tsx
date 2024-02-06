import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <div className="border rounded-lg p-5">
      <div className="flex items-center gap-2">
        <Avatar className="cursor-pointer rounded-full bg-teal">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-start flex-col">
          <p className="text-sm">Heri Riyanto</p>
          <p className="text-[12px]">rheri6599@gmail.com</p>
        </div>
      </div>
      <div className="mt-8">
        <form className="flex-col flex gap-3 w-full sm:w-1/3">
          <div className="flex flex-col gap-1">
            <Label>Name</Label>
            <Input value={"Heri"} />
          </div>
          <div className="flex flex-col gap-1">
            <Label>Username</Label>
            <Input value={"rheri6599@gmail.com"} />
          </div>
        </form>
      </div>
    </div>
  );
}
