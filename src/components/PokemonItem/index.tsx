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
