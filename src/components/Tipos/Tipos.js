import "../card/Cardinfo.css";

import React from "react";

const pokeTypes = [
  { tipo: "normal", id: 1 },
  { tipo: "fighting", id: 2 },
  { tipo: "flying", id: 3 },
  { tipo: "poison", id: 4 },
  { tipo: "ground", id: 5 },
  { tipo: "rock", id: 6 },
  { tipo: "bug", id: 7 },
  { tipo: "ghost", id: 8 },
  { tipo: "steel", id: 9 },
  { tipo: "fire", id: 10 },
  { tipo: "water", id: 11 },
  { tipo: "grass", id: 12 },
  { tipo: "electric", id: 13 },
  { tipo: "psychic", id: 14 },
  { tipo: "ice", id: 15 },
  { tipo: "dragon", id: 16 },
  { tipo: "dark", id: 17 },
  { tipo: "fairy", id: 18 },
];
export const Tipos = () => {
  return (
    <div className="container">
      <ul className="cards">
        {pokeTypes.map((p) => (
          <li className="card-item" key={p.tipo}>
            <div
              className={p.tipo}
              style={{ margin: "8px", width: "64px", textAlign: "center" }}
            >
              <a className={p.tipo} href={"?#/type/" + p.id}>
                {p.tipo}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
