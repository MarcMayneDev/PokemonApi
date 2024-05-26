import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

import TypePill from "../TypePill";

export const Cardinfo = ({ info }) => {
  const { id, sprites, name, types, height, weight } = info;

  return (
    <Card
      sx={{
        width: "16rem",
        border: 0.1,
        borderColor: "lightgrey",
        margin: 4,
      }}
    >
      <CardMedia
      // sx={{
      //   backgroundImage:
      //     // "repeating-conic-gradient(#800080 27deg 206deg, #008000 206deg 387deg)",
      //     "repeating-conic-gradient(#0000ff 27deg 206deg)",
      // }}
      >
        <img src={sprites.front_default} alt={name} className="card-title" />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`N.º ${String(id).padStart(4, "0")}`}
        </Typography>
        <Typography gutterBottom variant="body1">
          {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
        </Typography>
        <Typography gutterBottom variant="body1">
          <b>Altura:</b> {height / 10}m
        </Typography>
        <Typography gutterBottom variant="body1">
          <b>Peso:</b> {weight / 10}kg
        </Typography>
        <Box display="flex" gap="8px">
          {types &&
            types.map(({ type }) => (
              <TypePill type={type.name} key={type.name} />
            ))}
        </Box>
      </CardContent>
    </Card>
  );
};
