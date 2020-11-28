import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ElectionParameters from "../ElectionParameters";
import ModelParameters from "../ModelParameters";
import SimulationResults from "../SimulationResults";
import {
  models,
  modelParams,
  modelInputs,
  filterInputsByModelType,
} from "../model/rcvModelData";
import { electionParams, electionInputs } from "../model/electionData";
import { simulationParams, simulationInputs } from "../model/simulationData";

// A common lookup table for Majority-Minority labels

function SimulationPage() {
  const paramKeys = [].concat(
    electionParams.map((p) => ({
      dataid: p.dataid,
      value: p.initialValue,
    })),
    modelParams.map((p) => ({
      dataid: p.dataid,
      value: p.initialValue,
    })),
    simulationParams.map((p) => ({
      dataid: p.dataid,
      value: p.initialValue,
    }))
  );
  // Iterate over all params to set our initial values appropriately
  const initialState = {};
  paramKeys.forEach((p) => {
    initialState[p.dataid] = p.value;
  });
  const [formData, setFormData] = useState(initialState);
  const [simulationResults, setSimulationResults] = useState({});

  return (
    <Container fluid>
      <Row style={{ height: "max" }}>
        <Col className="pt-2 d-flex flex-column">
          <ElectionParameters
            formData={formData}
            setFormData={setFormData}
            formInputs={electionInputs}
          />
        </Col>
        <Col className="pt-2 d-flex flex-column">
          <ModelParameters
            models={models}
            formData={formData}
            setFormData={setFormData}
            formInputs={modelInputs}
            filterInputsByModelType={filterInputsByModelType}
          />
        </Col>
        <Col xl={12} className="pt-2 d-flex flex-column">
          <SimulationResults
            formData={formData}
            setFormData={setFormData}
            formInputs={simulationInputs}
            simulationResults={simulationResults}
            setSimulationResults={setSimulationResults}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
