import { createContext } from "react";
import { PokeContext } from "../types/pokemonActionTypes";
export const INITIAL_STATE = {
    loading: false,
    pokemon: {
      name: "",
      height: 0,
      weight: 0,
      base_experience: 0,
      id: 0,
      sprites: {
        front_default: "",
      },
      species: {
        name: "",
        url: "",
      },
      types: [
        {
          type: {
            name: "",
          },
        },
        {
          type: {
            name: "",
          },
        },
      ],
    },
    error: false,
  };
const PokemonContext = createContext<PokeContext>(INITIAL_STATE);

export default PokemonContext;
  