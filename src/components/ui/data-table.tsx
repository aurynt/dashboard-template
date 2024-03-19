"use client";

import { CgOptions } from "react-icons/cg";
import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableProps } from "@/type";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import FormPayment from "../partials/datatable/Form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Label } from "./label";
import { LuDownload, LuFileDown } from "react-icons/lu";
import { LuFilePlus2 } from "react-icons/lu";

export default function DataTable<TData, TValue>({
  columns,
  children,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const column = table.getAllColumns().filter((column) => column.getCanHide());

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex ml-auto space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"} className="align-middle">
                <LuFilePlus2 className="mr-2 h-4 w-4 " />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent className="backdrop-blur-xl rounded-lg space-x-2">
              <DialogHeader>
                <DialogTitle>Title form</DialogTitle>
              </DialogHeader>
              {children}
            </DialogContent>
          </Dialog>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="align-middle">
                <LuFileDown className="mr-2 h-4 w-4 " /> Export
              </Button>
            </PopoverTrigger>
            <PopoverContent className="space-y-5">
              <div className="space-y-2">
                <Label>Start</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>End</Label>
                <Input />
              </div>
              <Button className="w-full align-middle">
                <LuDownload className="mr-2 h-4 w-4 " />
                Download
              </Button>
            </PopoverContent>
          </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none" asChild>
              <Button variant={"outline"} className="align-middle">
                <CgOptions className="mr-2 h-4 w-4 " />
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  Pages
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="bg-black">
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <DropdownMenuCheckboxItem
                        key={pageSize}
                        className="capitalize cursor-pointer"
                        checked={
                          table.getState().pagination.pageSize === pageSize
                        }
                        onCheckedChange={() => {
                          table.setPageSize(Number(pageSize));
                        }}
                      >
                        {pageSize}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  Columns
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="bg-black cursor-pointer">
                    {column.map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border px-1 backdrop-hue-rotate-30">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
