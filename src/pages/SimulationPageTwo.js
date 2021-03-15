import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VoterParameters from "../VoterParameters";
import ElectionParameters from "../ElectionParameters";
import SimulationInformation from "../SimulationInformation";
import { electionParams, getSeats } from "../model/electionData";
import { voterParams } from "../model/voterData";
import {
  simulationParams,
  simulationInputs,
} from "../model/simulationEnsembleData";
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
  // Set the initial Simulation
  const initialSimulationState = simulationParams.reduce((accum, p) => {
    accum[p.dataid] = p.initialValue;
    return accum;
  }, {});
  const [simulationState, setSimulationState] = useLocalStorage(
    "simulationState",
    initialSimulationState
  );

  // Combine separate input states
  const combineFormData = () => {
    return {
      ...electionState,
      ...voterState,
      ...simulationState,
    };
  };

  const getSeatsFromState = () => {
    return getSeats(electionState);
  };

  return (
    <Container fluid>
      <Row>
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
        </Col>
        <Col md={5} className="pb-2 d-flex flex-column">
          <SimulationInformation
            combineFormData={combineFormData}
            formData={simulationState}
            formInputs={simulationInputs}
            getSeats={getSeatsFromState}
            setFormData={setSimulationState}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
