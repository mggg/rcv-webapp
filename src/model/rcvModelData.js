import { mmLabels } from "./constants";

const models = [
  {
    id: "plackettLuce",
    dataid: "plackettLuce",
    display: "Plackett-Luce",
  },
  {
    id: "bradleyTerry",
    dataid: "bradleyTerry",
    display: "Bradley-Terry",
  },
  {
    id: "alternatingCrossover",
    dataid: "alternatingCrossover",
    display: "Alternating-Crossover",
  },
  {
    id: "cambridgeSampler",
    dataid: "cambridgeSampler",
    display: "Cambridge Sampler",
  },
];

const modelParams = [
  ////////////////////////////
  // PlackettLuce
  {
    id: `majMajAffinity-plackettLuce`,
    dataid: `majMajAffinity-plackettLuce`,
    initialValue: 0,
  },
  {
    id: `majMinAffinity-plackettLuce`,
    dataid: `majMinAffinity-plackettLuce`,
    initialValue: 0,
  },
  {
    id: `minMinAffinity-plackettLuce`,
    dataid: `minMinAffinity-plackettLuce`,
    initialValue: 0,
  },
  {
    id: `minMajAffinity-plackettLuce`,
    dataid: `minMajAffinity-plackettLuce`,
    initialValue: 0,
  },
  ////////////////////////////
  // BradleyTerry
  {
    id: `majMajAffinity-bradleyTerry`,
    dataid: `majMajAffinity-bradleyTerry`,
    initialValue: 0,
  },
  {
    id: `majMinAffinity-bradleyTerry`,
    dataid: `majMinAffinity-bradleyTerry`,
    initialValue: 0,
  },
  {
    id: `minMinAffinity-bradleyTerry`,
    dataid: `minMinAffinity-bradleyTerry`,
    initialValue: 0,
  },
  {
    id: `minMajAffinity-bradleyTerry`,
    dataid: `minMajAffinity-bradleyTerry`,
    initialValue: 0,
  },
  ////////////////////////////
  // AlternatingCrossover
  {
    id: `majMajCandidateAgreement-alternatingCrossover`,
    dataid: `majMajCandidateAgreement-alternatingCrossover`,
    initialValue: 0,
  },
  {
    id: `majMinCandidateAgreement-alternatingCrossover`,
    dataid: `majMinCandidateAgreement-alternatingCrossover`,
    initialValue: 0,
  },
  {
    id: `minMinCandidateAgreement-alternatingCrossover`,
    dataid: `minMinCandidateAgreement-alternatingCrossover`,
    initialValue: 0,
  },
  {
    id: `minMajCandidateAgreement-alternatingCrossover`,
    dataid: `minMajCandidateAgreement-alternatingCrossover`,
    initialValue: 0,
  },
  ////////////////////////////
  // CambridgeSampler
  {
    id: `majMajCandidateAgreement-cambridgeSampler`,
    dataid: `majMajCandidateAgreement-cambridgeSampler`,
    initialValue: 0,
  },
  {
    id: `majMinCandidateAgreement-cambridgeSampler`,
    dataid: `majMinCandidateAgreement-cambridgeSampler`,
    initialValue: 0,
  },
  {
    id: `minMinCandidateAgreement-cambridgeSampler`,
    dataid: `minMinCandidateAgreement-cambridgeSampler`,
    initialValue: 0,
  },
  {
    id: `minMajCandidateAgreement-cambridgeSampler`,
    dataid: `minMajCandidateAgreement-cambridgeSampler`,
    initialValue: 0,
  },
];

