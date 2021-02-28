import React from "react";
import _ from "lodash";
import { mean } from "simple-statistics";
import {
  VictoryAxis,
  VictoryChart,
  VictoryContainer,
  VictoryHistogram,
  VictoryLine,
  VictoryLabel,
  VictoryTooltip,
} from "victory";
import { mmLabels } from "../model/constants";
import variables from "../styles/_variables.scss";

function SimulationResultsHistogram({
  displayMajResults,
  electionSimulations,
  maxSeats = 0,
  selectedModel,
  data,
}) {
  const chartData = (data || []).map((val) => ({ x: val }));

  // The number of possible bins for our results
  const bins = _.range(0, maxSeats + 2, 1);
  // Color of the bar changes to reflect the demographic charted
  const barColor = displayMajResults ? variables.green : variables.purple;
  //  Text-label for the demographic charted
  const demographicVisualized = displayMajResults ? mmLabels.maj : mmLabels.min;
  // Mean number of elections won
  const meanCandidateElected = _.isEmpty(data) ? undefined : mean(data);
  console.log("meanCandidateElected", meanCandidateElected);

  return (
    <VictoryChart
      style={{ parent: { fontSize: 12 } }}
      containerComponent={
        <VictoryContainer
          className="pt-2 pb-4"
          style={{
            height: 350,
            maxWidth: 450,
            margin: "auto",
            maxHeight: "600",
          }}
        />
      }
    >
      {/* Chart Title */}
      <VictoryLabel
        text={
          _.isUndefined(electionSimulations)
            ? `No Data`
            : `${demographicVisualized} Candidates Elected \n Across ${electionSimulations} ${selectedModel} Simulation(s) `
        }
        x={225}
        y={18}
        textAnchor="middle"
      />
      {/* Display chartData */}
      <VictoryHistogram
        style={{ labels: { fill: "black" }, data: { fill: barColor } }}
        cornerRadius={0}
        data={chartData}
        bins={bins}
        labelComponent={<VictoryTooltip constrainToVisibleArea />}
        labels={({ datum }) =>
          `# Elections with ${
            datum.x - 0.5
          }\n ${demographicVisualized} candidate(s) elected:\n${datum.y}`
        }
      />
      {/* Line for Mean Outcome */}
      {meanCandidateElected >= 0 && (
        <VictoryLine
          style={{
            data: { stroke: variables["primary-emph"], strokeDasharray: "5" },
          }}
          x={() => meanCandidateElected + 0.01}
        />
      )}
      {/* Y axis */}
      <VictoryAxis
        label={`Frequency of outcome`}
        textAnchor="middle"
        axisLabelComponent={<VictoryLabel dy={-12} />}
        dependentAxis
      />
      {/* X Axis */}
      <VictoryAxis
        label={`Number of ${demographicVisualized} candidates elected\n (mean represented as dashed line)`}
        tickLabelComponent={<VictoryLabel dy={-5} />}
        tickValues={bins.slice(0, bins.length)}
      />
    </VictoryChart>
  );
}

export default SimulationResultsHistogram;
