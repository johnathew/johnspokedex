import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="w-full md:text-lg flex flex-col h-full p-8 items-center justify-center bg-sky-700 dark:bg-slate-800 text-slate-200 font-light">
        <p className="md:w-1/2 ">Yes, another Pokedex made with React. This time using React Query, React Table, React Router, and Tailwind CSS.</p>
        <p className="my-2 md:w-1/2"> This site was simply made to demonstrate/ test my own understanding of these librarys and to practice creating a responsive website with React.</p>

        <ul className="list-disc list-inside pt-4">
          <li>This website is purely for demonstrational purposes.</li>
          <li>It is not affiliated with Nintendo or Game Freak.</li>
          <li>It is not intended for commercial use.</li>
          <li>It is not intended to infringe on any rights.</li>
          <li>It is not intended to be a replacement for any official Pokedex.</li>
        </ul>

        <p className="pt-4 md:w-1/2">A link to the Github repository can be found <Link className="text-yellow-300 hover:underline" to="https://github.com/johnathew/pokemonAPI-reacthooks">here</Link>, and my portfolio website can be found <Link className="text-yellow-300 hover:underline" to='https://jaksresume.netlify.app'>here</Link>. Thank you for visiting. I hope you have a wonderful day.</p>
      </div>
    </>
  );
};

export default About;
