import { useContext, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { PokeContext } from "./pokemonActionTypes";
import axios from "axios";

const PokemonDetails = () => {
  const [flavorText, setFlavorText] = useState<string>("");

  const pokemonData: PokeContext = useContext(PokemonContext);

  if (pokemonData.pokemon.species?.url.length > 1) {
    axios.get(`${pokemonData.pokemon.species?.url}`).then((res) => setFlavorText(res.data.flavor_text_entries[0].flavor_text));
  }

  return (
    <div>
      <p>Height: {pokemonData.pokemon.height}"</p>
      <p>Weight: {pokemonData.pokemon.weight} lbs.</p>
      <p>{flavorText} </p>
    </div>
  );
};

export default PokemonDetails;
