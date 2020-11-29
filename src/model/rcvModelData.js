import { mmLabels } from "./constants";
import _ from "lodash";

const models = [
  {
    id: "plackettLuce",
    dataid: "plackettLuce",
    display: "Plackett-Luce",
    apiEndpoint: "plackettLuce",
  },
  {
    id: "bradleyTerry",
    dataid: "bradleyTerry",
    display: "Bradley-Terry",
    apiEndpoint: "bradleyTerry",
  },
  {
    id: "alternatingCrossover",
    dataid: "alternatingCrossover",
    display: "Alternating-Crossover",
    apiEndpoint: "alternatingCrossover",
  },
  {
    id: "cambridgeSampler",
    dataid: "cambridgeSampler",
    display: "Cambridge Sampler",
    apiEndpoint: "cambridgeSampler",
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
    initialValue: 1,
  },
  {
    id: `majMinCandidateAgreement-alternatingCrossover`,
    dataid: `majMinCandidateAgreement-alternatingCrossover`,
    initialValue: 1,
  },
  {
    id: `minMinCandidateAgreement-alternatingCrossover`,
    dataid: `minMinCandidateAgreement-alternatingCrossover`,
    initialValue: 1,
  },
  {
    id: `minMajCandidateAgreement-alternatingCrossover`,
    dataid: `minMajCandidateAgreement-alternatingCrossover`,
    initialValue: 1,
  },
  ////////////////////////////
  // CambridgeSampler
  {
    id: `majMajCandidateAgreement-cambridgeSampler`,
    dataid: `majMajCandidateAgreement-cambridgeSampler`,
    initialValue: 1,
  },
  {
    id: `majMinCandidateAgreement-cambridgeSampler`,
    dataid: `majMinCandidateAgreement-cambridgeSampler`,
    initialValue: 1,
  },
  {
    id: `minMinCandidateAgreement-cambridgeSampler`,
    dataid: `minMinCandidateAgreement-cambridgeSampler`,
    initialValue: 1,
  },
  {
    id: `minMajCandidateAgreement-cambridgeSampler`,
    dataid: `minMajCandidateAgreement-cambridgeSampler`,
    initialValue: 1,
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
        value: 1,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-majMajCandidateAgreement-alternatingCrossover",
        value: 0,
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
        value: 1,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-majMinCandidateAgreement-alternatingCrossover",
        value: 0,
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
        value: 1,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-minMinCandidateAgreement-alternatingCrossover",
        value: 0,
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
        value: 1,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-minMajCandidateAgreement-alternatingCrossover",
        value: 0,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.maj} candidates differently`,
      },
    ],
  },
  /////////////1//////////////
  // Cambridge-Sampler
  {
    id: `majMajCandidateAgreement-cambridgeSampler`,
    dataid: `majMajCandidateAgreement-cambridgeSampler`,
    type: "radio",
    label: `Among ${mmLabels.maj} voters, does everyone rank ${mmLabels.maj} candidates the same way?`,
    options: [
      {
        id: "uniform-majMajCandidateAgreement-cambridgeSampler",
        value: 1,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-majMajCandidateAgreement-cambridgeSampler",
        value: 0,
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
        value: 1,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-majMinCandidateAgreement-cambridgeSampler",
        value: 0,
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
        value: 1,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-minMinCandidateAgreement-cambridgeSampler",
        value: 0,
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
        value: 1,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-minMajCandidateAgreement-cambridgeSampler",
        value: 0,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.maj} candidates differently`,
      },
    ],
  },
];

// Given a list of inputs, filter down to only those that have a given modelType
function filterInputsByModelType(inputs, modelType) {
  return inputs.filter((input) => {
    const id = input.id;
    const idSplitFromType = id.split("-");
    const hasModelType = Boolean(idSplitFromType[1]);
    return hasModelType && idSplitFromType[1] === modelType;
  });
}

// Given a formDataObject, filter down to inputs that have no modelType or have a given modelType
function filterDataByModelTypes(formObject, modelType) {
  return _.pick(
    formObject,
    Object.keys(formObject).filter((key) => {
      const keySplitFromType = key.split("-");
      const hasModelType = Boolean(keySplitFromType[1]);
      // Get keys that either don't have a model type
      //  or have a model type that matches this modelType
      return (
        !hasModelType || (hasModelType && keySplitFromType[1] === modelType)
      );
    })
  );
}

function getApiEndpoint(selectedModelDataid) {
  return models.find((model) => model.dataid === selectedModelDataid)
    .apiEndpoint;
}

export {
  models,
  modelParams,
  modelInputs,
  filterInputsByModelType,
  filterDataByModelTypes,
  getApiEndpoint,
};
