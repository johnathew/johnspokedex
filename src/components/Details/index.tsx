import { concatZeros } from "@/utils/concatZeros";
import { setTypeColor } from "@/utils/setTypeColor";
import { IPokemon } from "../../types/pokemonActionTypes";
import { AiFillQuestionCircle } from "react-icons/ai";

const Details = ({ data }: { data: IPokemon }) => {
  return (
    <div className="dark:text-white flex-shrink-0 w-screen md:w-full h-auto pt-2 text-black flex justify-center items-center flex-col">
      <div className="flex w-full h-auto  md:w-full justify-center  dark:bg-slate-900 items-center bg-slate-200 rounded-md shadow-lg border-[2px] border-black bg-opacity-50 dark:border-yellow-300">
        <section
          className="flex flex-col w-auto text-center text-xs md:text-xl"
          id="pokemonImage"
        >
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            className="md:w-64 w-40 h-40 md:h-auto"
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
      <div className="w-3/4 p-2 rounded-md text-slate-200 md:w-1/2">
        <section className="flex items-center flex-col text-xs" id="types">
          <label className="md:text-xl dark:text-yellow-300 underline md:underline-offset-4 underline-offset-2">
            {data.types?.length! > 1 ? "Types" : "Type"}{" "}
          </label>
          <ul className="flex">
            {data.types?.map((type: any) => (
              <li
                key={type.type.name}
                className={`px-2 border-[1px] md:text-sm m-1 rounded-md mt-2 border-slate-200 ${setTypeColor(
                  type.type.name
                )}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </section>
        <section
          className="flex items-center justify-center flex-col text-xs"
          id="abilities"
        >
          <label className="md:text-xl  dark:text-yellow-300 underline md:underline-offset-4 underline-offset-2">
            Abilities
          </label>
          <ul className="flex gap-2 w-full justify-center">
            {data.abilities.map((ability: any) => (
              <li
                className="px-2 md:text-sm text-xs justify-start rounded-md items-center flex mt-2 border-slate-200"
                key={ability.ability.name}
              >
                {ability.ability.name}{" "}
                <AiFillQuestionCircle className="ml-1 md:text-xl text-lg " />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Details;
