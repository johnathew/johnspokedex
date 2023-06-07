import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

interface IHeader {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: IHeader) => {
  return (
    <header className="dark:text-white text-black mt-0 w-full mb-0 border-b p-2 flex justify-between items-center drop-shadow-sm">
      <h1>Pokedex Search</h1>
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
