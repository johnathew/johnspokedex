import React, { useReducer, useState } from "react";
import {
  ACTION_TYPES,
  IPokemon,
  PokemonType,
  PokemonTypes,
} from "./pokemonActionTypes";
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
    <div className="flex flex-col  items-center text-black h-full dark:text-white dark:bg-slate-800 bg-gray-50 w-full">
      <h2>Enter a pokedex value below</h2>
      <form onSubmit={handlefetch}>
        <input
          type="number"
          placeholder="Enter a pokedex value"
          value={pokedexVal}
          min="1"
          max="1010"
          onChange={(event) => setPokedexVal(+event.target.value)}
          className="border w-16 text-black"
        />
        <button className="bg-black text-yellow-100 font-light rounded-md p-1">
          Click me for Pokemon
        </button>
      </form>
      <div className="w-full flex h-1/5 items-center flex-col p">
        <p className="font-semibold text-2xl">Name: {state.pokemon.name}</p>
        <img
          src={state.pokemon?.sprites?.front_default}
          className="w-40 h-auto drop-shadow-2xl"
        />
      </div>
      <h2 className="border-b font-bold text-lg">Type(s)</h2>
      <ul className="flex gap-2">
        {state.pokemon.types?.map((type: PokemonTypes, index: number) => {
          return (
            <p
              key={index}
              className={`${type.type?.name === "fire" && "bg-red-600"}
              ${type.type?.name === "grass" && "bg-green-500"}
              ${type.type?.name === "poison" && "bg-purple-700"}
              ${type.type?.name === "water" && "bg-blue-700"}
              ${type.type?.name === "bug" && "bg-lime-500"}
              ${type.type?.name === "normal" && "bg-amber-600"}
              ${type.type?.name === "electric" && "bg-yellow-500"}
              ${type.type?.name === "ground" && "bg-amber-800"}
              ${type.type?.name === "ice" && "bg-blue-300"}
              ${type.type?.name === "ghost" && "bg-purple-400"}
              ${type.type?.name === "dark" && "bg-gray-900"}
              ${type.type?.name === "rock" && "bg-amber-900"}
              ${type.type?.name === "psychic" && "bg-pink-700"}
              ${type.type?.name === "dragon" && "bg-violet-900"}
              ${type.type?.name === "fighting" && "bg-red-900"}
              ${type.type?.name === "fairy" && "bg-pink-300"}
              ${type.type?.name === "steel" && "bg-gray-600"}
              ${
                type.type?.name === "flying" && "bg-purple-400"
              } rounded-md p-2 mt-2`}
            >
              {type?.type?.name}
            </p>
          );
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
