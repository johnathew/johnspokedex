import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

interface IHeader {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: IHeader) => {
  const activeLink = "text-red-500 font-bold underline";
  return (
    <header className="dark:text-white flex-shrink-0 text-black mt-0 w-full mb-0 border-b p-2 flex justify-between items-center drop-shadow-sm">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : "text-white")}
      >
        <h1>Pokedex Search</h1>
      </NavLink>
      <nav className="flex justify-center text-base space-x-4">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : "text-white")}
        >
          About
        </NavLink>
        <NavLink
          to="/pokemon"
          className={({ isActive }) => (isActive ? activeLink : "text-white")}
        >
          Pokemon
        </NavLink>
      </nav>

      <label className="flex items-center gap-2 text-sm font-thin">
        Dark Mode
        {darkMode ? (
          <BsFillSunFill onClick={toggleDarkMode} className="text-lg" />
        ) : (
          <BsSun onClick={toggleDarkMode} className="text-lg" />
        )}
      </label>
    </header>
  );
};

export default Header;
