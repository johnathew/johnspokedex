import { IPokemon } from "../../types/pokemonActionTypes";
const Details = ({ data }: { data: IPokemon }) => {
  return (
    <div className="bg-red-200 w-full h-full text-black flex justify-center items-center flex-col">
      <div className="flex w-1/2 h-auto justify-center items-center bg-blue-200">
        <div className="flex flex-col w-auto text-center">
          <img src={data.sprites.front_default} alt={data.name} />
          <p>No. {data.id}</p>
        </div>
        <div className="flex flex-col text-left border-b-4 border-black border-r-4 border-double p-2">
          <p className="text-base font-thin border-black">
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </p>
          <div className="flex justify-between mb-1">
            <span className="text-xs font-thin text-blue-700 dark:text-black">
              HP
            </span>
            <span className="text-xs font-medium text-blue-700 dark:text-black">
              100%
            </span>
          </div>
          <div className="w-full rounded-full h-auto">
            <div
              className="bg-green-600 h-2.5 rounded-full border-2 border-black"
              style={{ width: "100%" }}
            ></div>
            <p className="m-2">
              {data.stats[0].base_stat} / {data.stats[0].base_stat}{" "}
            </p>
          </div>
          <ul>
            <li>HT: {data.height}"</li>
            <li>WT: {data.weight} lbs.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Types</p>
        <ul className="flex">
          {data.types?.map((type: any) => (
            <li
              key={type.type.name}
              className={`shadow p-2 border-2 m-1 border-black ${
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
${type.type?.name === "flying" && "bg-purple-400"} rounded-md p-2 mt-2`}
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Abilities</p>
        <ul>
          {data.abilities.map((ability: any) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;

// const pokemonData: PokeContext = useContext(PokemonContext);
// const sample: any = useData(`${pokemonData?.pokemon.species?.url}`);

// return (
//   <div className="w-[265px] flex h-[83px] absolute z-100 rounded-md overflow-auto items-center ml-[410px] mt-[274px]">
//     <div className="flex flex-col space-y-2 border-r-2 w-1/5 ml-1">
//       <div className="flex gap-x-1 justify-center items-center">
//         <TfiRuler className="text-yellow-300 text-lg" />
//         <p className="text-[8px]">{pokemonData.pokemon.height}"</p>
//       </div>

//       <div className="flex justify-center items-center">
//         <FaWeightHanging className="text-yellow-300 text-lg" />{" "}
//         <p className="text-[8px]">{pokemonData.pokemon.weight} lbs.</p>
//       </div>
//     </div>
//     <div className="h-auto pb-6 mt-5 ml-1">
//       <p className="text-[7px] leading-tight tracking-wide">
//         {sample?.flavor_text}{" "}
//       </p>
//     </div>
//   </div>
// );
