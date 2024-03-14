import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

import { UseFetch } from "../UseFetch";

export const CardPokemon = ({ url, index }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  const { id, name, sprites } = data || {};

  if (cargando) return <h1>Cargando</h1>;

  return (
    <Card sx={{ width: "16rem" }}>
      <CardActionArea href={"?#/pokemon/" + id}>
        <img
          src={sprites.front_default}
          alt={name}
          className="card-title"
          loading="lazy"
          fetchPriority={index < 8 ? "high" : "low"}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {`N.º ${String(id).padStart(4, "0")}`}
          </Typography>
          <Typography gutterBottom variant="h5">
            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
