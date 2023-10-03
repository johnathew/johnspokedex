import { getEntry } from "@/utils";
import { Link } from "react-router-dom";

const PokemonListItem = ({
  name,
  url,
  index,
  altRef,
}: {
  name: string;
  url: string;
  index: number;
  altRef: any;
}) => {
  return (
    <Link to={`/search/${name}`} key={name} className="w-full md:w-1/2 h-auto">
      <li
        key={name}
        ref={altRef}
        className="h-10 md:w-full items-center flex justify-between px-24 space-x-4 transform border-[1px] rounded-lg border-black dark:border-white shadow-sm  mb-1 bg-red-700 dark:bg-yellow-500 dark:text-black text-white text-base hover:text-yellow-300 transition duration-300 ease-in-out hover:scale-105  hover:border-double hover:border-4 hover:border-yellow-300"
      >
        <p className="text-[10px]">{name}</p>
        <p className="text-[10px]">{getEntry(url)}</p>
      </li>
    </Link>
  );
};

export default PokemonListItem;
