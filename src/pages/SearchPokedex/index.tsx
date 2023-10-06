import { fetchAllPokemon } from "@/utils";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "@/components/Loading";

export default function SearchPokedex() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allPokemon"],
    queryFn: fetchAllPokemon,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  if (isLoading)
    return (
      <h1>
        <Loading />
      </h1>
    );

  if (isError) return <h1>Error: {error?.message}</h1>;

  return (
    <div className="bg-sky-700 relative w-full h-screen overflow-y-scroll dark:bg-slate-800">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
