import React, { useEffect, useState } from "react";
import { UseFetch } from "../UseFetch";
import { Cardinfo } from "../card/Cardinfo";
import { useParams } from "react-router-dom";

const Pokeinfo = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/" + id);

  const func = () => {};

  useEffect(() => {
    setUrl("https://pokeapi.co/api/v2/pokemon/" + id);
  }, [id]);

  const estado = UseFetch(url);
  const { cargando, data } = estado;

  return (
    <div>
      <h1>Pokemon {id}</h1>

      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <Cardinfo info={data}></Cardinfo>
        </div>
      )}
    </div>
  );
};

export default Pokeinfo;
