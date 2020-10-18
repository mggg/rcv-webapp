import React from "react";
import { Container, Navbar } from "react-bootstrap";

function AppHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          Modeling Representation
          <br />
          with Ranked Choice Voting
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
