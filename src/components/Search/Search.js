import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";

import { UseFetch } from "../UseFetch";

export default function Search() {
  return (
    <Container>
      <h1>{Search}</h1>
      <Form className="mt-2">
        <Form.Row className="align-items-center">
          <Col sm={10} className="my-1">
            <Form.Control
              onChange={(e) => UseFetch(e.target.value)}
              placeholder="Buscar Pokemon"
            />
          </Col>
          <Col sm={2} className="my-1">
            <Button block> Search</Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
}
