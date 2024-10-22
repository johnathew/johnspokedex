import { Link, useParams, NavLink, Outlet } from "react-router-dom";
import { fetchPokemon, fetchPokemonAbility } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import Details from "../../components/Details";
import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "@/App";
const pokemonDetailQuery = (id: number | string) =>
  queryOptions({
    queryKey: ["pokemonDetail", id],
    queryFn: async () => fetchPokemon({ id }),
  });

export function loader() {
  return async ({ params }: { params: { id: string | number } }) => {
    const query = pokemonDetailQuery(params.id);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery({
        ...query,
      }))
    );
  };
}

const PokemonDetails = () => {
  const params = useParams();
  const { data } = useQuery(pokemonDetailQuery(params.id!));
  const activeStyles = {
    color: "white",
    textDecoration: "underline",
  };

  let content = data ? <Details data={data} /> : <Loading />;

  return (
    <div className="h-full w-auto bg-sky-700 dark:bg-slate-800 flex flex-col justify-center items-center overflow-auto">
      <Link
        to="/pokedex"
        className="hover:underline text-slate-200 text-[11px] font-semibold"
        preventScrollReset={true}
        state={{ from: location.pathname }}
      >
        ← Back to pokemon
      </Link>
      <div>
        {content}
        <nav className="flex space-x-10 items-center justify-center">
          <NavLink
            to="."
            end
            className="hover:underline text-slate-200 text-opacity-80"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Species
          </NavLink>
          <NavLink
            to="./locations"
            className="hover:underline text-slate-200 text-opacity-80"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Locations
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default PokemonDetails;
