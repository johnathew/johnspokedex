import { Link } from "react-router-dom";
import pokeGif from "../assets/pokeGif.gif";
import pokemonLogo from "../assets/pokemonLogo.png";

function HomePage() {
  return (
    <main className="text-black dark:text-slate-200 flex flex-col mb-auto items-center  justify-center h-full w-full my-auto bg-sky-700 dark:bg-slate-800">
      <img
        src={pokemonLogo}
        alt="pokemon logo"
        className="md:w-1/2 w-3/4 h-auto"
      />
      <section className="flex items-center justify-between flex-col p-4 h-auto w-auto">
        <h1 className="md:text-xl text-xs text-yellow-400 ">
          Welcome to John's Pokedex
        </h1>
        <Link to="/search">
          <h1 className="text-base mt-4 h-10 animate-pulse hover:animate-none hover:underline flex flex-col ">
            Press start
          </h1>
        </Link>
        <img src={pokeGif} alt="pokemon gif" className="w-1/4 h-auto mb-0" />
      </section>
    </main>
  );
}

export default HomePage;
