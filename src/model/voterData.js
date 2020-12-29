import { mmLabels } from "./constants";

const voterParams = [
  {
    id: `popMajParty`,
    dataid: `popMajParty`,
    initialValue: 70,
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

const voterInputs = [
  {
    id: `popMajParty`,
    dataid: `popMajParty`,
    type: "slider",
    step: 1,
    min: 0,
    max: 100,
    minLabel: `0%`,
    maxLabel: `100%`,
    label: `Percent of voters who are ${mmLabels.maj}`,
    helperText: `Max 100%`,
    info: `Assuming all members of the population vote for either ${mmLabels.maj}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.maj}
    `,
  },
  {
    id: `popMinParty`,
    dataid: `popMajParty`,
    type: "anti-slider",
    step: 1,
    min: 0,
    max: 100,
    updateTransform: (value) => 100 - value,
    minLabel: `0%`,
    maxLabel: `100%`,
    label: `Percent of voters who are ${mmLabels.min}`,
    helperText: `Max 100%`,
    info: `Assuming all members of the population vote for either ${mmLabels.min}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    `,
  },
  {
    id: `percentageMajMajSupport`,
    dataid: `percentageMajMajSupport`,
    type: "slider",
    step: 1,
    min: 0,
    max: 100,
    minLabel: `0%`,
    maxLabel: `100%`,
    label: `${mmLabels.maj} voters vote for ${mmLabels.maj} candidates this percent of the time...`,
    helperText: `Max 100%`,
  },
  {
    id: `percentageMajMinSupport`,
    dataid: `percentageMajMajSupport`,
    type: "anti-slider",
    step: 1,
    min: 0,
    max: 100,
    updateTransform: (value) => 100 - value,
    minLabel: `0%`,
    maxLabel: `100%`,
    label: `${mmLabels.maj} voters vote for ${mmLabels.min} candidates this percent of the time...`,
    helperText: `Max 100%`,
    // info: `Assuming all members of the population vote for either ${mmLabels.min}
    // or ${mmLabels.min}, which percentage votes for ${mmLabels.min}
    // `,
  },
  {
    id: `percentageMinMajSupport`,
    dataid: `percentageMinMinSupport`,
    type: "anti-slider",
    step: 1,
    min: 0,
    max: 100,
    updateTransform: (value) => 100 - value,
    minLabel: `0%`,
    maxLabel: `100%`,
    label: `${mmLabels.min} voters vote for ${mmLabels.maj} candidates this percent of the time...`,
    helperText: `Max 100%`,
  },
  {
    id: `percentageMinMinSupport`,
    dataid: `percentageMinMinSupport`,
    type: "slider",
    step: 1,
    min: 0,
    max: 100,
    minLabel: `0%`,
    maxLabel: `100%`,
    label: `${mmLabels.min} voters vote for ${mmLabels.min} candidates this percent of the time...`,
    helperText: `Max 100%`,
  },
];

export { voterParams, voterInputs };
