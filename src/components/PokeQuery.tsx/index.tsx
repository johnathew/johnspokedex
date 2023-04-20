import { useQuery } from "@tanstack/react-query";

type PokeResults = {
  results: {
    name: string;
    url: string;
  }[];
};

const PokeQuery = () => {
  const fetchPokemon = async (): Promise<PokeResults> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const pokeData = response.json();
    return pokeData;
  };

  const { isFetching, data, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });

  if (isFetching) return <span>Loading...</span>;

  if (error instanceof Error) return <span>Error: {error.message}</span>;

  return (
    <>
      <ul className="grid grid-cols-2 gap-y-2">
        {data?.results.map((poke, index) => {
          return (
            <>
              <li>{index + 1} Name: {poke.name} </li>
              <li>Info: {poke.url} </li>
            </>
          );
        })}
        <div className="flex bg-red-200">
        <button>Prev</button>
        <button>Next</button>
        </div>
      </ul>
    </>
  );
};

export default PokeQuery;
