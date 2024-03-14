import React from "react";

import { UseFetch } from "../UseFetch";

export const CardPokemonType = ({ url }) => {
  console.log(url);
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  const { id, name, sprites } = data || {};

  return (
    <div>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-header">
            <h5 className="card-title">{id}</h5>
          </div>
          <div className="card-body">
            <img
              src={sprites.front_default}
              alt={name}
              className="card-title"
            />
          </div>
          <div className="card-footer">
            <p className="card-text">{name}</p>
            <a href={"?#/pokemon/" + id}>Ver mas</a>
          </div>
        </div>
      )}
    </div>
  );
};
