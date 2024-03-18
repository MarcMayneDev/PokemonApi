import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate("/pokemon/" + pokemon);
  };

  const [pokemon, setPokemon] = useState("");
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <p>
          Ir al Pokemon:
          <input onChange={(event) => setPokemon(event.target.value)} />
          <input type="submit" value="Submit" />
        </p>
      </Form>
    </div>
  );
};

export default Search;
