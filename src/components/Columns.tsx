"use client";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/type";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        className="text-teal"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("firstName")} {row.getValue("lastName")}
      </div>
    ),
  },
  {
    accessorKey: "lastName",
    header: () => <div className="text-teal">Last Name</div>,
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("lastName")} {row.getValue("lastName")}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          className="text-teal"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "gender",
    header: () => <div className="text-teal">Gender</div>,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("gender")}</div>;
    },
  },
  {
    accessorKey: "ein",
    header: () => <div className="text-right text-teal">EIN</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("ein")}</div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer hover:text-teal"
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-teal">
              View customer
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:text-teal">
              View payment details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
