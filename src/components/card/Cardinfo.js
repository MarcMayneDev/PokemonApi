import React from "react";
import "./Cardinfo.css";

export const Cardinfo = ({ info }) => {
  const { id, sprites, name, types, height, weight } = info;
  console.log(info);

  return (
    <div>
      <div className="card" style={{ width: "14rem" }}>
        <div className="card-header">
          <h5 className="card-title">{id}</h5>
        </div>
        <div className="card-body">
          <img src={sprites.front_default} alt={name} className="card-title" />
        </div>
        <div className="card-footer">
          <p className="card-text">{name}</p>
          <p className="card-text">Altura: {height / 10}m</p>
          <p className="card-text">Peso: {weight / 10}Kg</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="card-text">Tipos:</p>
            {types.map((p) => (
              <div
                className={p.type.name}
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  width: "4rem",
                  textAlign: "center",
                  flex: "1",
                  margin: "4px",
                }}
                key={p.type.name}
              >
                {p.type.name}
              </div>
            ))}
          </div>
        </div>
        <a href="?#/pokemon">Volver</a>
      </div>
    </div>
  );
};
