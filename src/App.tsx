import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails, {
  loader as pokemonLoader,
} from "./pages/Pokemon/PokemonDetails";
import Layout from "./components/Layout";
import About from "./pages/About";
import PokeLocation from "./pages/Pokemon/PokeLocation";
import PokeSpeciesInfo from "./pages/Pokemon/PokeSpeciesInfo";
import PokeForms from "./pages/Pokemon/PokeForms";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Pokemon from "./pages/Pokemon";
import SearchPokedex, {loader as pokedexLoader} from "./pages/SearchPokedex";
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

const router = createBrowserRouter([
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
          },
          {
            path: "locations",
            element: <PokeLocation />,
          },
          {
            path: "forms",
            element: <PokeForms />,
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
  )
}

export default App;

//todo: style details page, pokedex table,
// add more info to details page
// style about me page
// add option to view paginated pokedex table
// add search by type
// add hover to question mark to show ability description

