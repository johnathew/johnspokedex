import { PokemonTypes } from "@/types/pokemonActionTypes";

const PokemonItem = ({ name, pokeSprite, type, altRef }: any) => {
  return (
    <div>
      <div
        ref={altRef}
        className="border-[1px] m-5 border-double bg-opacity-75 rounded-md p-4 bg-slate-900 delay-75 md:w-auto md:h-auto flex flex-col items-center transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-75"
      >
        <img
          src={pokeSprite}
          className="drop-shadow-2xl md:w-40 md:h-40 w-32 h-auto"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col ml-6 text-left">
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
