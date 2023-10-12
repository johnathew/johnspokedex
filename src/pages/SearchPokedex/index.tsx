import { fetchAllPokemon } from "@/utils/fetchAllPokemon";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Fallback from "@/components/Fallback";
import { queryClient } from "@/App";
import { PokeState } from "@/types/pokemonActionTypes";

export const loader = async () => {
  return defer({
    query: queryClient.fetchQuery({
      queryKey: ["allPokemon"],
      queryFn: async ({ signal }: { signal: AbortSignal }) =>
        fetchAllPokemon({ signal }),
    }),
  });
};
export default function SearchPokedex() {
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
