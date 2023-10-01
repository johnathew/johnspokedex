import { get } from "http";

export async function fetchPokemon({
  signal,
  pokemonTerm,
}: {
  signal: AbortSignal;
  pokemonTerm?: string;
}) {
  let url = `https://pokeapi.co/api/v2/pokemon/`;

  if (pokemonTerm) {
    url = `https://pokeapi.co/api/v2/pokemon/${pokemonTerm}`;
  }

  const res = await fetch(url, { signal: signal });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const data = await res.json();
  return data;
}

export async function fetchPokemonSpecies(pokeName: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`
  );

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const data = await res.json();
  return data;
}

export async function fetchAllPokemon({ signal }: { signal: AbortSignal }) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=130000", {
    signal: signal,
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const data = await res.json();
  return data;
}

export async function getInfinitePokemon({
  pageParam = 0,
}: {
  pageParam: number;
}) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageParam}`
  );

  const { results } = await res.json();

  const response = await Promise.all(
    results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  return response;
}

export function setTypeColor(type: string) {
  let typeColor = "";
  switch (type) {
    case "normal":
      typeColor = "bg-amber-600";
      break;
    case "fire":
      typeColor = "bg-red-600";
      break;
    case "water":
      typeColor = "bg-blue-700";
      break;
    case "grass":
      typeColor = "bg-green-500";
      break;
    case "electric":
      typeColor = "bg-yellow-500";
      break;
    case "ice":
      typeColor = "bg-blue-300";
      break;
    case "fighting":
      typeColor = "bg-red-900";
      break;
    case "poison":
      typeColor = "bg-purple-700";
      break;
    case "ground":
      typeColor = "bg-amber-800";
      break;
    case "flying":
      typeColor = "bg-purple-400";
      break;
    case "psychic":
      typeColor = "bg-pink-700";
      break;
    case "bug":
      typeColor = "bg-lime-500";
      break;
    case "rock":
      typeColor = "bg-amber-900";
      break;
    case "ghost":
      typeColor = "bg-purple-400";
      break;
    case "dark":
      typeColor = "bg-gray-900";
      break;
    case "dragon":
      typeColor = "bg-violet-900";
      break;
    case "steel":
      typeColor = "bg-gray-600";
      break;
    case "fairy":
      typeColor = "bg-pink-300";
      break;
    default:
      typeColor = "bg-amber-600";
  }

  return typeColor;
}


export const concatZeros = (num: number) => {
  if (num < 10) {
    return `00${num}`;
  } else if (num < 100) {
    return `0${num}`;
  } else {
    return num;
  }
};