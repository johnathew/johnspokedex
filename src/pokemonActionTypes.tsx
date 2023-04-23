export const enum ACTION_TYPES {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
}

export interface PokemonReducer {
  type: ACTION_TYPES;
  payload?: PokeContext;
}

export interface PokeContext {
  pokemon: IPokemon;
}

export interface IPokemon {
  name: string;
  height: number;
  weight: number;
  species: {
    name: string;
    url: string;
  };
  base_experience: number;
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
