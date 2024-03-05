import { User } from '@/type';
import { TableOptions, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';

export default function UseTable(props:TableOptions<User>) {
  return useReactTable({
      ...props,
  });
}
