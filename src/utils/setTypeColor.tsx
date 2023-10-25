export function setTypeColor(type: string) {
  let typeColor = "";
  switch (type) {
    case "normal":
      typeColor = "bg-amber-500 dark:text-black text-black";
      break;
    case "fire":
      typeColor = "bg-red-600";
      break;
    case "water":
      typeColor = "bg-blue-700";
      break;
    case "grass":
      typeColor = "bg-green-600";
      break;
    case "electric":
      typeColor = "bg-yellow-500 text-black dark:text-black";
      break;
    case "ice":
      typeColor = "bg-blue-400";
      break;
    case "fighting":
      typeColor = "bg-red-900";
      break;
    case "poison":
      typeColor = "bg-purple-700";
      break;
    case "ground":
      typeColor = "bg-amber-700";
      break;
    case "flying":
      typeColor = "bg-cyan-600 ";
      break;
    case "psychic":
      typeColor = "bg-pink-800";
      break;
    case "bug":
      typeColor = "bg-lime-600";
      break;
    case "rock":
      typeColor = "bg-amber-900";
      break;
    case "ghost":
      typeColor = "bg-purple-500";
      break;
    case "dark":
      typeColor = "bg-slate-900";
      break;
    case "dragon":
      typeColor = "bg-violet-900";
      break;
    case "steel":
      typeColor = "bg-gray-500";
      break;
    case "fairy":
      typeColor = "bg-pink-400";
      break;
    default:
      typeColor = "bg-amber-600";
  }

  return typeColor;
}
