import { concatZeros, getEntry } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";

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
    header: "Pokedex #",
    cell: ({ row }) => {
      const entry = parseInt(row.original.url.split("/")[6]);
      return <div className="text-left">{concatZeros(entry)}</div>;
    },

  },
];

export default columns;
