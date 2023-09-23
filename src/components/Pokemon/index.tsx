import { useReducer, useState } from "react";
import { pokemonReducer } from "../../store/PokemonProvider";
import { INITIAL_STATE } from "../../store/pokemon-context";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../../utils";
import { Loading } from "../Loading";
import PokemonItem from "../PokemonItem";

const Pokemon = () => {
  // dispatch allows us to send actions to the reducer
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);
  const [pokedexVal, setPokedexVal] = useState<number>(1);

  const { loading } = state;

return 
  //   return (
  //     <section className=" text-white h-screen bg-contain md:h-screen w-full md:relative bg-no-repeat md:container ">
  //       <div className="w-full h-full absolute">
  //         <div className="w-10 md:ml-52 md:bottom-0 md:mb-48 flex flex-col md:h-12 md:w-28 absolute  border-black rounded-lg">
  //           <p className="text-[8px] text-black font-bold tracking-wider border-b-2 border-black">
  //             Pokedex value
  //           </p>
  //           <div className="w-auto p-2 -mt-1.5 justify-center align-middle">
  //             <form onSubmit={handlefetch}>
  //               <input
  //                 type="number"
  //                 placeholder="Enter a pokedex value"
  //                 value={pokedexVal}
  //                 min="0"
  //                 max="1010"
  //                 onChange={(event) =>
  //                   setPokedexVal(parseInt(event.target.value))
  //                 }
  //                 className="border-2 rounded-md w-20 p-1.5 mb-[3.5px] bg-green-500 border-black text-black drop-shadow-sm bg-opacity-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none shadow-sm active:outline-none"
  //               />
  //               <button className="bg-yellow-100 hover:bg-yellow-300 active:inset-10 shadow text-black text-[7px] w-24 h-4 align-middle border-2 border-black font-light rounded-md">
  //                 Search
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //         <PokemonDetails />
  //       </div>
  //     </section>
  //   );
};

export default Pokemon;
