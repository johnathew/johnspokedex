import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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

  const getEntry = (url: string) => {
    let matches = url.match(/\d+/g);
    if (matches) {
      return matches[1];
    }
  };

  return (
    <div className="grid w-full items-center gap-1.5 overflow-auto ">
      <div className="sticky top-0 z-10 bg-sky-600 dark:bg-black flex flex-col items-center p-4 w-auto">
        <Label htmlFor="search" className="mb-2">
          Search
        </Label>
        <Input
          type="search"
          id="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <ul className="flex flex-col items-center justify-center relative top-0">
        {pokemon?.length ? (
          pokemon.map((pokemon: any, index: number) => (
            <li
              key={index}
              className="flex text-center justify-between px-10 transform border-2 border-black dark:border-white shadow-sm w-1/2 mb-1 bg-slate-700 text-white text-base hover:text-yellow-300 transition duration-300 ease-in-out hover:scale-105 hover:underline hover:border-double"
            >
              <p className="text-[10px]"> {pokemon.name}</p>
              <p className="text-[10px]">{getEntry(pokemon.url)}</p>
            </li>
          ))
        ) : (
          <p className="text-white">No pokemon found</p>
        )}
      </ul>
    </div>
  );
}
