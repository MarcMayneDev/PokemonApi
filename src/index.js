// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import PaginatedPokemonList from "./components/PaginatedPokemonList";
import Pokeinfo from "./components/pokemon/Pokeinfo";
import PokemonType from "./components/pokemon/PokemonType";
import PokemonProvider from "./components/PokemonProvider";
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <HashRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/pokemon"
              element={
                <PokemonProvider>
                  <PaginatedPokemonList />
                </PokemonProvider>
              }
            ></Route>
            <Route path="/pokemon/:id" element={<Pokeinfo />}></Route>
            <Route path="/type/:id" element={<PokemonType />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root"),
);
