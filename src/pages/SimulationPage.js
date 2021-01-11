import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VoterParameters from "../VoterParameters";
import ElectionParameters from "../ElectionParameters";
import ModelParameters from "../ModelParameters";
import SimulationInformation from "../SimulationInformation";
import { electionParams, getSeats } from "../model/electionData";
import { voterParams } from "../model/voterData";
import {
  simulationParams,
  getElectionSimulationCount,
} from "../model/simulationData";
import { models, modelParams } from "../model/rcvModelData";
import useLocalStorage from "../hooks/useLocalStorage";

function SimulationPage() {
  // Set the initial ElectionState
  const initialElectionState = electionParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const [electionState, setElectionState] = useLocalStorage(
    "electionState",
    initialElectionState
  );
  // Set the initial VoterState
  const initialVoterState = voterParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const [voterState, setVoterState] = useLocalStorage(
    "voterState",
    initialVoterState
  );
  // Set the initial ModelState
  const initialModelState = modelParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const [modelState, setModelState] = useLocalStorage(
    "modelState",
    initialModelState
  );
  // Set the initial Simulation
  const initialSimulationState = simulationParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const [simulationState, setSimulationState] = useLocalStorage(
    "simulationState",
    initialSimulationState
  );

  // Store the currently selected model
  const [selectedModel, setSelectedModel] = useLocalStorage(
    "selectedModel",
    models[0].display
  );
  // Combine separate input states
  const combineFormData = () => {
    return {
      ...electionState,
      ...voterState,
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
        <Col md={7} className="pb-2 d-flex flex-column">
          <ElectionParameters
            formData={electionState}
            setFormData={setElectionState}
            resetData={() => setElectionState(initialElectionState)}
          />
          <VoterParameters
            formData={voterState}
            setFormData={setVoterState}
            resetData={() => setVoterState(initialVoterState)}
          />
          <ModelParameters
            models={models}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            formData={modelState}
            setFormData={setModelState}
            resetData={() => setModelState(initialModelState)}
          />
        </Col>
        <Col md={5} className="pb-2 d-flex flex-column">
          <SimulationInformation
            combineFormData={combineFormData}
            formData={simulationState}
            getSeats={getSeatsFromState}
            getElectionSimulationCount={getElectionSimulationCountFromState}
            setFormData={setSimulationState}
            selectedModel={selectedModel}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
