import { PokemonTypes } from "@/types/pokemonActionTypes";

const PokemonCard = ({ name, pokeSprite, type, altRef, pokedexId }: any) => {
  return (
    <div className="flex flex-col items-center">
      <div
        ref={altRef}
        className="border-[1px] w-1/2 border-cyan-400 m-5 bg-opacity-75 rounded-md p-4 bg-slate-900  delay-75 md:w-3/4 md:h-auto flex flex-col items-center transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-75"
      >
        <img
          src={pokeSprite}
          className="drop-shadow-2xl md:w-40 md:h-auto w-32 h-auto"
          placeholder="blur"
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-gray-300">
          {name} <span className="opacity-90 text-[10px]">{pokedexId}</span>
        </p>

        <div className="text-xs md:w-full flex justify-center">
          <ul className=" text-white text-[8px] flex gap-2">
            {type}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
