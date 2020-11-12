import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ElectionParameters from "../ElectionParameters";
import ModelParameters from "../modelParameters/ModelParameters";
import SimulationResults from "../SimulationResults";

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
  {
    id: `${mmLabels.maj}Candidates`,
    name: `${mmLabels.maj}Candidates`,
    initialValue: 4,
  },
  {
    id: `percentage${mmLabels.maj}${mmLabels.maj}Support`,
    name: `percentage${mmLabels.maj}${mmLabels.maj}Support`,
    initialValue: 70,
  },
  {
    id: `${mmLabels.min}Candidates`,
    name: `${mmLabels.min}Candidates`,
    initialValue: 4,
  },
  {
    id: `percentage${mmLabels.min}${mmLabels.min}Support`,
    name: `percentage${mmLabels.min}${mmLabels.min}Support`,
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
  // Information about the maj candidates and maj-voter support
  {
    id: `${mmLabels.maj}Candidates`,
    name: `${mmLabels.maj}Candidates`,
    type: "number",
    step: 1,
    min: 1,
    max: 7,
    label: `Number of ${mmLabels.maj} candidates running`,
    helperText: "Max 30",
    info: `The number of ${mmLabels.maj} candidates running for election in each simulation`,
  },
  {
    id: `percentage${mmLabels.maj}${mmLabels.maj}Support`,
    name: `percentage${mmLabels.maj}${mmLabels.maj}Support`,
    type: "slider",
    step: 1,
    min: 1,
    max: 100,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `${mmLabels.maj} voters typically vote for ${mmLabels.maj} candidates this percent of the time...`,
    helperText: `Max 100%`,
    // info: `Assuming all members of the population vote for either ${mmLabels.maj}
    // or ${mmLabels.min}, which percentage votes for ${mmLabels.maj}
    // `,
  },
  {
    id: `percentage${mmLabels.maj}${mmLabels.min}Support`,
    name: `percentage${mmLabels.maj}${mmLabels.maj}Support`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 100,
    fullWidth: true,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `${mmLabels.maj} voters occasionally vote for ${mmLabels.min} candidates this percent of the time...`,
    helperText: `Max 100%`,
    // info: `Assuming all members of the population vote for either ${mmLabels.min}
    // or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    // `,
  },
  // Information about the min candidates and min-voter support
  {
    id: `${mmLabels.min}Candidates`,
    name: `${mmLabels.min}Candidates`,
    type: "number",
    step: 1,
    min: 1,
    max: 7,
    label: `Number of ${mmLabels.min} candidates running`,
    helperText: "Max 30",
    info: `The number of ${mmLabels.min} candidates running for election in each simulation`,
  },
  {
    id: `percentage${mmLabels.min}${mmLabels.min}Support`,
    name: `percentage${mmLabels.min}${mmLabels.min}Support`,
    type: "slider",
    step: 1,
    min: 1,
    max: 100,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `${mmLabels.min} voters typically vote for ${mmLabels.min} candidates this percent of the time...`,
    helperText: `Max 100%`,
    // info: `Assuming all members of the population vote for either ${mmLabels.min}
    // or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    // `,
  },
  {
    id: `percentage${mmLabels.min}${mmLabels.maj}Support`,
    name: `percentage${mmLabels.min}${mmLabels.min}Support`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 100,
    fullWidth: true,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `${mmLabels.min} voters occasionally vote for ${mmLabels.maj} candidates this percent of the time...`,
    helperText: `Max 100%`,
    // info: `Assuming all members of the population vote for either ${mmLabels.min}
    // or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    // `,
  },
];

