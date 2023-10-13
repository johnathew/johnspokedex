import { TbPokeball } from "react-icons/tb";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const Fallback = () => {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-full w-screen text-7xl flex flex-col justify-center items-center dark:bg-slate-800 bg-sky-700">
      <TbPokeball className="text-7xl text-yellow-500 animate-spin " />
      <h3 className="text-slate-300 text-base">Generating Pokemon...</h3>
      <Progress value={progress} className="w-1/4" />
    </div>
  );
};

export default Fallback;
