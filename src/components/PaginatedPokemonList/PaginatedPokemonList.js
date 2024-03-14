import React, { useState } from "react";

import { useFilteredPokemon, usePokemon } from "../PokemonProvider";
import PokemonsList from "../PokemonsList";

const PaginatedPokemonList = () => {
  const [searchWord, setSearchWord] = useState("");
  const { cargando } = usePokemon();
  const pokemons = useFilteredPokemon(searchWord);

  const onChange = (e) => {
    const { value } = e.currentTarget;
    setSearchWord(value);
  };

  return (
    <>
      <h1>Pokemon por orden - Pokedex</h1>

      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h4>Total pokemons: {pokemons?.length}</h4>
          <label htmlFor="inputFiltrar">Filtrar pokemons: </label>
          <input name="inputFiltrar" onChange={onChange} value={searchWord} />
          <PokemonsList pokemons={pokemons} />
          {/* <div className='container m-auto'>
                        <button onClick={(()=>setUrl(data.previous))} className='m-2 btn btn-dark'>Anterior</button>
                        <button onClick={(()=>setUrl(data.next))} className='m-2 btn btn-dark'>Siguiente</button>
                    </div> */}
        </>
      )}
    </>
  );
};

export default PaginatedPokemonList;
