import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
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
import SearchPokedex, { loader as fetchAllLoader } from "./pages/SearchPokedex";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/pokedex"
        element={<SearchPokedex />}
        loader={(queryClient) => fetchAllLoader(queryClient)}
        errorElement={<Error />}
      />
      <Route path="/pokemon" element={<Pokemon />} errorElement={<Error />} />
      <Route
        path="/pokemon/:id"
        element={<PokemonDetails />}
        loader={(queryClient) => pokemonLoader(queryClient)}
        errorElement={<Error />}
      >
        <Route index element={<PokeSpeciesInfo />} />
        <Route path="locations" element={<PokeLocation />} />
        <Route path="forms" element={<PokeForms />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
