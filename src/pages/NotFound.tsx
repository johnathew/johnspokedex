import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <h1 className="flex flex-col h-full items-center justify-center">
      Sorry, that page does not exist {":("}
      <Link to="/" className="hover:underline">
        Go Home
      </Link>
    </h1>
  );
};

export default NotFound;
