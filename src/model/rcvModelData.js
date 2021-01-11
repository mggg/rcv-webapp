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
    display: "Alternating Crossover",
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
  ////////////////////////////////
  // PlackettLuce & BradleyTerry
  {
    id: `majMajAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `majMajAffinity`,
    initialValue: 0,
  },
  {
    id: `majMinAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `majMinAffinity`,
    initialValue: 0,
  },
  {
    id: `minMinAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `minMinAffinity`,
    initialValue: 0,
  },
  {
    id: `minMajAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `minMajAffinity`,
    initialValue: 0,
  },
  ////////////////////////////////////////////
  // AlternatingCrossover & CambridgeSampler
  {
    id: `majMajCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `majMajCandidateAgreement`,
    initialValue: 1,
  },
  {
    id: `majMinCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `majMinCandidateAgreement`,
    initialValue: 1,
  },
  {
    id: `minMinCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `minMinCandidateAgreement`,
    initialValue: 1,
  },
  {
    id: `minMajCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `minMajCandidateAgreement`,
    initialValue: 1,
  },
];

const modelInputs = [
  ////////////////////////////
  // PlackettLuce
  {
    id: `majMajAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `majMajAffinity`,
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
    id: `majMinAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `majMinAffinity`,
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
    id: `minMinAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `minMinAffinity`,
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
    id: `minMajAffinity`,
    modelsUsed: ["bradleyTerry", "plackettLuce"],
    dataid: `minMajAffinity`,
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
    id: `majMajCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `majMajCandidateAgreement`,
    type: "radio",
    label: `Among ${mmLabels.maj} voters, does everyone rank ${mmLabels.maj} candidates the same way?`,
    options: [
      {
        id: "uniform-majMajCandidateAgreement",
        value: 1,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-majMajCandidateAgreement",
        value: 0,
        label: `No, ${mmLabels.maj} voters rank ${mmLabels.maj} candidates randomly`,
      },
    ],
  },
  {
    id: `majMinCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `majMinCandidateAgreement`,
    type: "radio",
    label: `Among ${mmLabels.maj} voters, does everyone rank ${mmLabels.min} candidates the same way?`,
    options: [
      {
        id: "uniform-majMinCandidateAgreement",
        value: 1,
        label: `Yes, ${mmLabels.maj} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-majMinCandidateAgreement",
        value: 0,
        label: `No, ${mmLabels.maj} voters rank ${mmLabels.min} candidates randomly`,
      },
    ],
  },
  {
    id: `minMajCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `minMajCandidateAgreement`,
    type: "radio",
    label: `Among ${mmLabels.min} voters, does everyone rank ${mmLabels.maj} candidates the same way?`,
    options: [
      {
        id: "uniform-minMajCandidateAgreement",
        value: 1,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.maj} candidates the same way`,
      },
      {
        id: "random-minMajCandidateAgreement",
        value: 0,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.maj} candidates randomly`,
      },
    ],
  },
  {
    id: `minMinCandidateAgreement`,
    modelsUsed: ["alternatingCrossover", "cambridgeSampler"],
    dataid: `minMinCandidateAgreement`,
    type: "radio",
    label: `Among ${mmLabels.min} voters, does everyone rank ${mmLabels.min} candidates the same way?`,
    options: [
      {
        id: "uniform-minMinCandidateAgreement",
        value: 1,
        label: `Yes, ${mmLabels.min} voters rank ${mmLabels.min} candidates the same way`,
      },
      {
        id: "random-minMinCandidateAgreement",
        value: 0,
        label: `No, ${mmLabels.min} voters rank ${mmLabels.min} candidates randomly`,
      },
    ],
  },
];

// Given a list of inputs, filter down to only those that have a given modelType
function filterInputsByModelType(inputs, modelType) {
  const modelDataid = getModelFromDisplay(modelType).dataid;
  return inputs.filter((input) => {
    return input.modelsUsed.includes(modelDataid);
  });
}

// Given a formDataObject, filter down to inputs that have no modelType or have a given modelType
function filterDataByModelTypes(formObject, modelType) {
  const modelDataid = getModelFromDisplay(modelType).dataid;
  return _.pick(
    formObject,
    Object.keys(formObject).filter((key) => {
      const keySplitFromType = key.split("-");
      const hasModelType = Boolean(keySplitFromType[1]);
      // Get keys that either don't have a model type
      //  or have a model type that matches this modelType
      return (
        !hasModelType || (hasModelType && keySplitFromType[1] === modelDataid)
      );
    })
  );
}
function getModelFromDisplay(selectedModelDisplay) {
  return models.find((model) => model.display === selectedModelDisplay);
}

function getApiEndpoint(selectedModel) {
  return getModelFromDisplay(selectedModel).apiEndpoint;
}

export {
  models,
  modelParams,
  modelInputs,
  filterInputsByModelType,
  filterDataByModelTypes,
  getApiEndpoint,
};
