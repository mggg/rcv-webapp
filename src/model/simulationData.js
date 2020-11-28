const simulationParams = [
  {
    id: "numSimulations",
    dataid: "numSimulations",
    initialValue: 1,
  },
];

const simulationInputs = [
  {
    id: "numSimulations",
    dataid: "numSimulations",
    type: "number",
    min: 1,
    max: 15,
    label: "Simulations to Run",
    helperText: "Max 15",
    info: "The number of simulations to run in with these parameters",
  },
];

export { simulationParams, simulationInputs };
