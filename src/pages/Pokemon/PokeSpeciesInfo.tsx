import { Loading } from "@/components/Loading";
import { fetchPokemonSpecies } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const PokeSpeciesInfo = () => {
  const pokemonName = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["speciesInfo", pokemonName.id],
    queryFn: () => fetchPokemonSpecies(pokemonName.id!),
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
      <div className="p-10 mt-0 flex flex-col items-center">
        <h2 className="text-base text-black dark:text-yellow-300">
          Species Info
        </h2>
        <div>
          <p> <span className="text-xs">Base Happiness: </span>{data.base_happiness}</p>
          <p><span className="text-xs">Capture Rate: </span>{data.capture_rate}%</p>
          <p><span className="text-xs">Color: </span>{data.color.name}</p>
          <p>
            Egg Groups: {data.egg_groups.map((egg: any) => egg.name).join(", ")}
          </p>
          <p>
            Evolves from:{" "}
            {data.evolves_from_species?.name?.length > 0
              ? data.evolves_from_species.name
              : "n/a"}
          </p>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};
export default PokeSpeciesInfo;
