import React, { createContext, useContext, useState } from "react";

import { UseFetch } from "../UseFetch";

const PokemonContext = createContext(null);

const PokemonProvider = ({ children }) => {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=1126",
  );
  const { cargando, data } = UseFetch(url);
  const pokemons = data?.results || [];
  const value = { cargando, pokemons, setUrl };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export default PokemonProvider;
