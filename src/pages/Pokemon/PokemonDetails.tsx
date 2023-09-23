import { Link, useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import Details from "../../components/Details";

const PokemonDetails = () => {
  const params = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["pokemon", params.id],
    queryFn: () => fetchPokemonDetails(params.id!),
  });

  let content;

  if (isPending) {
    content = <Loading />;
  }

  if (isError) {
    content = <div>{error.message}</div>;
  }
  // create a new component for this content in compnonents folder
  if (data) {
    content = <Details data={data} />;
  }

  return (
    <div className="h-full w- auto flex">
      <Link to=".." relative="path" className="hover:underline">
        ← Back to pokemon
      </Link>
      {content}
    </div>
  );
};

export default PokemonDetails;
