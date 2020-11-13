import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ElectionParameters from "../ElectionParameters";
import ModelParameters from "../ModelParameters";
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
    id: `popMajParty`,
    name: `popMajParty`,
    initialValue: 70,
  },
  {
    id: `majCandidates`,
    name: `majCandidates`,
    initialValue: 4,
  },
  {
    id: `percentageMajMajSupport`,
    name: `percentageMajMajSupport`,
    initialValue: 70,
  },
  {
    id: `minCandidates`,
    name: `minCandidates`,
    initialValue: 4,
  },
  {
    id: `percentageMinMinSupport`,
    name: `percentageMinMinSupport`,
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
    id: `popMajParty`,
    name: `popMajParty`,
    type: "slider",
    step: 1,
    min: 1,
    max: 100,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `Percent of voters who are ${mmLabels.maj}`,
    helperText: `Max 100%`,
    info: `Assuming all members of the population vote for either ${mmLabels.maj}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.maj}
    `,
  },
  {
    id: `popMinParty`,
    name: `popMajParty`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 100,
    updateTransform: (value) => 100 - value,
    fullWidth: true,
    minLabel: `1%`,
    maxLabel: `100%`,
    label: `Percent of voters who are ${mmLabels.min}`,
    helperText: `Max 100%`,
    info: `Assuming all members of the population vote for either ${mmLabels.min}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    `,
  },
  // Information about the maj candidates and maj-voter support
  {
    id: `majCandidates`,
    name: `majCandidates`,
    type: "number",
    step: 1,
    min: 1,
    max: 7,
    label: `Number of ${mmLabels.maj} candidates running`,
    helperText: "Max 7",
    info: `The number of ${mmLabels.maj} candidates running for election in each simulation`,
  },
  {
    id: `percentageMajMajSupport`,
    name: `percentageMajMajSupport`,
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
    id: `percentageMajMinSupport`,
    name: `percentageMajMajSupport`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 100,
    updateTransform: (value) => 100 - value,
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
    id: `minCandidates`,
    name: `minCandidates`,
    type: "number",
    step: 1,
    min: 1,
    max: 7,
    label: `Number of ${mmLabels.min} candidates running`,
    helperText: "Max 7",
    info: `The number of ${mmLabels.min} candidates running for election in each simulation`,
  },
  {
    id: `percentageMinMinSupport`,
    name: `percentageMinMinSupport`,
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
    id: `percentageMinMajSupport`,
    name: `percentageMinMinSupport`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 100,
    updateTransform: (value) => 100 - value,
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
    id: `majMajAffinity`,
    name: `majMajAffinity`,
    initialValue: 0,
  },
  {
    id: `majMinAffinity`,
    name: `majMinAffinity`,
    initialValue: 0,
  },
  {
    id: `minMinAffinity`,
    name: `minMinAffinity`,
    initialValue: 0,
  },
  {
    id: `minMajAffinity`,
    name: `minMajAffinity`,
    initialValue: 0,
  },
];

const modelInputs = {
  luce: [
    {
      id: `majMajAffinity`,
      name: `majMajAffinity`,
      type: "ticked-slider",
      step: 0.5,
      min: -1,
      max: 1.0,
      label: `Among all ${mmLabels.maj} voters, support for ${mmLabels.maj} candidates is...`,
      minLabel: "Split evenly",
      maxLabel: "Leaning towards one candidate",
      info: `This value provides information to the model on how even or polarized support
      is among all ${mmLabels.maj} voters for ${mmLabels.maj} candidates. If support is even,
      there are no stand out candidates and all are liked evenly. If support is polarized,
      there is a front-runner ${mmLabels.maj} candidate among all ${mmLabels.maj} voters.`,
    },
    {
      id: `majMinAffinity`,
      name: `majMinAffinity`,
      type: "ticked-slider",
      step: 0.5,
      min: -1,
      max: 1,
      label: `Among all ${mmLabels.maj} voters, support for ${mmLabels.min} candidates is...`,
      minLabel: "Split evenly",
      maxLabel: "Leaning towards one candidate",
      info: `This value provides information to the model on how even or polarized support
      is among all ${mmLabels.maj} voters for ${mmLabels.min} candidates. If support is even,
      there are no stand out candidates and all are liked evenly. If support is polarized,
      there is a front-runner ${mmLabels.min} among all ${mmLabels.maj} candidates.`,
    },
    {
      id: `minMinAffinity`,
      name: `minMinAffinity`,
      type: "ticked-slider",
      step: 0.5,
      min: -1,
      max: 1,
      label: `Among all ${mmLabels.min} voters, support for ${mmLabels.min} candidates is...`,
      minLabel: "Split evenly",
      maxLabel: "Leaning towards one candidate",
      info: `This value provides information to the model on how even or polarized support
      is among all ${mmLabels.min} voters for ${mmLabels.min} candidates. If support is even,
      there are no stand out candidates and all are liked evenly. If support is polarized,
      there is a front-runner ${mmLabels.min} among all ${mmLabels.min} voters.`,
    },
    {
      id: `minMajAffinity`,
      name: `minMajAffinity`,
      type: "ticked-slider",
      step: 0.5,
      min: -1,
      max: 1,
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
    electionParams.map((p) => ({
      name: p.name,
      value: p.initialValue,
    })),
    modelParams.map((p) => ({
      name: p.name,
      value: p.initialValue,
    }))
  );
  // Iterate over all params to set our initial values appropriately
  const initialState = {};
  paramKeys.forEach((p) => {
    initialState[p.name] = p.value;
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
