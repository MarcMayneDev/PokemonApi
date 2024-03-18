import { Box } from "@mui/material";
import React from "react";

import { CardPokemon } from "./CardPokemon";

export const CardType = ({ results }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      p="32px"
      gap="48px"
    >
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap="8px">
        {results.pokemon.map((p) => (
          <CardPokemon url={p.pokemon.url} />
        ))}
      </Box>
    </Box>
  );
};
