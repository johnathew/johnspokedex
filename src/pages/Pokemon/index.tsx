import { Loading } from "@/components/Loading";

import { getInfinitePokemon, setTypeColor, concatZeros } from "@/utils";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import PokemonCard from "@/components/PokemonCard";

const Pokemon = () => {
  const typeStyles = {
    borderRadius: "4px",
    padding: "5px",
    dropShadow: "2px 2px 2px black",
    width: "100px",
    height: "auto",
    border: "0.5px solid gray",
  };

  const { status, data, isFetchingNextPage, fetchNextPage, error } =
    useInfiniteQuery({
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
      <div className="w-auto grid h-auto md:grid-cols-3 mt-14 md:p-8 md:mt-16 gap-8 grid-cols-1 bg-sky-700 dark:bg-slate-800">
        {pokemonItems?.map((pokemon, index) => {
          if (index === pokemonItems.length - 1)
            return (
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
            );
          return (
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
          );
        })}
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage
            ? "Loading more..."
            : (data?.pages.length ?? 0) < 100
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
    </>
  );
};

export default Pokemon;
