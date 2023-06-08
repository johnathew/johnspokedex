import React, { useReducer, useState } from "react";
import { ACTION_TYPES, PokemonTypes } from "./pokemonActionTypes";
import { INITIAL_STATE, pokemonReducer } from "./PokemonContext";
import { PokemonContext } from "./PokemonContext";
import PokemonDetails from "./PokemonDetails";
import { Loading } from "./components/Loading";

const Pokemon = () => {
  // dispatch allows us to send actions to the reducer
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);
  const [pokedexVal, setPokedexVal] = useState<number>(1);

  const { loading } = state;

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
      <section className="bg-[url('/pokedex.svg')] text-white h-screen bg-contain md:h-screen w-full relative bg-no-repeat">
        <div className="top-0 left-0 w-full h-full flex flex-col">
          <div className="w-1/4 h-1/2 text-xs md:items-center flex flex-col rounded-md absolute md:w-[29%] md:h-1/5 md:mt-[230px] md:ml-[120px]" >
            <p className="font-semibold mr-4 md:w-4/5 text-md pt-3 pr-2 border-b-2">
              Name:{" "}
              <span className="text-yellow-400">
                {state?.pokemon?.name?.charAt(0).toUpperCase() +
                  state?.pokemon?.name?.slice(1)}
              </span>
            </p>
            {loading && <Loading />}
            {!loading && (
              <div className="flex p-2 flex-col absolute mt-10 mr-20">
                <img
                  src={state.pokemon?.sprites?.front_default}
                  className="drop-shadow-2xl h-auto w-36 ml-10 -skew-x-2"
                  placeholder="blur"
                />
                <div className="flex absolute mt-28 w-aut0">
                  <div className="text-xs">
                    <h2 className="border-b font-bold ml-7">Type(s)</h2>
                    <ul className="flex gap-2 text-white">
                      {state.pokemon.types?.map(
                        (type: PokemonTypes, index: number) => {
                          return (
                            <p
                              key={index}
                              className={`shadow p-2 ${
                                type.type?.name === "fire" && "bg-red-600"
                              }
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
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-10 md:ml-[150px] sm:mt-[582px] flex flex-col md:h-12 md:w-28 absolute  border-black rounded-lg">
            <p className="text-[8px] text-black font-bold tracking-wider">
              Pokedex value
            </p>
            <div className="w-auto p-2 -mt-2 justify-center align-middle">
              <form onSubmit={handlefetch}>
                <input
                  type="number"
                  placeholder="Enter a pokedex value"
                  value={pokedexVal}
                  min="0"
                  max="1010"
                  onChange={(event) =>
                    setPokedexVal(parseInt(event.target.value))
                  }
                  className="border-2 rounded-md w-20 p-1 mb-[9px] bg-red-600 text-white drop-shadow-sm bg-opacity-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button className="bg-yellow-100 mt-1.5 ml-1 hover:bg-yellow-300 active:inset-10 shadow text-black text-[7px] w-24 h-4 align-middle border-2 border-black font-light rounded-md">
                  Search
                </button>
              </form>
            </div>
          </div>
          <PokemonDetails />
        </div>
      </section>
    </PokemonContext.Provider>
  );
};

export default Pokemon;

//       <div className="bg-[url('/pokedex.svg')] container md:w-screen md:h-screen bg-contain h-full md:bg-center w-full bg-no-repeat relative flex">
