import { PokemonTypes } from "@/types/pokemonActionTypes";

const PokemonCard = ({ name, pokeSprite, type, altRef, pokedexId }: any) => {
  return (
    <div className="flex flex-col items-center p-2 rounded-lg">
      <div
        ref={altRef}
        className="border-[0.1px] w-52 border-cyan-400 m-5 bg-opacity-75 rounded-md p-10 bg-slate-900  delay-75 md:w-72 md:h-auto flex flex-col items-center transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-75  hover:shadow-xl"
      >
        <img
          src={pokeSprite}
          className="drop-shadow-2xl md:w-40 md:h-auto w-full h-auto border-2 border-cyan-200 shadow-inner bg-slate-200 rounded-md"
          placeholder="blur"
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-gray-100">
          {name} <span className="opacity-90 text-[9px]">{pokedexId}</span>
        </p>
        <div className="text-xs md:w-full flex justify-center">
          <ul className=" text-white text-[9px] flex gap-2 tracking-wide font-light">{type}</ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;


// transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-75