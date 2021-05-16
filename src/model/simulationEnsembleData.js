const modelTypeEnum = Object.freeze({
  pl: 0,
  bt: 1,
  ac: 2,
  cs: 3,
});

const simulationParams = [
  {
    id: "numElectionsEachSimulation",
    dataid: "numElectionsEachSimulation",
    initialValue: 1,
  },
  {
    id: "modelsToSimulate",
    dataid: "modelsToSimulate",
    initialValue: Object.values(modelTypeEnum),
  },
];

const simulationInputs = [
  {
    id: "numElectionsEachSimulation",
    dataid: "numElectionsEachSimulation",
    type: "number",
    min: 1,
    max: 4,
    label: "Elections to simulate, per model",
    helperText: "Max 4",
    info:
      "The number of elections to simulate with these parameters, for each model type.",
  },
  {
    id: "modelsToSimulate",
    dataid: "modelsToSimulate",
    // padding: false,
    type: "checkbox",
    label: `RCV models to use`,
    updateTransform: (newValue, id, formData) => {
      // Need to convert incoming value to int
      const intValue = parseInt(newValue);
      const prevValues = formData[id];
      // If this value was already checked, remove it
      if (prevValues.includes(intValue)) {
        return prevValues.filter((item) => item !== intValue);
      }
      // Else, add it to the list of checked values
      prevValues.push(intValue);
      return prevValues;
    },
    options: [
      {
        id: "pl",
        value: modelTypeEnum["pl"],
        label: `Plackett-Luce`,
      },
      {
        id: "bt",
        value: modelTypeEnum["bt"],
        label: `Bradley-Terry`,
      },
      {
        id: "ac",
        value: modelTypeEnum["ac"],
        label: `Alternating Crossover`,
      },
      {
        id: "cs",
        value: modelTypeEnum["cs"],
        label: `Cambridge Sampler`,
      },
    ],
  },
];

export { simulationParams, simulationInputs };
