import { Button } from "@/components/ui/button";
import { concatZeros } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";
import { BsArrowDownUp } from "react-icons/bs";
import { CiHashtag } from "react-icons/ci";
import { useRef } from "react";
import { Link } from "react-router-dom";

export type PokeColumn = {
  results: PokeResults[];
};

export type PokeResults = {
  name: string;
  url: string;
};

export const columns: ColumnDef<PokeResults>[] = [
  {
    accessorKey: "name",
    header: "Pokemon",
    cell: ({ row }) => {
      const entry = parseInt(row.original.url.split("/")[6]);
      const name = row.original.name;
      const ref = useRef<HTMLAnchorElement>(null);
      return (
        <Link
          to={`/search/${entry}`}
          className="flex items-center justify-center"
          ref={ref}
        >
          <p className="text-center">{name}</p>
        </Link>
      );
    },
  },
  {
    accessorKey: "url",
    header: ({ column }) => {
      return (
        <div className="flex items-center align-middle justify-center">
          <p className="flex items-center justify-center">
            Pokedex <CiHashtag className="inline-block text-xl ml-1" />
          </p>
          <Button
            className="w-1/5 h-auto py-2 px-2 ml-2 rounded-md bg-sky-700 border-[0.5px] border-yellow-200 dark:bg-slate-900 dark:hover:bg-red-700 hover:bg-red-700"
            id="sort-button"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === "asc");
            }}
          >
            <BsArrowDownUp className="text-xs text-yellow-300" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const entry = parseInt(row.original.url.split("/")[6]);
      return <>{concatZeros(entry)}</>;
    },
  },
];

export default columns;
