import { Box, Pagination } from "@mui/material";
import React, { useState } from "react";

import { CardPokemon } from "../card/CardPokemon";

const NUM_POKEMONS = 24;

const PokemonsList = ({ pokemons }) => {
  const [page, setPage] = useState(0);

  if (!pokemons || pokemons.length === 0) return <>"No pokemons found"</>;

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      p="32px"
      gap="48px"
    >
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap="8px">
        {pokemons
          ?.slice(NUM_POKEMONS * page, NUM_POKEMONS * page + NUM_POKEMONS)
          .map((pokemon, index) => (
            <CardPokemon url={pokemon.url} index={index} key={pokemon.name} />
          ))}
      </Box>
      <Pagination
        count={Math.floor(pokemons.length / NUM_POKEMONS)}
        page={page}
        onChange={(e, value) => {
          setPage(value);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </Box>
  );
};

export default PokemonsList;
