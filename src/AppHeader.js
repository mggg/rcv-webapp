import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function AppHeader(props) {
  return (
    <Navbar className="nav-header" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          Modeling Representation <br className="d-xs-block d-sm-none" /> with
          Ranked Choice Voting
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            {props.routes.map((route, i) => (
              <Nav.Item className="text-right" key={route.display}>
                <Nav.Link as={Link} to={route.path} key={i}>
                  {route.display}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
