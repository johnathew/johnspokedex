import { useReducer } from "react";
import {
  ACTION_TYPES,
  IPokemon,
  PokemonReducer,
} from "../types/pokemonActionTypes";
import { INITIAL_STATE } from "./pokemon-context";
import PokemonContext from "./pokemon-context";

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

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pokemon, dispatchPokemon] = useReducer(pokemonReducer, INITIAL_STATE);

  const fetchPokemonHandler = async (pokedexVal: number) => {
    dispatchPokemon({ type: ACTION_TYPES.FETCH_START });
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexVal}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatchPokemon({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatchPokemon({ type: ACTION_TYPES.FETCH_ERROR });
        console.log(err);
      });
  };

  const pokemonContext = {
    pokemon: pokemon.pokemon,
    loading: pokemon.loading,
    error: pokemon.error,
    fetchPokemon: fetchPokemonHandler,
  };

  return (
    <PokemonContext.Provider value={pokemonContext}>
      {children}
    </PokemonContext.Provider>
  );
};