const modelInputs = [
  ////////////////////////////
  // PlackettLuce
  {
    id: `majMajAffinity-plackettLuce`,
    dataid: `majMajAffinity-plackettLuce`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1.0,
    label: `Among ${mmLabels.maj} voters, support for ${mmLabels.maj} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  {
    id: `majMinAffinity-plackettLuce`,
    dataid: `majMinAffinity-plackettLuce`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1,
    label: `Among ${mmLabels.maj} voters, support for ${mmLabels.min} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  {
    id: `minMinAffinity-plackettLuce`,
    dataid: `minMinAffinity-plackettLuce`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1,
    label: `Among ${mmLabels.min} voters, support for ${mmLabels.min} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  {
    id: `minMajAffinity-plackettLuce`,
    dataid: `minMajAffinity-plackettLuce`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1,
    label: `Among ${mmLabels.min} voters, support for ${mmLabels.maj} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  ////////////////////////////
  // BradleyTerry
  {
    id: `majMajAffinity-bradleyTerry`,
    dataid: `majMajAffinity-bradleyTerry`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1.0,
    label: `Among ${mmLabels.maj} voters, support for ${mmLabels.maj} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  {
    id: `majMinAffinity-bradleyTerry`,
    dataid: `majMinAffinity-bradleyTerry`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1,
    label: `Among ${mmLabels.maj} voters, support for ${mmLabels.min} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  {
    id: `minMinAffinity-bradleyTerry`,
    dataid: `minMinAffinity-bradleyTerry`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1,
    label: `Among ${mmLabels.min} voters, support for ${mmLabels.min} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  {
    id: `minMajAffinity-bradleyTerry`,
    dataid: `minMajAffinity-bradleyTerry`,
    type: "ticked-slider",
    fullWidth: true,
    step: 0.5,
    min: -1,
    max: 1,
    label: `Among ${mmLabels.min} voters, support for ${mmLabels.maj} candidates is...`,
    minLabel: "Split evenly",
    maxLabel: "Leaning towards one candidate",
  },
  ////////////////////////////
  // AlternatingCrossover
  {
    id: `majMajCandidateAgreement-alternatingCrossover`,
    dataid: `majMajCandidateAgreement-alternatingCrossover`,
    type: "radio",
    label: `Among ${mmLabels.maj} voters, does everyone rank ${mmLabels.maj} candidates the same way?`,
    options: [
      {
        id: "uniform-majMajCandidateAgreement-alternatingCrossover",
        value: 0,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-majMajCandidateAgreement-alternatingCrossover",
        value: 1,
        label: `No, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates differently`,
      },
    ],
  },
  {
    id: `majMinCandidateAgreement-alternatingCrossover`,
    dataid: `majMinCandidateAgreement-alternatingCrossover`,
    type: "radio",
    label: `Among ${mmLabels.maj} voters, does everyone rank ${mmLabels.min} candidates the same way?`,
    options: [
      {
        id: "uniform-majMinCandidateAgreement-alternatingCrossover",
        value: 0,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-majMinCandidateAgreement-alternatingCrossover",
        value: 1,
        label: `No, ${mmLabels.maj} voters rank ${mmLabels.min} candidates differently`,
      },
    ],
  },
  {
    id: `minMinCandidateAgreement-alternatingCrossover`,
    dataid: `minMinCandidateAgreement-alternatingCrossover`,
    type: "radio",
    label: `Among ${mmLabels.min} voters, does everyone rank ${mmLabels.min} candidates the same way?`,
    options: [
      {
        id: "uniform-minMinCandidateAgreement-alternatingCrossover",
        value: 0,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-minMinCandidateAgreement-alternatingCrossover",
        value: 1,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.min} candidates differently`,
      },
    ],
  },
  {
    id: `minMajCandidateAgreement-alternatingCrossover`,
    dataid: `minMajCandidateAgreement-alternatingCrossover`,
    type: "radio",
    label: `Among ${mmLabels.min} voters, does everyone rank ${mmLabels.maj} candidates the same way?`,
    options: [
      {
        id: "uniform-minMajCandidateAgreement-alternatingCrossover",
        value: 0,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-minMajCandidateAgreement-alternatingCrossover",
        value: 1,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.maj} candidates differently`,
      },
    ],
  },
  ////////////////////////////
  // Cambridge-Sampler
  {
    id: `majMajCandidateAgreement-cambridgeSampler`,
    dataid: `majMajCandidateAgreement-cambridgeSampler`,
    type: "radio",
    label: `Among ${mmLabels.maj} voters, does everyone rank ${mmLabels.maj} candidates the same way?`,
    options: [
      {
        id: "uniform-majMajCandidateAgreement-cambridgeSampler",
        value: 0,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-majMajCandidateAgreement-cambridgeSampler",
        value: 1,
        label: `No, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates differently`,
      },
    ],
  },
  {
    id: `majMinCandidateAgreement-cambridgeSampler`,
    dataid: `majMinCandidateAgreement-cambridgeSampler`,
    type: "radio",
    label: `Among ${mmLabels.maj} voters, does everyone rank ${mmLabels.min} candidates the same way?`,
    options: [
      {
        id: "uniform-majMinCandidateAgreement-cambridgeSampler",
        value: 0,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-majMinCandidateAgreement-cambridgeSampler",
        value: 1,
        label: `No, ${mmLabels.maj} voters rank ${mmLabels.min} candidates differently`,
      },
    ],
  },
  {
    id: `minMinCandidateAgreement-cambridgeSampler`,
    dataid: `minMinCandidateAgreement-cambridgeSampler`,
    type: "radio",
    label: `Among ${mmLabels.min} voters, does everyone rank ${mmLabels.min} candidates the same way?`,
    options: [
      {
        id: "uniform-minMinCandidateAgreement-cambridgeSampler",
        value: 0,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-minMinCandidateAgreement-cambridgeSampler",
        value: 1,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.min} candidates differently`,
      },
    ],
  },
  {
    id: `minMajCandidateAgreement-cambridgeSampler`,
    dataid: `minMajCandidateAgreement-cambridgeSampler`,
    type: "radio",
    label: `Among ${mmLabels.min} voters, does everyone rank ${mmLabels.maj} candidates the same way?`,
    options: [
      {
        id: "uniform-minMajCandidateAgreement-cambridgeSampler",
        value: 0,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-minMajCandidateAgreement-cambridgeSampler",
        value: 1,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.maj} candidates differently`,
      },
    ],
  },
];

function filterInputsByModelType(inputs, modelType) {
  return inputs.filter((input) => {
    const id = input.id;
    const idSplitFromType = id.split("-");
    return idSplitFromType[1] && idSplitFromType[1] === modelType;
  });
}

export { models, modelParams, modelInputs, filterInputsByModelType };
