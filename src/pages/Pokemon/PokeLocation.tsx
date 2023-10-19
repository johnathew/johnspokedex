import { queryClient } from "@/App";
import { Loading } from "@/components/Loading";
import { SpeciesInfoTypes } from "@/types/pokemonActionTypes";
import { fetchPokemonLocations } from "@/utils";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { TbPokeballOff } from "react-icons/tb";

const locationQuery = (id: number | string) => ({
  queryKey: ["location", id],
  queryFn: () => fetchPokemonLocations(id),
});

export function loader() {
  return async ({ params }: { params: { id: string | number } }) => {
    const query = locationQuery(params.id);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery({
        ...query,
      }))
    );
  };
}

const PokeLocation = () => {
  const params = useParams();
  const { data } = useQuery(locationQuery(params.id!)) as UseQueryResult<
    SpeciesInfoTypes[]
  >;

  let slicedData = data?.slice(0, 2);
  let content = data ? (
    <section className="text-xs md:text-base w-auto md:w-1/2 p-2 h-auto md:h-1/4 flex flex-col items-center text-black dark:text-slate-200  bg-slate-200 dark:bg-slate-900 bg-opacity-50 rounded-md border-2 border-black dark:border-yellow-500 shadow-md">
      {data.length === 0 ? (
        <div className=" w-full h-full text-[10px] md:text-base p-2 overflow-auto bg-slate-200 bg-opacity-50 dark:bg-slate-950 rounded-md flex items-center justify-center">
          <p className="flex flex-col items-center dark:text-yellow-500">
            No locations found {":("} <TbPokeballOff className="text-4xl" />
          </p>
        </div>
      ) : (
        <ul className=" w-full h-full text-[10px] p-2 md:text-base overflow-auto bg-slate-200 bg-opacity-50 dark:bg-slate-950 rounded-md flex flex-col items-center justify-center">
          {slicedData?.map((area, i) => (
            <div key={i} className="border-b-2 w-full">
              <li>
                <span className="text-blue-700 dark:text-yellow-300">
                  Game Version:{" "}
                </span>
                {area.version_details[i].version.name}
              </li>
              <li>
                {" "}
                <span className="text-blue-700 dark:text-yellow-300">
                  Area:{" "}
                </span>{" "}
                {area.location_area.name}{" "}
              </li>{" "}
              <li>
                <span className="text-blue-700 dark:text-yellow-300">
                  {" "}
                  Encounter Method:{" "}
                </span>
                {area.version_details[i].encounter_details[i]?.method?.name ||
                  "None"}
              </li>
              <li>
                <span className="text-blue-700 dark:text-yellow-300">
                  Chance:
                </span>{" "}
                {area.version_details[i].encounter_details[i]?.chance || 0}%{" "}
              </li>
            </div>
          ))}{" "}
        </ul>
      )}{" "}
    </section>
  ) : (
    <Loading />
  );

  return <>{content}</>;
};

export default PokeLocation;
