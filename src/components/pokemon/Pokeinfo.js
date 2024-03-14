import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Cardinfo } from "../card/Cardinfo";
import { UseFetch } from "../UseFetch";

const Pokeinfo = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/" + id);

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
