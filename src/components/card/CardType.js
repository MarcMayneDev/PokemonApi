import "./Cards.css";

import React from "react";

import { CardPokemonType } from "./CardPokemonType";

export const CardType = ({ results }) => {
  return (
    <div className="container">
      <ul className="cards">
        {results.pokemon.map((p) => (
          <li className="card-item">
            <CardPokemonType url={p.pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
