import { useRouteError } from "react-router-dom";

const Error = (): JSX.Element => {
  const error: { message?: string } = useRouteError() || {};
  return <h2 className="mt-20">Error: {error?.message} </h2>;
};

export default Error;
