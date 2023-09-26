import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } h-full w-full border-2 flex flex-col font-press-start md:text-xs text-center font-PressStart2P`}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;