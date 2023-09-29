import { BsSun } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

interface IHeader {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: IHeader) => {
  const activeLink = "text-yellow-500 font-bold underline";
  return (
    <header className="dark:text-white flex-shrink-0 text-black bg-sky-600 dark:bg-black mt-0  text-[11px] w-full mb-0 border-b p-2 flex justify-between items-center drop-shadow-sm rounded-lg">
      <nav className="flex justify-around space-x-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLink : "hover:text-yellow-500"
          }
        >
          <h1>Pokedex Search</h1>
        </NavLink>
        <span className="text-yellow-500 opacity-70">|</span>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? activeLink : "hover:text-yellow-500"
          }
        >
          Search for Pokemon
        </NavLink>
        <span className="text-yellow-500 opacity-70">|</span>
        <NavLink
          to="/pokemon"
          className={({ isActive }) =>
            isActive ? activeLink : "hover:text-yellow-500"
          }
        >
          Pokemon
        </NavLink>
        <span className="text-yellow-500 opacity-70">|</span>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeLink : "hover:text-yellow-500"
          }
        >
          About
        </NavLink>
        <span className="text-yellow-500 opacity-70">|</span>
      </nav>
      <label className="flex items-center text-[9px] font-thin">
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
