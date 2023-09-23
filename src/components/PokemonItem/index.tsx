
const PokemonItem = () => {



  return;

  // return (
  //   <div className="w-1/4 h-1/2 text-xs md:items-center flex flex-col rounded-md md:absolute md:w-[29%]  md:h-1/5 md:mt-[21rem] md:ml-44">
  //     <p className="font-semibold mr-4 md:w-4/5 text-md border-b-2">
  //       Name:{" "}
  //       <span className="text-yellow-400">
  //         {state?.pokemon?.name?.charAt(0).toUpperCase() +
  //           state?.pokemon?.name?.slice(1)}
  //       </span>
  //     </p>
  //     {loading && <Loading />}
  //     {!loading && (
  //       <div className="flex flex-col absolute mt-8 mr-20 justify-center items-center">
  //         <img
  //           src={state.pokemon?.sprites?.front_default}
  //           className="drop-shadow-2xl h-auto w-36 ml-10 -skew-x-2"
  //           placeholder="blur"
  //         />
  //         <div className="flex absolute mt-[170px] ml-10 w-auto">
  //           <div className="text-xs">
  //             <h2 className="border-b font-bold ml-7">Type(s)</h2>
  //             <ul className="flex gap-2 text-white">
  //               {state.pokemon.types?.map(
  //                 (type: PokemonTypes, index: number) => {
  //                   return (
  //                     <p
  //                       key={index}
  //                       className={`shadow p-2 ${
  //                         type.type?.name === "fire" && "bg-red-600"
  //                       }
  //   ${type.type?.name === "grass" && "bg-green-500"}
  //   ${type.type?.name === "poison" && "bg-purple-700"}
  //   ${type.type?.name === "water" && "bg-blue-700"}
  //   ${type.type?.name === "bug" && "bg-lime-500"}
  //   ${type.type?.name === "normal" && "bg-amber-600"}
  //   ${type.type?.name === "electric" && "bg-yellow-500"}
  //   ${type.type?.name === "ground" && "bg-amber-800"}
  //   ${type.type?.name === "ice" && "bg-blue-300"}
  //   ${type.type?.name === "ghost" && "bg-purple-400"}
  //   ${type.type?.name === "dark" && "bg-gray-900"}
  //   ${type.type?.name === "rock" && "bg-amber-900"}
  //   ${type.type?.name === "psychic" && "bg-pink-700"}
  //   ${type.type?.name === "dragon" && "bg-violet-900"}
  //   ${type.type?.name === "fighting" && "bg-red-900"}
  //   ${type.type?.name === "fairy" && "bg-pink-300"}
  //   ${type.type?.name === "steel" && "bg-gray-600"}
  //   ${type.type?.name === "flying" && "bg-purple-400"} rounded-md p-2 mt-2`}
  //                     >
  //                       {type?.type?.name}
  //                     </p>
  //                   );
  //                 }
  //               )}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default PokemonItem;
