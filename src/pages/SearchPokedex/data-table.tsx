import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { memo, useRef } from "react";
import DebouncedInput, { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState(
    "" as string | null | number | undefined
  );
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const rowRef = useRef<HTMLTableRowElement>(null);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="rounded-md shrink-0 border-black mb-0 relative pb-2 mx-auto bg-sky-700 dark:bg-slate-900 w-full h-auto drop-shadow-lg">
      <div className="flex items-center justify-center w-auto py-4">
        <DebouncedInput
          placeholder="Find Pokemon..."
          type="text"
          id="search-pokemon"
          value={globalFilter ?? ""}
          onChange={(value) => {
            setGlobalFilter(value);
          }}
          className="max-w-sm bg-slate-200 placeholder:text-slate-700 text-xs bg-opacity-70 m-2 text-slate-700 dark:placeholder:text-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:bg-opacity-70"
        />
        <Label className="text-slate-200 text-xs md:visible">
          Search via pokedex number or name
        </Label>
      </div>
      <Table className="md:w-3/5 mx-auto">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-yellow-400 dark:text-yellow-400 text-center text-md font-bold"
                  >
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
          {table.getRowModel().rows.map((row, i, id) => (
            <TableRow
              key={row.id}
              id={id[i].id}
              ref={rowRef}
              data-state={row.getIsSelected() && "selected"}
              className="text-center w-auto md:text-sm text-xs tracking-wide hover:border-yellow-500 hover:border-[1px] hover:text-black dark:hover:text-yellow-400 hover:bg-slate-900 hover:bg-opacity-50 dark:hover:bg-slate-200 dark:hover:bg-opacity-50"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  id={cell.id}
                  className="pb-2 w-auto  text-slate-200  "
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default memo(DataTable);
