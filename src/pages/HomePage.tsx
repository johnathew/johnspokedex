import { Link } from "react-router-dom";
import pokeGif from "../assets/pokeGif.gif";

function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <div className="w-3/4 h-80 mt-4 bg-[url('../pokemonLogo.png')] animate-bounce bg-contain bg-no-repeat bg-center transition duration-1000 opacity-80"></div>
      <section className="flex items-center justify-between h-full flex-col border-t-2 p-4">
        <h1 className="text-xl  text-white decoration-slate-400 ">
          Welcome to John's Pokedex
        </h1>
        <Link to="/search">
          <h1 className="text-xl text-white decoration-slate-400 animate-pulse hover:animate-none hover:underline flex flex-col ">
            Press start <span className="text-[7px] animate-none">(enter)</span>
          </h1>
        </Link>
        <img src={pokeGif} alt="pokemon gif" className="w-1/4 h-auto" />
      </section>
    </main>
  );
}

export default HomePage;
