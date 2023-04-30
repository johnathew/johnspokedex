import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Pokemon from "./Pokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PokemonDetails from "./components/PokemonDetails.tsx";

const queryClient = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className={`h-full w-full m-0 p-0 ${darkMode ? "dark" : ""}`}>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

          <Pokemon />
          <PokemonDetails />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
