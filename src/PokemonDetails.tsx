import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { PokeContext } from "./pokemonActionTypes";
import { FaWeightHanging } from "react-icons/fa";

import { useData } from "./hooks/useData";

const PokemonDetails = () => {
  const pokemonData: PokeContext = useContext(PokemonContext);
  const sample: any = useData(`${pokemonData?.pokemon.species?.url}`);

  return (
    <div>
      <div></div>
      <p>{pokemonData.pokemon.height}"</p>
      <div className="flex gap-x-2 justify-center items-center">
        {" "}
        <FaWeightHanging className="text-yellow-300" /> <p>{pokemonData.pokemon.weight} lbs.</p>
      </div>

      <p>{sample?.flavor_text} </p>
    </div>
  );
};

export default PokemonDetails;
