import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PokemonListItem from "../PokemonListItem";

export default function SearchPokedex({ data }: any) {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(data.results);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());

    if (search.length >= 2) {
      setPokemon((prev: any) => {
        return prev.filter((p: any) => p.name.toLowerCase().includes(search));
      });
    }
    if (search.length < 2) {
      setPokemon(data.results);
    }
  };

  return (
    <>
      <div className="mt-16 dark:bg-black md:w-full p-4 ">
        <div className="flex md:w-full justify-center items-center text-left">
          <Label
            htmlFor="search"
            className="text-white md:text-[9px] text-[7px] pr-4"
          >
            Search for Pokemon
          </Label>
          <Input
            type="search"
            id="search"
            value={search}
            onChange={(e) => handleChange(e)}
            aria-details="search for pokemon"
            className="bg-sky-200 placeholder:text-black-400 placeholder:text-[8px] dark:bg-slate-800 dark:text-white text-black-400 rounded-md md:p-2 w-3/4 md:w-1/3"
            placeholder="Enter Pokemon Name..."
          />
        </div>
      </div>

      <ul className="w-full h-auto overflow-auto pt-2 flex flex-col justify-start items-center px-4 ">
        {pokemon?.length ? (
          pokemon.map((pokemon: any, index: number) => (
            <PokemonListItem {...pokemon} />
          ))
        ) : (
          <p className="text-white">No pokemon found</p>
        )}
      </ul>
    </>
  );
}
