import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ElectionParameters from "./ElectionParameters";
// import ModelParameters from "./ModelParameters";
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
    initialValue: 1000,
  },
  {
    id: "seatsOpen",
    name: "seatsOpen",
    initialValue: 10,
  },
  {
    id: `pop${mmLabels.maj}Party`,
    name: `pop${mmLabels.maj}Party`,
    initialValue: 70,
  },
];

const electionInputs = [
  {
    id: "ballots",
    name: "ballots",
    type: "number",
    step: 10,
    min: 10,
    max: 10000,
    label: "Voter Population",
    helperText: "Max 10,000",
    info: "The number of voters in each election simulation",
  },
  {
    id: "seatsOpen",
    name: "seatsOpen",
    type: "number",
    step: 1,
    min: 1,
    max: 30,
    label: "Spots Up For Election",
    helperText: "Max 30",
    info: "The number of open seats open for election in each simulation",
  },
  {
    id: `pop${mmLabels.maj}Party`,
    name: `pop${mmLabels.maj}Party`,
    type: "slider",
    step: 1,
    min: 1,
    max: 100,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `Percentage voting ${mmLabels.maj}`,
    helperText: `Max 100%`,
    info: `Assuming all members of the population vote for either ${mmLabels.maj}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.maj}
    `,
  },
  {
    id: `pop${mmLabels.min}Party`,
    name: `pop${mmLabels.maj}Party`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 100,
    fullWidth: true,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `Percentage voting ${mmLabels.min}`,
    helperText: `Max 100%`,
    info: `Assuming all members of the population vote for either ${mmLabels.min}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    `,
  },
];

// const modelParams = [
//   {
//     id: "majorityMajorityAffinity",
//     name: "majorityMajorityAffinity",
//     type: "slider",
//     initialValue: 1,
//     step: 0.1,
//     min: 0.5,
//     max: 2.0,
//     minLabel: "Fairly even across options",
//     maxLabel: "",
//     label: `Among ${mmLabels.maj} voters, support for ${mmLabels.maj} candidates is...`,
//     info: `This value provides information to the model on how even or polarized support
//     is among ${mmLabels.maj} voters for ${mmLabels.maj} candidates. If support is even,
//     there are no stand out candidates and all are liked evenly. If support is polarized,
//     there is a front-runner ${mmLabels.maj} candidate among ${mmLabels.maj} voters.`,
//   },
//   {
//     id: "majorityMinorityAffinity",
//     name: "majorityMinorityAffinity",
//     type: "slider",
//     initialValue: 1,
//     step: 0.1,
//     min: 0.5,
//     max: 2.0,
//     minLabel: "Fairly even across options",
//     maxLabel: "",
//     label: `Among ${mmLabels.maj} voters, support for ${mmLabels.min} candidates is...`,
//     info: `This value provides information to the model on how even or polarized support
//     is among ${mmLabels.maj} voters for ${mmLabels.min} candidates. If support is even,
//     there are no stand out candidates and all are liked evenly. If support is polarized,
//     there is a front-runner ${mmLabels.min} among ${mmLabels.maj} candidates.`,
//   },
//   {
//     id: "minorityMinorityAffinity",
//     name: "minorityMinorityAffinity",
//     type: "slider",
//     initialValue: 1,
//     step: 0.1,
//     min: 0.5,
//     max: 2.0,
//     minLabel: "Fairly even across options",
//     maxLabel: "",
//     label: `Among ${mmLabels.min} voters, support for ${mmLabels.min} candidates is...`,
//     info: `This value provides information to the model on how even or polarized support
//      is among ${mmLabels.min} voters for ${mmLabels.min} candidates. If support is even,
//      there are no stand out candidates and all are liked evenly. If support is polarized,
//      there is a front-runner ${mmLabels.min} among ${mmLabels.min} voters.`,
//   },
//   {
//     id: "minorityMajorityAffinity",
//     name: "minorityMajorityAffinity",
//     type: "slider",
//     initialValue: 1,
//     step: 0.1,
//     min: 0.5,
//     max: 2.0,
//     minLabel: "Fairly even across options",
//     maxLabel: "",
//     label: `Among ${mmLabels.min} voters, support for ${mmLabels.maj} candidates is...`,
//     info: `This value provides information to the model on how even or polarized support
//      is among ${mmLabels.min} voters for ${mmLabels.maj} candidates. If support is even,
//      there are no stand out candidates and all are liked evenly. If support is polarized,
//      there is a front-runner ${mmLabels.maj} among Majority voters.`,
//   },
// ];

function SimulationPage() {
  const paramKeys = [].concat(
    electionParams.map((p) => ({ key: p.name, value: p.initialValue }))
    // modelParams.map((p) => ({ key: p.name, value: p.initialValue }))
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
            formInputs={electionInputs}
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
