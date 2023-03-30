export const enum ACTION_TYPES {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
}

export interface PokemonReducer {
  type: ACTION_TYPES;
  payload?: IPokemon[];
}

export interface IPokemon {
  name: string;
  sprites: PokemonImg;
}

export interface PokemonImg {
  front_default: string;
}
