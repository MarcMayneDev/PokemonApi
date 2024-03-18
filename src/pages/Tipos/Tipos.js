import { Box, Typography } from "@mui/material";
import React from "react";

import PokemonType from "../../components/pokemon/PokemonType";

const Tipos = () => {
  return (
    <Box padding="8px">
      <Typography variant="h3">Tipos</Typography>
      <PokemonType />
    </Box>
  );
};

export default Tipos;
