import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputParametersCard from "../components/InputParametersCard";
import SimulationInformation from "../SimulationInformation";
import { electionParams, electionInputs } from "../model/electionData";
import { voterParams, voterInputs } from "../model/voterEnsembleData";
import {
  simulationParams,
  simulationInputs,
} from "../model/simulationEnsembleData";
import useLocalStorage from "../hooks/useLocalStorage";
console.log("voterParams", voterParams);

function SimulationPage() {
  const appRef = useRef();

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

  return (
    <Container fluid ref={appRef}>
      <Row>
        <Col md={7} className="pb-2 d-flex flex-column">
          <InputParametersCard
            formTitle={"Election Details"}
            formInputs={electionInputs}
            formData={electionState}
            setFormData={setElectionState}
            resetData={() => setElectionState(initialElectionState)}
          />
          <InputParametersCard
            formTitle={"Voter Behaviors"}
            formInputs={voterInputs}
            formData={voterState}
            setFormData={setVoterState}
            resetData={() => setVoterState(initialVoterState)}
          />
        </Col>
        <Col md={5} className="pb-2 d-flex flex-column">
          <SimulationInformation
            appRef={appRef}
            combineFormData={combineFormData}
            formData={simulationState}
            formInputs={simulationInputs}
            setFormData={setSimulationState}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
