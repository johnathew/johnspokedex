export async function fetchPokemon({
  id,
}: {
  id?: string | number | undefined;
}) {
  let url = `https://pokeapi.co/api/v2/pokemon/`;

  if (id) {
    url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }

  const data = await res.json();
  return data;
}

export async function fetchPokemonSpecies(pokeID: string | number) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokeID}`
  );

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const data = await res.json();
  return data;
}

export async function fetchPokemonLocations(pokeID: string | number) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokeID}/encounters`
  );

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const data = await res.json();
  return data;
}


export async function fetchPokemonAbility(ability: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }
  const data = await res.json();
  return data;
}

