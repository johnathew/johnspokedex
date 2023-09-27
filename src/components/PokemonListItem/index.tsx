import { Link } from "react-router-dom";

const PokemonListItem = ({
  pokemon,
  index,
}: {
  pokemon: any;
  index: number;
}) => {
  const getEntry = (url: string) => {
    let matches = url.match(/\d+/g);
    if (matches) {
      return matches[1];
    }
  };
  return (
    <Link
      to={`/search/${pokemon.name}`}
      key={pokemon.name}
      className="w-full h-full flex justify-center items-center"
    >
      <li
        key={index}
        className=" flex justify-between px-24 space-x-4 transform border-[1px] rounded-lg border-black dark:border-white shadow-sm w-1/2 mb-1 bg-red-700 dark:bg-yellow-500 dark:text-black text-white text-base hover:text-yellow-300 transition duration-300 ease-in-out hover:scale-105 hover:underline hover:border-double"
      >
        <p className="text-[10px]"> {pokemon.name}</p>
        <p className="text-[10px]">{getEntry(pokemon.url)}</p>
      </li>
    </Link>
  );
};

export default PokemonListItem;
