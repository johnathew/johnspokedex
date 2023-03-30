import React, { useReducer, useState } from "react";
import { ACTION_TYPES } from "./pokemonActionTypes";
import { INITIAL_STATE, pokemonReducer } from "./pokemonReducer";

const Pokemon = () => {
  // dispatch allows us to send actions to the reducer
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);
  const [pokedexVal, setPokedexVal] = useState<number>(1);

  const handlefetch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.FETCH_START });
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexVal}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center text-slate-50">
      <h1>Pokedex Search</h1>
      <h2>Enter a pokedex value below</h2>
      <form onSubmit={handlefetch}>
        <input
          type="number"
          placeholder="Enter a pokedex value"
          value={pokedexVal}
          min="0"
          max="1010"
          onChange={(event) => setPokedexVal(+event.target.value)}
          className="border w-12 text-black"
        />
        <button className="bg-black text-yellow-100 font-light rounded-md p-1">
          Click me for pokemon
        </button>
        <p>{state.pokemon.name}</p>
        <img
          src={state.pokemon?.sprites?.front_default}
          className="w-40 h-auto"
        />
      </form>
    </div>
  );
};

export default Pokemon;
