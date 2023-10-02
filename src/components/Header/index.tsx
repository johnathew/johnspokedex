import { BsSun } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { TbPokeball } from "react-icons/tb";
import { TfiInfinite } from "react-icons/tfi";
interface IHeader {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: IHeader) => {
  const activeLink = "text-yellow-500 font-bold underline";
  return (
    <header className="navbar bg-sky-800 text-slate-200 dark:bg-slate-900 z-10 top-0 left-0 rounded-b-lg fixed shadow drop-shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? activeLink : "hover:text-yellow-500"
                }
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pokemon"
                className={({ isActive }) =>
                  isActive ? activeLink : "hover:text-yellow-500"
                }
              >
                Pokemon
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : "hover:text-yellow-500"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLink : "hover:text-yellow-500"
          }
        >
          <TbPokeball className="md:text-3xl md:ml-2 ml-0 text-xl" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[10px]">
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? activeLink : "hover:text-yellow-500"
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pokemon"
              className={({ isActive }) =>
                isActive ? activeLink : "hover:text-yellow-500"
              }
            >
              Pokemon (<TfiInfinite />
              scrolling)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLink : "hover:text-yellow-500"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="flex items-center text-[8px] md:text-xs font-thin md:mr-2">
          Dark Mode
          {darkMode ? (
            <BsSun onClick={toggleDarkMode} className="text-lg ml-2" />
          ) : (
            <BsFillSunFill onClick={toggleDarkMode} className="text-xl ml-2" />
          )}
        </label>
      </div>
    </header>
  );
};

export default Header;
