import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const TypePill = ({ type }) => {
  const theme = useTheme();
  const color = theme.palette.tipos[type] || theme.palette.tipos["default"];

  return (
    <Box paddingX="8px" borderRadius="12px" sx={{ backgroundColor: color.bg }}>
      <Typography color={color.color}>
        {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
      </Typography>
    </Box>
  );
};

export default TypePill;
