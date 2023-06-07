import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { PokeContext } from "./pokemonActionTypes";
import { FaWeightHanging } from "react-icons/fa";
import {TfiRuler} from "react-icons/tfi"

import { useData } from "./hooks/useData";

const PokemonDetails = () => {
  const pokemonData: PokeContext = useContext(PokemonContext);
  const sample: any = useData(`${pokemonData?.pokemon.species?.url}`);

  return (
    <div className="w-[270px] flex h-[87px] absolute z-100 bg-red-200 bg-opacity-5 rounded-md  items-center ml-[409px] overflow-y-auto mt-[265px]"> 
    <div className="flex flex-col space-y-2 ">  
      <div className="flex gap-x-2 justify-center items-center">
      <TfiRuler className="text-yellow-300 text-lg" />
      <p>{pokemonData.pokemon.height}"</p>
      </div>

      <div className="flex justify-center items-center">
        <FaWeightHanging className="text-yellow-300 text-xl ml-2" />{" "}
        <p>{pokemonData.pokemon.weight} lbs.</p>
      </div>
      </div>  
      <p className="text-[7px] w-full leading-tight tracking-wider ">{sample?.flavor_text} </p>
    </div>
  );
};

export default PokemonDetails;
