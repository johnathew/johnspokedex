import React, { useReducer, useState } from "react";
import { ACTION_TYPES, IPokemon, PokemonTypes, } from "./pokemonActionTypes";
import { INITIAL_STATE, pokemonReducer } from "./PokemonContext";
import { PokemonContext } from "./PokemonContext";
import PokemonDetails from "./PokemonDetails";

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
    <PokemonContext.Provider value={state}>
      <div className="flex flex-col  items-center text-black h-screen dark:text-white dark:bg-slate-800 bg-gray-50 w-full p-10">
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
        <div className="w-full flex h-1/5 items-center flex-col">
          <p className="font-semibold text-2xl">
            Name:{" "}
            {state?.pokemon?.name?.charAt(0).toUpperCase() +
              state?.pokemon?.name?.slice(1)}
          </p>
          <div className="bg-gray-300 w-auto dark:border-white border-[15px] border-gray-800">
            <img
              src={state.pokemon?.sprites?.front_default}
              className="w-44 h-auto drop-shadow-2xl"
              placeholder="blur"
            />
          </div>
          <h2 className="border-b font-bold text-lg">Type(s)</h2>
          <ul className="flex gap-2 text-white">
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
          <PokemonDetails />
        </div>
      </div>
    </PokemonContext.Provider>
  );
};

export default Pokemon;
