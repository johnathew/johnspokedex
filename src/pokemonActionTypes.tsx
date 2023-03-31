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
  types?: PokemonTypes[];
}

export interface PokemonImg {
  front_default: string;
}

export interface PokemonTypes {
  type?: PokemonType;
}

export interface PokemonType {
  name?: string;
}
