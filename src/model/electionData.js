import { mmLabels } from "./constants";

const electionParams = [
  {
    id: "ballots",
    dataid: "ballots",
    initialValue: 1000,
  },
  {
    id: `popMajParty`,
    dataid: `popMajParty`,
    initialValue: 70,
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
  {
    id: `percentageMajMajSupport`,
    dataid: `percentageMajMajSupport`,
    initialValue: 70,
  },
  {
    id: `percentageMinMinSupport`,
    dataid: `percentageMinMinSupport`,
    initialValue: 70,
  },
];

const electionInputs = [
  // Information about the number of voters and the population demographics
  {
    id: "ballots",
    dataid: "ballots",
    type: "number",
    step: 10,
    min: 10,
    max: 10000,
    // fullWidth: true,
    label: "Voter Population",
    helperText: "Max 10,000",
    info: "The number of voters in each election simulation",
  },
  {
    id: "seatsOpen",
    dataid: "seatsOpen",
    type: "number",
    step: 1,
    min: 1,
    max: 20,
    label: "Spots Up For Election",
    helperText: "Max 20",
    info: "The number of open seats open for election in each simulation",
  },
  // Information about the maj candidates and maj-voter support
  {
    id: `majCandidates`,
    dataid: `majCandidates`,
    type: "number",
    step: 1,
    min: 1,
    max: 15,
    helperText: "Max 15",
    label: `Number of ${mmLabels.maj} candidates running`,
    info: `The number of ${mmLabels.maj} candidates running for election in each simulation`,
  },
  {
    id: `minCandidates`,
    dataid: `minCandidates`,
    type: "number",
    step: 1,
    min: 1,
    max: 15,
    helperText: "Max 15",
    label: `Number of ${mmLabels.min} candidates running`,
    info: `The number of ${mmLabels.min} candidates running for election in each simulation`,
  },

  {
    id: `popMajParty`,
    dataid: `popMajParty`,
    type: "slider",
    step: 1,
    min: 1,
    max: 99,
    minLabel: `1%`,
    maxLabel: `99%`,
    label: `Percent of voters who are ${mmLabels.maj}`,
    helperText: `Max 99%`,
    info: `Assuming all members of the population vote for either ${mmLabels.maj}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.maj}
    `,
  },
  {
    id: `popMinParty`,
    dataid: `popMajParty`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 99,
    updateTransform: (value) => 100 - value,
    minLabel: `1%`,
    maxLabel: `99%`,
    label: `Percent of voters who are ${mmLabels.min}`,
    helperText: `Max 99%`,
    info: `Assuming all members of the population vote for either ${mmLabels.min}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    `,
  },
  {
    id: `percentageMajMajSupport`,
    dataid: `percentageMajMajSupport`,
    type: "slider",
    step: 1,
    min: 1,
    max: 99,
    minLabel: `1%`,
    maxLabel: `99%`,
    label: `${mmLabels.maj} voters vote for ${mmLabels.maj} candidates this percent of the time...`,
    helperText: `Max 99%`,
  },
  {
    id: `percentageMajMinSupport`,
    dataid: `percentageMajMajSupport`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 99,
    updateTransform: (value) => 100 - value,
    minLabel: `1%`,
    maxLabel: `99%`,
    label: `${mmLabels.maj} voters vote for ${mmLabels.min} candidates this percent of the time...`,
    helperText: `Max 99%`,
    // info: `Assuming all members of the population vote for either ${mmLabels.min}
    // or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    // `,
  },
  {
    id: `percentageMinMajSupport`,
    dataid: `percentageMinMinSupport`,
    type: "anti-slider",
    step: 1,
    min: 1,
    max: 99,
    updateTransform: (value) => 100 - value,
    minLabel: `1%`,
    maxLabel: `99%`,
    label: `${mmLabels.min} voters vote for ${mmLabels.maj} candidates this percent of the time...`,
    helperText: `Max 99%`,
  },
  {
    id: `percentageMinMinSupport`,
    dataid: `percentageMinMinSupport`,
    type: "slider",
    step: 1,
    min: 1,
    max: 99,
    minLabel: `1%`,
    maxLabel: `99%`,
    label: `${mmLabels.min} voters vote for ${mmLabels.min} candidates this percent of the time...`,
    helperText: `Max 99%`,
  },
];

function getSeats(formData) {
  return parseInt(formData["seatsOpen"]);
}

export { electionParams, electionInputs, getSeats };
