import { GiPokecog } from "react-icons/gi";
export const Loading = () => {
  return (
    <div className="h-auto w-auto flex justify-center items-center">
      <GiPokecog className="md:text-5xl text-xl  text-yellow-500 animate-spin " />
    </div>
  );
};
