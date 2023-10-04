import { Button } from "@/components/ui/button";
import { concatZeros } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";
import {BsArrowDownUp} from "react-icons/bs";
import {CiHashtag} from "react-icons/ci";

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
  },
  {
    accessorKey: "url",
    header: ({ column }) => {


      return (
        <div className="flex items-center align-middle justify-around">
        <p className="flex items-center justify-center">Pokedex <CiHashtag className="inline-block text-lg ml-1"/></p>
        <Button
          className="w-1/4 h-auto py-2 px-2 rounded-md bg-sky-700 border-[0.5px] border-yellow-200 dark:bg-slate-900 dark:hover:bg-red-700 hover:bg-red-700" 
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
