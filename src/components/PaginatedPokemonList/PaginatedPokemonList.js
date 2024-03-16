import { Box, Card, TextField, Typography } from "@mui/material";
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
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap="8px">
        <Card>
          <Typography variant="h3">Pokemon por orden - Pokedex</Typography>

          {cargando ? (
            <h1>Cargando...</h1>
          ) : (
            <>
              <h4>Total pokemons: {pokemons?.length}</h4>
              <TextField
                id="standard-basic"
                name="inputFiltrar"
                label="Filtrar pokemons:"
                variant="standard"
                onChange={onChange}
                value={searchWord}
              />
            </>
          )}
        </Card>
        <PokemonsList pokemons={pokemons} />
      </Box>
    </>
  );
};

export default PaginatedPokemonList;
