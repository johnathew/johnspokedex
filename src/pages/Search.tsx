import { Loading } from "@/components/Loading";
import SearchPokedex from "@/pages/SearchPokedex";
import { fetchAllPokemon } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  // const { data, isPending, isError, error } = useQuery({
  //   queryKey: ["allPokemon"],
  //   queryFn: fetchAllPokemon,
  //   staleTime: Infinity,
  //   gcTime: 1000 * 60 * 60 * 24 * 7,
  // });

  // if (isPending) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
      {/* <SearchPokedex data={data} /> */}
    </>
  );
};

export default Search;

