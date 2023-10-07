import { Button } from "@/components/ui/button";
import { setTypeColor } from "@/utils";
import { ColumnDef } from "@tanstack/react-table";
import { BsArrowDownUp } from "react-icons/bs";
import { CiHashtag } from "react-icons/ci";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IPokemon } from "@/types/pokemonActionTypes";

export type PokeColumn = {
  results: PokeResults[];
};

export type PokeResults = {
  name: string;
  url: string;
};

export const columns: ColumnDef<IPokemon>[] = [
  {
    accessorKey: "id",
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
  },
  {
    accessorKey: "name",
    header: "Pokemon",
    cell: ({ row }) => {
      const name = row.original.name;
      const sprite = row.original.sprites.front_default;

      return (
        <Link
          to={`/pokemon/${name}`}
          className="flex items-center justify-center hover:underline"
          preventScrollReset
        >
          <img src={sprite} alt={name} className="w-12 h-auto" />
          <p className="text-center ml-2">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        </Link>
      );
    },
  },
  {
    accessorKey: "types",
    header: "Type",
    cell: ({ row }) => {
      const types = row.original.types?.map((type: any) => (
        <li
          className={`${setTypeColor(
            type.type.name
          )} w-full p-0.5 mx-1 rounded-md text-[10px]`}
          key={type.type.name}
        >
          {type.type.name}
        </li>
      ));
      return <ul className="flex items-center justify-center">{types}</ul>;
    },
  },
  {
    accessorKey: "stats_0_base_stat",
    header: "HP",
    cell: ({ row }) => {
      const hp = row.original.stats[0].base_stat;
      return hp;
    },
  },
  {
    accessorKey: "stats_1_base_stat",
    header: "Attack",
    cell: ({ row }) => {
      const atk = row.original.stats[1].base_stat;
      return atk;
    },
  },
  {
    accessorKey: "stats_2_base_stat",
    header: "Defense",
    cell: ({ row }) => {
      const def = row.original.stats[2].base_stat;
      return def;
    },
  },
  {
    accessorKey: "stats_3_base_stat",
    header: "Sp. Atk",
    cell: ({ row }) => {
      const spAtk = row.original.stats[3].base_stat;
      return spAtk;
    },
  },
  {
    accessorKey: "stats_4_base_stat",
    header: "Sp. Def",
    cell: ({ row }) => {
      const spDef = row.original.stats[4].base_stat;
      return spDef;
    },
  },
  {
    accessorKey: "stats_5_base_stat",
    header: "Speed",
    cell: ({ row }) => {
      const speed = row.original.stats[5].base_stat;
      return speed;
    },
  },
];

export default columns;
