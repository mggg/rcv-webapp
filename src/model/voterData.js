import { mmLabels } from "./constants";

const voterParams = [
  {
    id: `popMajParty`,
    dataid: `popMajParty`,
    initialValue: 70,
  },
  {
    id: `percentageMajCohesion`,
    dataid: `percentageMajCohesion`,
    initialValue: 70,
  },
  {
    id: `percentageMinCohesion`,
    dataid: `percentageMinCohesion`,
    initialValue: 70,
  },
];

const voterInputs = [
  {
    id: `popMajParty`,
    dataid: `popMajParty`,
    type: "split-slider",
    fullWidth: true,
    step: 1,
    min: 0,
    max: 100,
    leftLabel: `Percent ${mmLabels.maj}`,
    rightLabel: `Percent ${mmLabels.min}`,
    label: `Percentage of population that is ${mmLabels.maj} vs ${mmLabels.min}`,
    info: `Assuming all members of the population vote for either ${mmLabels.maj}
    or ${mmLabels.min}, which percentage votes for ${mmLabels.maj}
    `,
  },
  {
    id: `percentageMajCohesion`,
    dataid: `percentageMajCohesion`,
    type: "split-slider",
    fullWidth: true,
    step: 1,
    min: 0,
    max: 100,
    leftLabel: `${mmLabels.maj} cohesion`,
    rightLabel: `${mmLabels.maj} crossover`,
    label: `${mmLabels.maj} voter cohesion and crossover`,
    helperText: `Max 100%`,
  },
  {
    id: `percentageMinCohesion`,
    dataid: `percentageMinCohesion`,
    type: "split-slider",
    minColorFirst: true,
    fullWidth: true,
    step: 1,
    min: 0,
    max: 100,
    leftLabel: `${mmLabels.min} cohesion`,
    rightLabel: `${mmLabels.min} crossover`,
    label: `${mmLabels.min} voters cohesion and crossover`,
    helperText: `Max 100%`,
  },
];

export { voterParams, voterInputs };
