import "./Cards.css";

import React from "react";

import { CardPokemon } from "./CardPokemon";

export const CardType = ({ results }) => {
  return (
    <div className="container">
      <ul className="cards">
        {results.pokemon.map((p) => (
          <li className="card-item">
            <CardPokemon url={p.pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
