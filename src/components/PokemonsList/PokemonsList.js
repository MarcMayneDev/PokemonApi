import React from "react";
import { CardPokemon } from "../card/CardPokemon";
import "./Cards.css";

const PokemonsList = ({ pokemons }) => {
  return (
    <div className="container">
      <ul className="cards">
        {pokemons?.map((pokemon, index) => (
          <li className="card-item" key={pokemon.name}>
            <CardPokemon url={pokemon.url} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsList;
