import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

import TypePill from "../TypePill";
import { UseFetch } from "../UseFetch";
import LoadingCard from "./LoadingCard";

export const CardPokemon = ({ url, index }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  const { id, name, sprites, types } = data || {};

  if (cargando) return <LoadingCard />;

  return (
    <Card sx={{ width: "16rem" }}>
      <CardActionArea href={"?#/pokemon/" + id}>
        <img
          src={sprites.front_default}
          alt={name}
          className="card-title"
          loading="lazy"
          fetchpriority={index < 8 ? "high" : "low"}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {`N.º ${String(id).padStart(4, "0")}`}
          </Typography>
          <Typography gutterBottom variant="h5">
            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
          </Typography>
          <Box display="flex" gap="8px">
            {types &&
              types.map(({ type }) => (
                <TypePill type={type.name} key={type.name} />
              ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
