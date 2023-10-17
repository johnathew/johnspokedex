import { queryClient } from "@/App";
import { SpeciesInfoTypes } from "@/types/pokemonActionTypes";
import { fetchPokemonSpecies } from "@/utils";
import { findFlavorText } from "@/utils/findFlavorText";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { MdOutlineCatchingPokemon } from "react-icons/md";

const speciesInfoQuery = (id: number | string) => ({
  queryKey: ["speciesInfo", id],
  queryFn: () => fetchPokemonSpecies(id),
});

export function loader() {
  return async ({ params }: { params: { id: string | number } }) => {
    const query = speciesInfoQuery(params.id);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery({
        ...query,
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: Infinity,
      }))
    );
  };
}

const PokeSpeciesInfo = () => {
  const pokemonName = useParams();

  const [gameVersion, setGameVersion] = useState("red");

  const { data } = useQuery(
    speciesInfoQuery(pokemonName.id!)
  ) as UseQueryResult<SpeciesInfoTypes>;

  let content = null;

  if (data) {
    const version = findFlavorText(data.flavor_text_entries);
    content = (
      <div className="p-10 mt-0 flex flex-col items-center text-slate-200">
        <div className="flex bg-red-200">
          <MdOutlineCatchingPokemon
            className="text-red-700 text-4xl active:scale-125"
            onClick={() => setGameVersion("red")}
          />
          <MdOutlineCatchingPokemon
            className="text-blue-700 text-4xl active:scale-125"
            onClick={() => setGameVersion("blue")}
          />
        </div>
        <h3>
          {gameVersion === "red"
            ? version[0].flavor_text
            : version[1].flavor_text}
        </h3>

        <p>
          {" "}
          <span className="text-xs">Base Happiness: </span>
          {data.base_happiness}
        </p>
        <p>
          <span className="text-xs">Capture Rate: </span>
          {data.capture_rate}%
        </p>
        <p>
          <span className="text-xs">Color: </span>
          {data.color.name}
        </p>
        <p>
          Egg Groups: {data.egg_groups.map((egg: any) => egg.name).join(", ")}
        </p>
        <p>
          Evolves from:{" "}
          {data.evolves_from_species?.name.length > 0
            ? data.evolves_from_species.name
            : "n/a"}
        </p>
      </div>
    );
  }
  return <>{content}</>;
};
export default PokeSpeciesInfo;
