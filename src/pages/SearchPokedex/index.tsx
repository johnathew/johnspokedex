import { fetchAllPokemon } from "@/utils/fetchAllPokemon";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Fallback from "@/components/Fallback";
import { queryClient } from "@/App";
import { PokeState } from "@/types/pokemonActionTypes";
import { memo } from "react";
import ScrollTopButton from "@/utils/scrollTopButton";
import ScrollBottomButton from "@/utils/scrollBottomButton";
import ScrollMidButton from "@/utils/scrollMidButton";


const allPokemonQuery = () => ({
  queryKey: ["allPokemon"],
  queryFn: async ({ signal }: { signal: AbortSignal }) =>
    await fetchAllPokemon({ signal }),
  Suspense: true,
});

export function loader() {
  const query = allPokemonQuery();
  return defer({
    query: queryClient.fetchQuery(query),
  });
}

function SearchPokedex() {
  const loaderData = useLoaderData();
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Await resolve={(loaderData as PokeState).query}>
          {(data) => {
            return <DataTable columns={columns} data={data} />;
          }}
        </Await>
      </Suspense>
      <ScrollTopButton />
      <ScrollMidButton />
      <ScrollBottomButton />
    </>
  );
}

export default memo(SearchPokedex);
