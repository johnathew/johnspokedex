import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

import Pokemon from "./Pokemon";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={`h-screen w-full m-0 p-0 ${darkMode ? "dark" : ""}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Pokemon />
    </div>
  );
}

export default App;
