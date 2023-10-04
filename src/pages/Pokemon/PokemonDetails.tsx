import {
  Link,
  useParams,
  Outlet,
  NavLink,
  useLocation,
} from "react-router-dom";
import { fetchPokemon } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import Details from "../../components/Details";

const PokemonDetails = () => {
  const params = useParams();

  const location = useLocation();
  console.log(location);
  const pokemonTerm = params.id;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["pokemon", { pokemon: pokemonTerm }],
    queryFn: ({ signal }) => fetchPokemon({ signal, pokemonName: pokemonTerm }),
  });
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };

  let content;

  if (isPending) {
    content = <Loading />;
  }

  if (isError) {
    content = <div>{error.message}</div>;
  }

  if (data) {
    content = <Details data={data} />;
  }

  return (
    <div className="h-1/2">
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
      <Outlet context={data} />
    </div>
  );
};

export default PokemonDetails;