const modelParams = [
  {
    id: `${mmLabels.maj}${mmLabels.maj}Affinity`,
    name: `${mmLabels.maj}${mmLabels.maj}Affinity`,
    initialValue: 1,
  },
  {
    id: `${mmLabels.maj}${mmLabels.min}Affinity`,
    name: `${mmLabels.maj}${mmLabels.min}Affinity`,
    initialValue: 1,
  },
  {
    id: `${mmLabels.min}${mmLabels.min}Affinity`,
    name: `${mmLabels.min}${mmLabels.min}Affinity`,
    initialValue: 1,
  },
  {
    id: `${mmLabels.min}${mmLabels.maj}Affinity`,
    name: `${mmLabels.min}${mmLabels.maj}Affinity`,
    initialValue: 1,
  },
];

const modelInputs = {
  luce: [
    {
      id: `${mmLabels.maj}${mmLabels.maj}Affinity`,
      name: `${mmLabels.maj}${mmLabels.maj}Affinity`,
      type: "ticked-slider",
      step: 0.1,
      min: 0.5,
      max: 2.0,
      label: `Among all ${mmLabels.maj} voters, support for ${mmLabels.maj} candidates is...`,
      minLabel: "Split evenly",
      maxLabel: "Leaning towards one candidate",
      info: `This value provides information to the model on how even or polarized support
      is among all ${mmLabels.maj} voters for ${mmLabels.maj} candidates. If support is even,
      there are no stand out candidates and all are liked evenly. If support is polarized,
      there is a front-runner ${mmLabels.maj} candidate among all ${mmLabels.maj} voters.`,
    },
    {
      id: `${mmLabels.maj}${mmLabels.min}Affinity`,
      name: `${mmLabels.maj}${mmLabels.min}Affinity`,
      type: "ticked-slider",
      step: 0.1,
      min: 0.5,
      max: 2.0,
      label: `Among all ${mmLabels.maj} voters, support for ${mmLabels.min} candidates is...`,
      minLabel: "Split evenly",
      maxLabel: "Leaning towards one candidate",
      info: `This value provides information to the model on how even or polarized support
      is among all ${mmLabels.maj} voters for ${mmLabels.min} candidates. If support is even,
      there are no stand out candidates and all are liked evenly. If support is polarized,
      there is a front-runner ${mmLabels.min} among all ${mmLabels.maj} candidates.`,
    },
    {
      id: `${mmLabels.min}${mmLabels.min}Affinity`,
      name: `${mmLabels.min}${mmLabels.min}Affinity`,
      type: "ticked-slider",
      step: 0.1,
      min: 0.5,
      max: 2.0,
      label: `Among all ${mmLabels.min} voters, support for ${mmLabels.min} candidates is...`,
      minLabel: "Split evenly",
      maxLabel: "Leaning towards one candidate",
      info: `This value provides information to the model on how even or polarized support
      is among all ${mmLabels.min} voters for ${mmLabels.min} candidates. If support is even,
      there are no stand out candidates and all are liked evenly. If support is polarized,
      there is a front-runner ${mmLabels.min} among all ${mmLabels.min} voters.`,
    },
    {
      id: `${mmLabels.min}${mmLabels.maj}Affinity`,
      name: `${mmLabels.min}${mmLabels.maj}Affinity`,
      type: "ticked-slider",
      step: 0.1,
      min: 0.5,
      max: 2.0,
      label: `Among all ${mmLabels.min} voters, support for ${mmLabels.maj} candidates is...`,
      minLabel: "Split evenly",
      maxLabel: "Leaning towards one candidate",
      info: `This value provides information to the model on how even or polarized support
      is among all ${mmLabels.min} voters for ${mmLabels.maj} candidates. If support is even,
      there are no stand out candidates and all are liked evenly. If support is polarized,
      there is a front-runner ${mmLabels.maj} among Majority voters.`,
    },
  ],
  bradleyTerry: [],
  alternatingCrossover: [],
  cambridgeSampler: [],
};

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
            formInputs={electionInputs}
          />
        </Col>
        <Col className="pt-2 d-flex flex-column">
          <ModelParameters
            formData={formData}
            setFormData={setFormData}
            formInputs={modelInputs}
          />
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
