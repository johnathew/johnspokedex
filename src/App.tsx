import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Pokemon from "./Pokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <main className={`${darkMode ? "dark" : ""} h-full w-full border-2 mx-auto font-press-start md:text-xs`}>
      <QueryClientProvider client={queryClient}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Pokemon />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}

export default App;
