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
  VictoryStack,
  VictoryTooltip,
} from "victory";
import { mmLabels } from "../model/constants";
import variables from "../styles/temp-variables.js";

function SimulationResultsHistogram({
  displayMajResults,
  maxSeats = 0,
  selectedModel,
  data = [[]],
  dataLabels = [],
}) {
  const chartData = data.map((ty) => ty.map((val) => ({ x: val })));
  console.log(
    "🚀 ~ file: SimulationResultsHistogram.js ~ line 24 ~ chartData",
    chartData
  );

  // The number of possible bins for our results
  const bins = _.range(0, maxSeats + 2, 1);
  // Color of the bar changes to reflect the demographic charted
  const barColor = displayMajResults
    ? variables["majColor"]
    : variables["minColor"];
  //  Text-label for the demographic charted
  const demographicVisualized = displayMajResults ? mmLabels.maj : mmLabels.min;
  // Mean number of elections won
  const meanCandidateElected = _.isEmpty(data) ? undefined : mean(data);

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
          _.isEmpty(data[0])
            ? `No Data`
            : `${demographicVisualized} Candidates Elected \n Across ${data.length} ${selectedModel} Simulation(s) `
        }
        x={225}
        y={18}
        textAnchor="middle"
      />
      {/* Display chartData */}
      <VictoryStack>
        {chartData.map((dataPerModel, i) => (
          <VictoryHistogram
            style={{
              data: { fill: barColor, fillOpacity: `${25 * (4 - i)}%` },
            }}
            // style={{ backgroundColor: barColor, opacity: 15 * i }}
            cornerRadius={0}
            data={dataPerModel}
            bins={bins}
            labelComponent={<VictoryTooltip constrainToVisibleArea />}
            labels={({ datum }) =>
              `# ${dataLabels[i]} Elections with ${
                datum.x - 0.5
              }\n ${demographicVisualized} candidate${
                datum.x > 1 ? "(s)" : ""
              } elected:\n${datum.y}`
            }
          />
        ))}
      </VictoryStack>
      {/* Line for Mean Outcome */}
      {meanCandidateElected >= 0 && (
        <VictoryLine
          style={{
            data: { stroke: variables["primaryEmph"], strokeDasharray: "5" },
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
