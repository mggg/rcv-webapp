import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ElectionParameters from "./ElectionParameters";
import ModelParameters from "./ModelParameters";
import SimulationResults from "./SimulationResults";

// A common lookup table for Majority-Minority labels
const mmLabels = {
  maj: "Green",
  min: "Purple",
};

const electionParams = [
  {
    id: "ballots",
    name: "ballots",
    type: "number",
    initialValue: 1000,
    step: 10,
    label: "Voter Population",
    helperText: "Max 10,000",
    info: "The number of voters in each election simulation",
  },
  {
    id: "seatsOpen",
    name: "seatsOpen",
    type: "number",
    initialValue: 10,
    step: 3,
    label: "Spots Up For Election",
    helperText: "Max 30",
    info: "The number of open seats open for election in each simulation",
  },
];

const modelParams = [
  {
    id: "majorityMajorityAffinity",
    name: "majorityMajorityAffinity",
    type: "slider",
    initialValue: 1,
    step: 0.1,
    min: 0.5,
    max: 2.0,
    minLabel: "Fairly even across options",
    maxLabel: "",
    title: `Among ${mmLabels.maj} voters, support for ${mmLabels.maj} candidates is...`,
    info: `This value provides information to the model on how even or polarized support
    is among ${mmLabels.maj} voters for ${mmLabels.maj} candidates. If support is even,
    there are no stand out candidates and all are liked evenly. If support is polarized,
    there is a front-runner ${mmLabels.maj} candidate among ${mmLabels.maj} voters.`,
  },
  {
    id: "majorityMinorityAffinity",
    name: "majorityMinorityAffinity",
    type: "slider",
    initialValue: 1,
    step: 0.1,
    min: 0.5,
    max: 2.0,
    minLabel: "Fairly even across options",
    maxLabel: "",
    title: `Among ${mmLabels.maj} voters, support for ${mmLabels.min} candidates is...`,
    info: `This value provides information to the model on how even or polarized support
    is among ${mmLabels.maj} voters for ${mmLabels.min} candidates. If support is even,
    there are no stand out candidates and all are liked evenly. If support is polarized,
    there is a front-runner ${mmLabels.min} among ${mmLabels.maj} candidates.`,
  },
  {
    id: "minorityMinorityAffinity",
    name: "minorityMinorityAffinity",
    type: "slider",
    initialValue: 1,
    step: 0.1,
    min: 0.5,
    max: 2.0,
    minLabel: "Fairly even across options",
    maxLabel: "",
    title: `Among ${mmLabels.min} voters, support for ${mmLabels.min} candidates is...`,
    info: `This value provides information to the model on how even or polarized support
     is among ${mmLabels.min} voters for ${mmLabels.min} candidates. If support is even,
     there are no stand out candidates and all are liked evenly. If support is polarized,
     there is a front-runner ${mmLabels.min} among ${mmLabels.min} voters.`,
  },
  {
    id: "minorityMajorityAffinity",
    name: "minorityMajorityAffinity",
    type: "slider",
    initialValue: 1,
    step: 0.1,
    min: 0.5,
    max: 2.0,
    minLabel: "Fairly even across options",
    maxLabel: "",
    title: `Among ${mmLabels.min} voters, support for ${mmLabels.maj} candidates is...`,
    info: `This value provides information to the model on how even or polarized support
     is among ${mmLabels.min} voters for ${mmLabels.maj} candidates. If support is even,
     there are no stand out candidates and all are liked evenly. If support is polarized,
     there is a front-runner ${mmLabels.maj} among Majority voters.`,
  },
];

function SimulationPage() {
  const paramKeys = [].concat(
    electionParams.map((p) => ({ key: p.name, value: p.initialValue })),
    modelParams.map((p) => ({ key: p.name, value: p.initialValue }))
  );
  // Iterate over all params to set our initial values appropriately
  const initialState = {};
  paramKeys.forEach((p) => {
    initialState[p.key] = p.value;
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
            formParams={electionParams}
          />
        </Col>
        <Col className="pt-2 d-flex flex-column">
          {/* <ModelParameters
            formData={formData}
            setFormData={setFormData}
            formParams={modelParams}
          /> */}
        </Col>
        <Col xl={12} className="pt-2 d-flex flex-column">
          <SimulationResults
            simulationResults={simulationResults}
            queryParams={{ ...formData }}
            setSimulationResults={setSimulationResults}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SimulationPage;
