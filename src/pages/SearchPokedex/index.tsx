import { fetchAllPokemon } from "@/utils";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";

const fetchAllPokemonQuery = {
  queryKey: ["allPokemon"],
  queryFn: fetchAllPokemon,
};

export function loader(queryClient: any) {
  return async () => {
    const query = {
      queryKey: ["allPokemon"],
      queryFn: fetchAllPokemon,
    };

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery({
        ...query,
        staleTime: Infinity,
        gcTime: Infinity,
      }))
    );
  };
}

export default function SearchPokedex() {
  const { data, isPending} = useQuery(fetchAllPokemonQuery);

  if (isPending) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-sky-700 relative w-full h-screen overflow-y-scroll dark:bg-slate-800">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
