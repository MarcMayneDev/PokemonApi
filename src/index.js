import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Pokeinfo from "./components/pokemon/Pokeinfo";
import PokemonProvider from "./components/PokemonProvider";
import Pokedex from "./pages/Pokedex";
import Tipos from "./pages/Tipos";
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/pokemon"
          element={
            <PokemonProvider>
              <Pokedex />
            </PokemonProvider>
          }
        ></Route>
        <Route path="/pokemon/:id" element={<Pokeinfo />}></Route>
        <Route path="/type/:id" element={<Tipos />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
