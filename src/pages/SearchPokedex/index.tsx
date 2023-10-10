import { fetchAllPokemon } from "@/utils";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { defer, Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { PokeState } from "@/types/pokemonActionTypes";

const fetchAllPokemonQuery = {
  queryKey: ["allPokemon"],
  queryFn: ({ signal }: { signal: AbortSignal }) => fetchAllPokemon({ signal }),
};

export const loader = (queryClient: any) => () => {
  const queryPromise = queryClient.fetchQuery(fetchAllPokemonQuery);
  return defer({ queryPromise });
};

export default function SearchPokedex() {
  const loaderData = useLoaderData() as PokeState;

  const { data } = useQuery({
    queryKey: ["allPokemon"],
    queryFn: ({ signal }: { signal: AbortSignal }) =>
      fetchAllPokemon({ signal }),
  });

  return (
    <div className="bg-sky-700 relative w-full h-full overflow-auto dark:bg-slate-800">
      {data === undefined ? (
        <Suspense fallback={<p>Loading package location...</p>}>
          <Await resolve={loaderData}>
            {(data) => {
              return <DataTable columns={columns} data={data} />;
            }}
          </Await>
        </Suspense>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
