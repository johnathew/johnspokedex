import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Link } from "react-router-dom";
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
      <div className="sticky top-0 z-10 dark:bg-black flex items-center p-4 justify-around">
        <div className="flex flex-col md:w-3/4 items-center">
          <Label htmlFor="search" className="mb-2 text-xl">
            Name
          </Label>
          <Input
            type="search"
            id="search"
            value={search}
            onChange={(e) => handleChange(e)}
            aria-details="search for pokemon"
          />
        </div>
        <h1 className="bg-sky-600 p-4 rounded-lg shadow-lg border-[1px]">Search for a pokemon by name {':)'}</h1>
      </div>
      <div className="w-full items-center gap-1.5 overflow-auto pt-4 ">
        <ul>
          {pokemon?.length ? (
            pokemon.map((pokemon: any, index: number) => (
              <PokemonListItem pokemon={pokemon} index={index} key={pokemon.name} />
            ))
          ) : (
            <p className="text-white">No pokemon found</p>
          )}
        </ul>
      </div>
    </>
  );
}
