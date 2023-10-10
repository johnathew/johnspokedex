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

export interface PokeState {
  query: IPokemon[];
  loading: boolean;
  error: string;
}

export interface IPokemon {
  name: string;
  height: number;
  weight: number;
  id: number;
  species: {
    name: string;
    url: string;
  };
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number }[];
  base_experience: number;
  sprites: PokemonImg;
  types?: { type: { name: string } }[];
}

export interface PokemonImg {
  front_default: string;
  other: {
    ["official-artwork"]: {
      front_default: string;
    };
  };
}

export interface PokemonTypes {
  type?: PokemonType;
}

export interface PokemonType {
  name?: string;
}
