import { fetchAllPokemon } from "@/utils";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";

export default function SearchPokedex() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allPokemon"],
    queryFn: fetchAllPokemon,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error: {error?.message}</h1>;

  return (
    <div className="bg-sky-700 w-full h-screen overflow-y-scroll">
      <DataTable columns={columns} data={data.results} />
    </div>
  );
}
