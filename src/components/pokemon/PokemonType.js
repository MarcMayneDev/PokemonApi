import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CardType } from "../card/CardType";
import { Tipos } from "../Tipos/Tipos";
import { UseFetch } from "../UseFetch";

const PokemonType = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/type/1");

  const estado = UseFetch(url);
  const { cargando, data } = estado;

  useEffect(() => {
    setUrl("https://pokeapi.co/api/v2/type/" + id);
  }, [id]);

  return (
    <>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <Tipos />
          <CardType results={data}></CardType>
        </>
      )}
    </>
  );
};

export default PokemonType;
