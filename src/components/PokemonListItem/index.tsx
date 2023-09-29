import { Link } from "react-router-dom";

const PokemonListItem = ({
  name,
  url,
  index,
  altRef
}: {
  name: string;
  url: string;
  index: number;
  altRef: any;
}) => {
  const getEntry = (url: string) => {
    let matches = url.match(/\d+/g);
    if (matches) {
      return matches[1];
    }
  };
  return (
    <Link
      to={`/search/${name}`}
      key={name}
      className="w-full h-auto flex justify-center items-center"
    >
      <li
        key={name}
        ref={altRef}
        className="h-10 flex justify-between px-24 space-x-4 transform border-[1px] rounded-lg border-black dark:border-white shadow-sm w-1/2 mb-1 bg-red-700 dark:bg-yellow-500 dark:text-black text-white text-base hover:text-yellow-300 transition duration-300 ease-in-out hover:scale-105 hover:underline hover:border-double"
      >
        <p className="text-[10px]"> {name}</p>
        <p className="text-[10px]">{getEntry(url)}</p>
      </li>
    </Link>
  );
};

export default PokemonListItem;
