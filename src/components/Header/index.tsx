interface IHeader {
  toggleDarkMode: () => void;
}

const Header = ({ toggleDarkMode }: IHeader) => {
  return (
    <header className="dark:text-white text-black mt-0 w-full ">
      <h1>Pokedex Search</h1>
      <button onClick={toggleDarkMode}>Dark Mode</button>
    </header>
  );
};

export default Header;
