import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import { fetchPokemon } from "../../utils";
import { Link } from "react-router-dom";

const Pokemon = () => {
  // query key: ["pokemon", pokedexVal] is a unique identifier for the query
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });

  let content;

  if (isPending) {
    content = <Loading />;
  }

  if (isError) {
    content = <div>{error.message}</div>;
  }

  if (data) {
    content = (
      <ul>
        {data.map((pokemon: any, index: number) => (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
            <li className="border-2 border-black dark:border-white shadow-sm w-auto px-20 mb-1 bg-slate-700 text-white text-base hover:text-yellow-300 p-2">{pokemon.name}</li>
          </Link>
        ))}
      </ul>
    );
  }

  return (
    <section className="p-4 overflow-y-auto flex flex-col items-center align-middle mx-auto">
      <h2 className="text-base text-black dark:text-yellow-300">Pokemon</h2>
      <div className="h-full w-full">{content}</div>
    </section>
  );
};
export default Pokemon;
