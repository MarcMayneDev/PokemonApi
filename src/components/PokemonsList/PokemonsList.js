import { Box } from "@mui/material";
import React from "react";

import { CardPokemon } from "../card/CardPokemon";

const PokemonsList = ({ pokemons }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="8px"
      p="32px"
    >
      {pokemons?.map((pokemon, index) => (
        <CardPokemon url={pokemon.url} index={index} key={pokemon.name} />
      ))}
    </Box>
  );
};

export default PokemonsList;
