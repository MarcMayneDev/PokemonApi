import React from 'react';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar/Navbar';
import  { HashRouter, Routes, Route } from "react-router-dom";
import PaginatedPokemonList from './components/PaginatedPokemonList';
import Pokeinfo from './components/pokemon/Pokeinfo';
import PokemonType from './components/pokemon/PokemonType';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonProvider from './components/PokemonProvider';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <HashRouter>
        <Navbar/>
          <div className="content">
            <Routes>
              <Route path="/pokemon" element={<PokemonProvider><PaginatedPokemonList/></PokemonProvider>}></Route>
              <Route path="/pokemon/:id" element={<Pokeinfo/>}></Route>
              <Route path="/type/:id" element={<PokemonType/>}></Route>
            </Routes>
          </div>
      </HashRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
