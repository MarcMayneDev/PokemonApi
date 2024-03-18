import { Box, Typography } from "@mui/material";
import React from "react";

import PaginatedPokemonList from "../../components/PaginatedPokemonList";

const Pokedex = () => {
  return (
    <Box padding="8px">
      <Typography variant="h3">Pokedex</Typography>
      <PaginatedPokemonList />
    </Box>
  );
};

export default Pokedex;
