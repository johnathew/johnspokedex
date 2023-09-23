export async function fetchPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const { results } = await res.json();
  return results;
}

export async function fetchPokemonDetails(pokemonName: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const data = await res.json();
  return data;
}
