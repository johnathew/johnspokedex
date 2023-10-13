import { fetchAllPokemon } from "@/utils/fetchAllPokemon";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Fallback from "@/components/Fallback";
import { queryClient } from "@/App";
import { PokeState } from "@/types/pokemonActionTypes";
import { memo } from "react";
function SearchPokedex() {
  const loaderData = useLoaderData();

  return (
    <Suspense fallback={<Fallback />}>
      <Await resolve={(loaderData as PokeState).query}>
        {(data) => {
          return <DataTable columns={columns} data={data} />;
        }}
      </Await>
    </Suspense>
  );
}

export const loader = () => {
  return defer({
    query: queryClient.ensureQueryData({
      queryKey: ["allPokemon"],
      queryFn: ({ signal }: { signal: AbortSignal }) =>
        fetchAllPokemon({ signal }),
    }),
  });
};

export default memo(SearchPokedex);
