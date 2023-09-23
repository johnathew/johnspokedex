import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pokemon from "./pages/Pokemon/Pokemon";
import PokemonDetails from "./pages/Pokemon/PokemonDetails";
import Layout from "./components/Layout";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />}>
        <Route index element={<h1>Sample text goes here</h1>} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
