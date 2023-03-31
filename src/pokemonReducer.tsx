import { ACTION_TYPES, IPokemon, PokemonReducer } from "./pokemonActionTypes";

export const INITIAL_STATE = {
  loading: false,
  pokemon: {
    name: "",
    sprites: {
      front_default: "",
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
