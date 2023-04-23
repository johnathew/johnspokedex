import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

type PokeResults = {
  results: {
    name: string;
    url: string;
  }[];
};

const fetchPokemon = async (): Promise<AxiosResponse<PokeResults>> => {
    const result = await axios.get(import.meta.env.VITE_POKEMON_API)
    return result
  };

const PokeQuery = () => {

  const { isFetching, data, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
    refetchOnWindowFocus: false
  });

  if (isFetching) return <span>Loading...</span>;

  if (error instanceof Error) return <span>Error: {error.message}</span>;

  return (
    <div className="h-screen">
        <ul>
            {data?.data.results.map((poke) => { 
                return (  
                <Link to={`/PokemonDetails/${poke.name}`} key={poke.name}><li>{poke.name}</li></Link>)
          })}
        </ul>
    </div>
  );
};

export default PokeQuery;


