import { mmLabels } from "./constants";

const electionParams = [
  {
    id: "ballots",
    dataid: "ballots",
    initialValue: 1000,
  },
  {
    id: "seatsOpen",
    dataid: "seatsOpen",
    initialValue: 5,
  },
  {
    id: `majCandidates`,
    dataid: `majCandidates`,
    initialValue: 6,
  },
  {
    id: `minCandidates`,
    dataid: `minCandidates`,
    initialValue: 6,
  },
];

const electionInputs = [
  {
    id: "ballots",
    dataid: "ballots",
    type: "number",
    step: 10,
    min: 0,
    max: 10000,
    // fullWidth: true,
    label: "Ballots cast",
    helperText: "Max 10,000",
    info: "The number of voters in each election simulation",
  },
  {
    id: "seatsOpen",
    dataid: "seatsOpen",
    type: "number",
    step: 1,
    min: 0,
    max: 20,
    label: "Seats open for election",
    helperText: "Max 20",
    info: "The number of open seats open for election in each simulation",
  },
  {
    id: `majCandidates`,
    dataid: `majCandidates`,
    type: "number",
    step: 1,
    min: 0,
    max: 15,
    helperText: "Max 15",
    label: `${mmLabels.maj} candidates`,
    info: `The number of ${mmLabels.maj} candidates running for election in each simulation`,
  },
  {
    id: `minCandidates`,
    dataid: `minCandidates`,
    type: "number",
    step: 1,
    min: 0,
    max: 15,
    helperText: "Max 15",
    label: `${mmLabels.min} candidates`,
    info: `The number of ${mmLabels.min} candidates running for election in each simulation`,
  },
];

export { electionParams, electionInputs };
