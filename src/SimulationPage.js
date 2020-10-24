import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ElectionParameters from "./ElectionParameters";
import ModelParameters from "./ModelParameters";
import SimulationResults from "./SimulationResults";

function SimulationPage() {
  const [seatsOpen, setSeatsOpen] = useState(0);
  const [simulationResults, setSimulationResults] = useState({});

  return (
    <Container fluid>
      <Row style={{ height: "max" }}>
        <Col className="pt-2 d-flex flex-column">
          <ElectionParameters
            seatsOpen={seatsOpen}
            setSeatsOpen={setSeatsOpen}
          />
        </Col>
        <Col className="pt-2 d-flex flex-column">
          <ModelParameters />
        </Col>
        <Col md={4} className="pt-2 d-flex flex-column">
          <SimulationResults
            simulationResults={simulationResults}
            queryParams={{ seatsOpen }}
            setSimulationResults={setSimulationResults}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
