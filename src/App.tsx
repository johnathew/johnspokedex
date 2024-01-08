import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails, {
  loader as pokemonLoader,
} from "./pages/Pokemon/PokemonDetails";
import Layout from "./components/Layout";
import About from "./pages/About";
import PokeLocation, {
  loader as locationLoader,
} from "./pages/Pokemon/PokeLocation";
import PokeSpeciesInfo, {
  loader as speciesLoader,
} from "./pages/Pokemon/PokeSpeciesInfo";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Pokemon from "./pages/Pokemon";
import SearchPokedex, { loader as pokedexLoader } from "./pages/SearchPokedex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pokemon",
        element: <Pokemon />,
        errorElement: <Error />,
      },
      {
        path: "/pokedex",
        element: <SearchPokedex />,
        loader: pokedexLoader,
        errorElement: <Error />,
      },
      {
        path: "/pokedex/:id",
        element: <PokemonDetails />,
        loader: pokemonLoader,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <PokeSpeciesInfo />,
            loader: speciesLoader,
            errorElement: <Error />,
          },
          {
            path: "locations",
            element: <PokeLocation />,
            loader: locationLoader,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

//todo: about page
// add option to view paginated pokedex table
// add search by type
// add scroll to top/ middle/ bottom button
// add evolves into link
//style location info more, looks wonky when only one location is visible
// fix margins/padding in species and locations info
// hover button error when clicking abilities on mobile
