import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } h-screen w-full flex flex-col font-exoLight `}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
