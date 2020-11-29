const simulationParams = [
  {
    id: "numElectionsEachSimulation",
    dataid: "numElectionsEachSimulation",
    initialValue: 1,
  },
];

const simulationInputs = [
  {
    id: "numElectionsEachSimulation",
    dataid: "numElectionsEachSimulation",
    type: "number",
    min: 1,
    max: 15,
    fullWidth: true,
    padding: false,
    label: "Elections to Simulate",
    helperText: "Max 15",
    info: "The number of elections to simulate with these parameters",
  },
];

function getElectionSimulationCount(formData) {
  return parseInt(formData["numElectionsEachSimulation"]);
}

export { simulationParams, simulationInputs, getElectionSimulationCount };
