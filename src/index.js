import "./index.css";

import { ThemeProvider } from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Pokeinfo from "./components/pokemon/Pokeinfo";
import PokemonProvider from "./components/PokemonProvider";
import Pokedex from "./pages/Pokedex";
import Tipos from "./pages/Tipos";
// import App from './App';
import theme from "./theme";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
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
          />
          <Route path="/pokemon/:id" element={<Pokeinfo />} />
          <Route path="/type/:id" element={<Tipos />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
