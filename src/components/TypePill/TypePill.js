import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const TypePill = ({ type }) => {
  const theme = useTheme();
  const color = theme.palette.tipos[type] || theme.palette.tipos["default"];

  return (
    <Box
      sx={{ backgroundColor: color.bg, paddingX: "8px", borderRadius: "10%" }}
    >
      <Typography color={color.color}>
        {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
      </Typography>
    </Box>
  );
};

export default TypePill;
