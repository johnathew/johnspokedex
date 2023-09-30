import { Link } from "react-router-dom";
import pokeGif from "../assets/pokeGif.gif";
import pokemonLogo from "../assets/pokemonLogo.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    console.log(e);

    // const key = e.key
    // if (key === "Enter") {
    //   navigate("/search");
    // }
  };
  return (
    <main
      className="flex flex-col mb-auto items-center relative justify-center w-full h-screen  bg-sky-600 dark:bg-black"
      onKeyDown={(e) => handleKeyDown(e as React.KeyboardEvent<HTMLElement>)}
    >
      <img src={pokemonLogo} alt="pokemon logo" className="w-3/4 h-auto animate-pulse" />
      <section className="flex items-center justify-between flex-col p-4 h-auto w-auto">
        <h1 className="text-xl text-white font-sans decoration-slate-400 ">
          Welcome to John's Pokedex
        </h1>
        <Link to="/search">
          <h1 className="text-base mt-4 h-10 text-white decoration-slate-400 animate-pulse hover:animate-none hover:underline flex flex-col ">
            Press start
          </h1>
        </Link>
        <img src={pokeGif} alt="pokemon gif" className="w-1/4 h-auto mb-0" />
      </section>
    </main>
  );
}

export default HomePage;
