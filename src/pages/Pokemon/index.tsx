import { Loading } from "@/components/Loading";
import PokemonListItem from "@/components/PokemonListItem";
import { getInfinitePokemon } from "@/utils";
import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

const Pokemon = () => {
  const { status, data, isFetchingNextPage, fetchNextPage, error } =
    useInfiniteQuery({
      queryKey: ["paginatedPokemon"],
      queryFn: getInfinitePokemon,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, pageParams) => {
        if (lastPage.length < 20) {
          return undefined;
        }
        return pageParams + 20;
      },
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
    <div>
      Pokemon infinite loading page
      <ul className="list-disc h-screen">
        {pokemonItems?.map((pokemon, index) => {
          if (index === pokemonItems.length - 1)
            return (
              <PokemonListItem
                name={pokemon.name}
                key={pokemon.name}
                url={pokemon.url}
                index={index}
                altRef={ref}
              />
            );
          return (
            <PokemonListItem
              name={pokemon.name}
              key={pokemon.name}
              url={pokemon.url}
              index={index}
              altRef={null}
            />
          );
        })}
      </ul>
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
          ? "Loading more..."
          : (data?.pages.length ?? 0) < 100
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
};

export default Pokemon;
