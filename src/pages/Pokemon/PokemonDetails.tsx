import { Link, useParams, NavLink, useLoaderData } from "react-router-dom";
import { fetchPokemon } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import Details from "../../components/Details";
import { queryOptions } from "@tanstack/react-query";

const pokemonDetailQuery = (id: number | string) =>
  queryOptions({
    queryKey: ["pokemonDetail", id],
    queryFn: async () => fetchPokemon({ id }),
  });

export function loader(queryClient: any) {
  return async ({ params }: { params: { id: string | number } }) => {
    const query = pokemonDetailQuery(params.id);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery({
        ...query,
        staleTime: Infinity,
        gcTime: Infinity,
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

  // make back link relative to current path
  return (
    <div className="h-1/2 w-auto mt-14">
      <Link to=".." relative="path" className="hover:underline text-base">
        ← Back to pokemon
      </Link>
      {content}
      <nav className="flex space-x-10 items-center justify-center mb-4">
        <NavLink
          to="."
          end
          className="hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Species
        </NavLink>
        <NavLink
          to="./locations"
          className="hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Locations
        </NavLink>
        <NavLink
          to="./forms"
          className="hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Forms
        </NavLink>
      </nav>
    </div>
  );
};

export default PokemonDetails;
