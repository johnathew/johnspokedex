import { concatZeros } from "@/utils/concatZeros";
import { setTypeColor } from "@/utils/setTypeColor";
import { IPokemon } from "../../types/pokemonActionTypes";
import { AiFillQuestionCircle } from "react-icons/ai";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useQueries } from "@tanstack/react-query";
import { fetchPokemonAbility } from "@/utils";

const Details = ({ data }: { data: IPokemon }) => {
  const ability = data.abilities.map((ability) => ability.ability.name);

  const abilityQueries = useQueries({
    queries: ability.map((ability) => {
      return {
        queryKey: ["ability", ability],
        queryFn: () => fetchPokemonAbility(ability),
      };
    }),
  });

  const abilityArray = abilityQueries.map((ability) => ability.data);

  const enAbilities = abilityArray.map((ability) => {
    return { ...ability, effect_entries: ability?.effect_entries[1] };
  });

  return (
    <div className="dark:text-white flex-shrink-0 w-auto md:w-full h-auto pt-2 text-black flex justify-center items-center flex-col mb-5">
      <div className="flex max-w-fit h-auto md:w-full justify-center  dark:bg-slate-900 items-center bg-slate-200 rounded-md shadow-lg border-[2px] border-black bg-opacity-50 dark:border-yellow-300">
        <section
          className="flex flex-col w-auto text-center text-xs md:text-xl"
          id="pokemonImage"
        >
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            className="md:w-56 w-36 h-auto md:h-auto"
          />
          <p>
            {" "}
            <span className="dark:text-yellow-300 text-blue-700 ">
              No.
            </span>{" "}
            {concatZeros(data.id)}
          </p>
        </section>
        <section
          className="flex flex-col text-left border-b-4 border-black border-r-4 border-double m-2 items-center p-4 dark:border-yellow-300 rounded-2xl shadow-xl"
          id="main-info"
        >
          <p className="md:text-base font-normal tracking-wide text-[10px]">
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </p>
          <div className="flex justify-between mb-1">
            <span className="text-xs text-blue-700 dark:text-yellow-300">
              HP
            </span>
            <span className="text-[10px] ml-2">100%</span>
          </div>
          <div className="w-full rounded-full h-auto">
            <div
              className="bg-green-600 h-2.5 rounded-full border-2 border-black"
              style={{ width: "100%" }}
            ></div>
            <p className="m-0.5 text-[10px] ml-2 md:text-base text-center">
              {data.stats[0].base_stat} / {data.stats[0].base_stat}{" "}
            </p>
          </div>
          <ul className="text-xs md:text-base text-left w-full">
            <li>
              <span className="text-blue-700 dark:text-yellow-300">HT:</span>{" "}
              <span className="text-[10px] md:text-sm">{data.height}" </span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-700 dark:text-yellow-300">WT: </span>
              <span className="text-[10px] ml-0.5 md:text-sm">
                {" "}
                {data.weight} lbs.
              </span>
            </li>
          </ul>
        </section>
      </div>
      <div className="w-4/5 rounded-md text-slate-200 flex justify-center items-center pt-2">
        <section
          className="flex items-center justify-center flex-col text-xs md:w-full"
          id="types"
        >
          <label className="md:text-base dark:text-yellow-300 underline md:underline-offset-4 underline-offset-2">
            {data.types?.length! > 1 ? "Types" : "Type"}{" "}
          </label>
          <ul className="flex">
            {data.types?.map((type: any) => (
              <li
                key={type.type.name}
                className={`px-2 border-[1px] text-[11px] md:text-sm m-1 rounded-md mt-2 border-slate-200 ${setTypeColor(
                  type.type.name
                )}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </section>
        <section
          className="flex items-center justify-center flex-col text-xs md:w-3/4 h-auto md:ml-10"
          id="abilities"
        >
          <label className="md:text-base dark:text-yellow-300 underline md:underline-offset-4 underline-offset-2">
            Abilities
          </label>
          <ul className="flex justify-center items-center">
            {data.abilities.map((ability: any, i) => (
              <li
                className=" md:text-sm text-[11px] justify-start tracking-tight md:tracking-normal rounded-md items-center flex border-slate-200"
                key={ability.ability.name}
              >
                {ability.ability.name}{" "}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <button type="button">
                      {" "}
                      <AiFillQuestionCircle className="md:text-xl text-lg m-1 " />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 max-h-64 bg-slate-300  overflow-y-auto">
                    <div className="text-xs md:text-sm w-full">
                      <span className="dark:text-yellow-300 font-bold">
                        {ability.ability.name}
                      </span>
                      {": "} {enAbilities[i].effect_entries?.effect}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Details;
