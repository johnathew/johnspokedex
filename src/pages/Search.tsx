import { Loading } from "@/components/Loading";
import SearchPokedex from "@/components/SearchPokedex";
import { fetchAllPokemon } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["allPokemon"],
    queryFn: fetchAllPokemon,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24 * 7,
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return <SearchPokedex data={data} />;
};

export default Search;

// export const loader = async () => {
//   try {
//     const data = queryClient.fetchQuery({
//       queryKey: ["allPokemon"],
//       queryFn: fetchAllPokemon,

//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
//   return { data: [] };
// };
