import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/Pokemon/PokemonDetails";
import Layout from "./components/Layout";
import About from "./pages/About";
import PokeLocation from "./pages/Pokemon/PokeLocation";
import PokeSpeciesInfo from "./pages/Pokemon/PokeSpeciesInfo";
import PokeForms from "./pages/Pokemon/PokeForms";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Search from "./pages/Search";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/search"
        element={<Search />}
        errorElement={<Error />}
      />
      <Route path="/search/:id" element={<PokemonDetails />}>
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
