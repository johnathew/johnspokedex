import { concatZeros, setTypeColor } from "@/utils";
import { IPokemon } from "../../types/pokemonActionTypes";

const Details = ({ data }: { data: IPokemon }) => {
  return (
    <div className="dark:text-white w-full h-full text-black flex justify-center items-center flex-col">
      <div className="flex w-1/2 h-auto justify-center items-center bg-slate-200 rounded-lg shadow-lg border-[1px] border-double border-black bg-opacity-50 dark:bg-black dark:border-white ">
        <div className="flex flex-col w-auto text-center">
          <img
            src={data.sprites.front_default}
            alt={data.name}
            className="md:w-36"
          />
          <p>
            {" "}
            <span className="dark:text-yellow-500 text-blue-700">No.</span>{" "}
            {concatZeros(data.id)}
          </p>
        </div>
        <div className="flex flex-col text-left border-b-4 border-black border-r-4 border-double p-2">
          <p className="text-base font-thin border-black">
            {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
          </p>
          <div className="flex justify-between mb-1">
            <span className="text-xs font-thin text-blue-700 dark:text-yellow-500">
              HP
            </span>
            <span className="text-xs font-medium">100%</span>
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
            <li>
              {" "}
              <span className="text-xs font-thin text-blue-700 dark:text-yellow-500">
                HT:{" "}
              </span>{" "}
              {data.height}"{" "}
            </li>
            <li>
              <span className="text-xs font-thin text-blue-700 dark:text-yellow-500">
                WT:{" "}
              </span>
              {data.weight} lbs.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Types</p>
        <ul className="flex">
          {data.types?.map((type: any) => (
            <li
              key={type.type.name}
              className={`shadow p-2 border-2 m-1 rounded-md mt-2 border-black ${setTypeColor(
                type.type.name
              )}`}
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
