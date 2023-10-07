import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
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
      <ScrollRestoration
        getKey={(location, matches) => {
          console.log(location.pathname, "location");
          return location.pathname;
        }}
      />
    </div>
  );
};

export default Layout;
