export async function fetchAllPokemon({ signal }: { signal: AbortSignal }) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1292", {
    signal: signal,
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const { results } = await res.json();

  const response = await Promise.all(
    results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  return response;
}

