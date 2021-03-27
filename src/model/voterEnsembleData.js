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
  {
    id: `majMajCandidateAgreement`,
    dataid: `majMajCandidateAgreement`,
    initialValue: 1,
  },
  {
    id: `majMinCandidateAgreement`,
    dataid: `majMinCandidateAgreement`,
    initialValue: 1,
  },
  {
    id: `minMinCandidateAgreement`,
    dataid: `minMinCandidateAgreement`,
    initialValue: 1,
  },
  {
    id: `minMajCandidateAgreement`,
    dataid: `minMajCandidateAgreement`,
    initialValue: 1,
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
  {
    id: `majMajCandidateAgreement`,
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

export { voterParams, voterInputs };
