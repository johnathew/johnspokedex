import { JSXElementConstructor, useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { PokeContext } from "./pokemonActionTypes";
import axios from "axios";
import { useData } from "./hooks/useData";

const PokemonDetails = () => {
  // const [flavorText, setFlavorText] = useState<string[]>("");

  const pokemonData: PokeContext = useContext(PokemonContext);

  const sample: any = useData(`${pokemonData.pokemon.species?.url}`)


  return (
    <div>
      <p>Height: {pokemonData.pokemon.height}"</p>
      <p>Weight: {pokemonData.pokemon.weight} lbs.</p>
      <p>{sample?.flavor_text} </p>
    </div>
  );
};

export default PokemonDetails;




// if (pokemonData.pokemon.species?.url.length > 1) {
//   const test = axios
//     .get()
//     .then((res) => {
//       return res.data.flavor_text_entries.find(
//         (lang) => lang.language.name === "en"
//       );
//     })
//     .catch((error) => console.log(error));
//     return console.log(test)
// }