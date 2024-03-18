import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import React from "react";

import TypePill from "../TypePill";

export const Cardinfo = ({ info }) => {
  const { id, sprites, name, types, height, weight } = info;

  return (
    <Card sx={{ width: "16rem" }}>
      <img src={sprites.front_default} alt={name} className="card-title" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`N.º ${String(id).padStart(4, "0")}`}
        </Typography>
        <Typography gutterBottom variant="body1">
          {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
        </Typography>
        <Typography gutterBottom variant="body1">
          {height / 10}m
        </Typography>
        <Typography gutterBottom variant="body1">
          {weight / 10}Kg
        </Typography>
        <Box display="flex" gap="8px">
          {types &&
            types.map(({ type }) => (
              <TypePill type={type.name} key={type.name} />
            ))}
        </Box>
      </CardContent>
      <Link underline="none" href="?#/pokemon" color="grey.900">
        Volver
      </Link>
    </Card>
  );
};
