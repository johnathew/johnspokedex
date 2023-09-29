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

  const {results} = await res.json();

  return results;
}
