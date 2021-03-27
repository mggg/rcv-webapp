import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputParametersCard from "../components/InputParametersCard";
import TabbedInputParametersCard from "../components/TabbedInputParametersCard";
import SimulationInformation from "../SimulationInformation";
import { electionParams, electionInputs } from "../model/electionData";
import { voterParams, voterInputs } from "../model/voterData";
import { simulationParams, simulationInputs } from "../model/simulationData";
import {
  models,
  modelParams,
  modelInputs,
  filterInputsByModelType,
} from "../model/rcvModelData";
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

  return (
    <Container fluid>
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
          <TabbedInputParametersCard
            filterInputsBySelectedTab={filterInputsByModelType}
            formData={modelState}
            formInputs={modelInputs}
            formTitle={"Model Settings"}
            resetData={() => setModelState(initialModelState)}
            selectedTab={selectedModel}
            setFormData={setModelState}
            setSelectedTab={setSelectedModel}
            tabs={models}
          />
        </Col>
        <Col md={5} className="pb-2 d-flex flex-column">
          <SimulationInformation
            combineFormData={combineFormData}
            formData={simulationState}
            formInputs={simulationInputs}
            setFormData={setSimulationState}
            selectedModel={selectedModel}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
