import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ElectionParameters from "../ElectionParameters";
import ModelParameters from "../ModelParameters";
import SimulationResults from "../SimulationResults";
import { electionParams, getSeats } from "../model/electionData";
import {
  simulationParams,
  getElectionSimulationCount,
} from "../model/simulationData";
import { models, modelParams } from "../model/rcvModelData";

function SimulationPage() {
  // Set the state of the various parameters
  const initialElectionState = electionParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const initialModelState = modelParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const initialSimulationState = simulationParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const [electionState, setElectionState] = useState(initialElectionState);
  const [modelState, setModelState] = useState(initialModelState);
  const [simulationState, setSimulationState] = useState(
    initialSimulationState
  );

  // Store the currently selected model
  const [selectedModelDataid, setSelectedModelDataid] = useState(
    models[0].dataid
  );

  // Combine separate input states
  const combineFormData = () => {
    return {
      ...electionState,
      ...modelState,
      ...simulationState,
    };
  };

  const getSeatsFromState = () => {
    return getSeats(electionState);
  };
  const getElectionSimulationCountFromState = () => {
    return getElectionSimulationCount(simulationState);
  };

  return (
    <Container fluid>
      <Row style={{ height: "max" }}>
        <Col className="pb-2 d-flex flex-column">
          <ElectionParameters
            formData={electionState}
            setFormData={setElectionState}
          />
          <ModelParameters
            models={models}
            selectedModelDataid={selectedModelDataid}
            setSelectedModelDataid={setSelectedModelDataid}
            formData={modelState}
            setFormData={setModelState}
          />
        </Col>
        <Col md={5} className="pb-2 d-flex flex-column">
          <SimulationResults
            combineFormData={combineFormData}
            formData={simulationState}
            getSeats={getSeatsFromState}
            getElectionSimulationCount={getElectionSimulationCountFromState}
            setFormData={setSimulationState}
            selectedModelDataid={selectedModelDataid}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
