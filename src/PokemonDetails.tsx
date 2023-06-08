import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { PokeContext } from "./pokemonActionTypes";
import { FaWeightHanging } from "react-icons/fa";
import { TfiRuler } from "react-icons/tfi";

import { useData } from "./hooks/useData";

const PokemonDetails = () => {
  const pokemonData: PokeContext = useContext(PokemonContext);
  const sample: any = useData(`${pokemonData?.pokemon.species?.url}`);

  return (
    <div className="w-[270px] flex h-[87px] absolute z-100 p-2  rounded-md overflow-auto items-center ml-[440px] mt-[282px]">
      <div className="flex flex-col space-y-2 border-r-2 w-1/5 pr-1">
        <div className="flex gap-x-1 justify-center items-center">
          <TfiRuler className="text-yellow-300 text-lg" />
          <p className="text-[9px]">{pokemonData.pokemon.height}"</p>
        </div>

        <div className="flex justify-center items-center">
          <FaWeightHanging className="text-yellow-300" />{" "}
          <p className="text-[8px]">{pokemonData.pokemon.weight} lbs.</p>
        </div>
      </div>
      <div className="w-full  h-auto  overflow-x-scroll ml-2 pt-3 ">
        <p className="text-[8px] leading-tight tracking-wider">
          {sample?.flavor_text}{" "}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetails;
