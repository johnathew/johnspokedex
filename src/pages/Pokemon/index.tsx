import { Loading } from "@/components/Loading";
import { getInfinitePokemon } from "@/utils/getInfinitPokemon";
import { setTypeColor } from "@/utils/setTypeColor";
import { concatZeros } from "@/utils/concatZeros";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import PokemonCard from "@/components/PokemonCard";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const Pokemon = () => {
  const typeStyles = {
    borderRadius: "4px",
    padding: "5px",
    boxShadow: "0.1px 0.1px 0.1px 1px gray",
    width: "100px",
    height: "auto",
    border: "2px solid black",
    fontSize: "0.8rem",
    display: "flex",
    justifyContent: "center",
  };

  const { status, data, fetchNextPage, error } = useInfiniteQuery({
    queryKey: ["paginatedPokemon"],
    queryFn: getInfinitePokemon,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, pageParams) => {
      if (lastPage.length < 20) return undefined;
      return pageParams + 20;
    },
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: Infinity,
  });

  const lastPostRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  const pokemonItems = data?.pages.flatMap((poke) => poke);

  return (
    <>
      <div className="bg-sky-700 w-full h-auto flex items-center justify-center dark:bg-slate-800">
        <Label className="text-white px-2 mt-8 md:mt-3">Search Pokemon</Label>
        <Input type="search" />
      </div>
      <div className="w-auto grid h-auto md:grid-cols-3 md:p-8 gap-8 grid-cols-1 bg-sky-700 dark:bg-slate-800">
        {pokemonItems?.map((pokemon, index) => {
          if (index === pokemonItems.length - 1)
            return (
              <React.Fragment key={pokemon.name}>
                <PokemonCard
                  name={
                    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                  }
                  key={pokemon.name}
                  altRef={ref}
                  pokeSprite={pokemon.sprites.front_default}
                  type={pokemon.types.map((type: any) => (
                    <li
                      style={typeStyles}
                      className={`${setTypeColor(type.type.name)}`}
                      key={type.type.name}
                    >
                      {type.type.name}
                    </li>
                  ))}
                  pokedexId={concatZeros(pokemon.id)}
                  alt={pokemon.name}
                />
              </React.Fragment>
            );
          return (
            <React.Fragment key={pokemon.name}>
              <PokemonCard
                name={
                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                }
                key={pokemon.name}
                altRef={null}
                pokeSprite={pokemon.sprites.front_default}
                type={pokemon.types.map((type: any) => (
                  <li
                    style={typeStyles}
                    className={`${setTypeColor(type.type.name)}`}
                    key={type.type.name}
                  >
                    {type.type.name}
                  </li>
                ))}
                pokedexId={concatZeros(pokemon.id)}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Pokemon;
