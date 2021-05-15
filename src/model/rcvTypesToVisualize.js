const rcvTypesToVisualize = [
  {
    id: "pl",
    display: "Plackett-Luce",
    getPocElected: (simulationResults) => simulationResults.pl_poc_elected_rcv,
  },
  {
    id: "bt",
    display: "Bradley-Terry",
    getPocElected: (simulationResults) => simulationResults.bt_poc_elected_rcv,
  },
  {
    id: "ac",
    display: "Alternating Crossover",
    getPocElected: (simulationResults) => simulationResults.ac_poc_elected_rcv,
  },
  {
    id: "cs",
    display: "Cambridge Sampler",
    getPocElected: (simulationResults) => simulationResults.cs_poc_elected_rcv,
  },
];

export { rcvTypesToVisualize };
