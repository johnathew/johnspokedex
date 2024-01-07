const About = () => {
  return (
    <>
      <div className="w-full md:text-lg flex flex-col h-full p-8 items-center justify-center bg-sky-700 dark:bg-slate-800 text-slate-200">
        <p className="md:w-1/2 ">Yes, another Pokedex made with React. This time using React Query, React Table, and React Router.        </p>
        <p className="my-2 md:w-1/2"> This site was simply made to demonstrate/ test my own understanding of these librarys and to practice creating a responsive website with React.</p>

        <ul className="list-disc list-inside pt-4">
          <li>This website is purely for demonstrational purposes.</li>
          <li>It is not affiliated with Nintendo or Game Freak.</li>
          <li>It is not intended for commercial use.</li>
          <li>It is not intended to infringe on any rights.</li>
          <li>It is not intended to be a replacement for any official Pokedex.</li>
        </ul>
      </div>
    </>
  );
};

export default About;
