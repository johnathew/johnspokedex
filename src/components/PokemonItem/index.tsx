import { PokemonTypes } from "@/types/pokemonActionTypes";

const PokemonItem = ({ name, pokeSprite, type, altRef }: any) => {
  return (
    <div>
      <div
        ref={altRef}
        className="border-[1px] m-2 border-double bg-opacity-75 rounded-md bg-slate-800 md:w-auto md:h-auto flex flex-col items-center"
      >
        <img
          src={pokeSprite}
          className="drop-shadow-2xl md:w-40 md:h-40 w-20 h-20"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col ml-4 text-left">
        <p className="mb-2">{name}</p>
        <div className="text-xs w-auto">
          <ul className="justify-start items-center text-white flex gap-2">
          {type}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;

// className={`${
//   typename === "fire" && "bg-red-600"
// }
// ${type.type?.name === "grass" && "bg-green-500"}
// ${type.type?.name === "poison" && "bg-purple-700"}
// ${type.type?.name === "water" && "bg-blue-700"}
// ${type.type?.name === "bug" && "bg-lime-500"}
// ${type.type?.name === "normal" && "bg-amber-600"}
// ${type.type?.name === "electric" && "bg-yellow-500"}
// ${type.type?.name === "ground" && "bg-amber-800"}
// ${type.type?.name === "ice" && "bg-blue-300"}
// ${type.type?.name === "ghost" && "bg-purple-400"}
// ${type.type?.name === "dark" && "bg-gray-900"}
// ${type.type?.name === "rock" && "bg-amber-900"}
// ${type.type?.name === "psychic" && "bg-pink-700"}
// ${type.type?.name === "dragon" && "bg-violet-900"}
// ${type.type?.name === "fighting" && "bg-red-900"}
// ${type.type?.name === "fairy" && "bg-pink-300"}
// ${type.type?.name === "steel" && "bg-gray-600"}
// ${type.type?.name === "flying" && "bg-purple-400"} rounded-md p-2 mt-2`}
