import React from "react";
import { Container, Navbar } from "react-bootstrap";

function AppHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Modeling Representation
          <br />
          With Rank Choice Voting
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
