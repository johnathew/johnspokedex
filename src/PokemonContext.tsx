import { createContext, useReducer } from "react";
import {
    ACTION_TYPES,
    IPokemon,
    PokeContext,
    PokemonReducer,
  } from "./pokemonActionTypes";
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
        url: ""
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
export const PokemonContext = createContext<PokeContext>(INITIAL_STATE);
export const PokemonDispatchContext = createContext(null);


//todo: fix the 'any' type from the pokemonReducer function
export const pokemonReducer = (
  state: IPokemon,
  action: PokemonReducer
): any => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        error: false,
        pokemon: { ...state },
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        loading: false,
        error: false,
        pokemon: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        loading: false,
        error: true,
        pokemon: { name: "" },
      };
    default:
      return state;
  }
};

// export const PokemonProvider = ({children}) => {
//     const [pokemon, dispatch] = useReducer(pokemonReducer, INITIAL_STATE)

//     return (
//         <PokemonContext.Provider value={pokemon}>
//             <PokemonDispatchContext.Provider value={dispatch}>
//                 {children}
//             </PokemonDispatchContext.Provider>
//         </PokemonContext.Provider>
//     )
// }
