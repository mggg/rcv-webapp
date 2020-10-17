import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppHeader from "./AppHeader";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
