import { Link } from "react-router-dom";
import pokeGif from "../../public/pokeGif.gif";

function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <div className="w-3/4 h-80 mt-4 bg-[url('../pokemonLogo.png')] animate-bounce bg-contain bg-no-repeat bg-center transition duration-1000 opacity-80"></div>
      <section className="flex items-center h-full flex-col">
        <h1 className="text-xl  text-white decoration-slate-400 ">
          Welcome to John's Pokedex
        </h1>
        <Link to="/search">
          <h1 className="text-xl text-white decoration-slate-400 animate-pulse hover:animate-none hover:underline ">
            Press start
          </h1>
        </Link>
        <img src={pokeGif} alt="pokemon gif" className="w-1/4 h-auto mt-auto" />
      </section>
    </main>
  );
}

export default HomePage;
