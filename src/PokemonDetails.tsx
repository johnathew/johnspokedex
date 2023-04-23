import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { PokeContext } from "./pokemonActionTypes";


const PokemonDetails = () => {

    const pokemonData:PokeContext = useContext(PokemonContext)

    

  return (
  <div>
    <p>Height: {pokemonData.pokemon.height}"</p>
    <p>Weight: {pokemonData.pokemon.weight} lbs.</p>
    <p>Pokemon lore: </p>
  
  
  </div>);
};

export default PokemonDetails;
