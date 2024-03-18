import { Padding } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const TypePill = ({ type }) => {
  const theme = useTheme();
  const bg = theme.palette.tipos[type] || theme.palette.tipos["default"];

  return (
    <Box sx={{ backgroundColor: bg, paddingX: "8px", borderRadius: "10%" }}>
      <Typography>{type}</Typography>
    </Box>
  );
};

export default TypePill;
