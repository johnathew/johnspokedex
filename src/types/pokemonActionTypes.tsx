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
export interface SpeciesInfoTypes {
  base_happiness:         number;
  capture_rate:           number;
  color:                  Color;
  egg_groups:             Color[];
  evolution_chain:        EvolutionChain;
  evolves_from_species:   Color;
  flavor_text_entries:    FlavorTextEntry[];
  form_descriptions:      any[];
  forms_switchable:       boolean;
  gender_rate:            number;
  genera:                 Genus[];
  generation:             Color;
  growth_rate:            Color;
  habitat:                Color | null;
  has_gender_differences: boolean;
  hatch_counter:          number;
  id:                     number;
  is_baby:                boolean;
  is_legendary:           boolean;
  is_mythical:            boolean;
  name:                   string;
  names:                  Name[];
  order:                  number;
  pal_park_encounters:    PalParkEncounter[];
  pokedex_numbers:        PokedexNumber[];
  shape:                  Color;
  varieties:              Variety[];
}

export interface Color {
  name: string;
  url:  string;
}

export interface EvolutionChain {
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language:    Color;
  version:     Color;
}

export interface Genus {
  genus:    string;
  language: Color;
}

export interface Name {
  language: Color;
  name:     string;
}

export interface PalParkEncounter {
  area:       Color;
  base_score: number;
  rate:       number;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex:      Color;
}

export interface Variety {
  is_default: boolean;
  pokemon:    Color;
}
