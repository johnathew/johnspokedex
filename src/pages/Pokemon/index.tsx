import { Loading } from "@/components/Loading";
import { getInfinitePokemon } from "@/utils";
import { useInfiniteQuery } from "@tanstack/react-query";

const Pokemon = () => {
  const { status, data, isFetching, isFetchingNextPage, fetchNextPage, error } =
    useInfiniteQuery({
      queryKey: ["paginatedPokemon"],
      queryFn: getInfinitePokemon,
      initialPageParam: 0,
      getNextPageParam: (lastPage,pages, pageParams) => {
        console.log(lastPage, "lastPage");
        console.log(pages, "pages");
        if (lastPage.length < 20) {
          return undefined;
        }
        return pageParams + 20;
      },
    });

  if (status === "pending") {
    return <Loading />;
  }

  return (
    <>
      <div>
        Pokemon infinite loading page
        {data?.pages.flat().map((pokemon) => {
          return <div key={pokemon.name}>{pokemon.name}</div>;
        })}
      </div>
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
          ? "Loading more..."
          : (data?.pages.length ?? 0) < 100
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </>
  );
};

export default Pokemon;
