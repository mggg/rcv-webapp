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
  VictoryLegend,
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
  // Translate the counts for each rcvModelType into data our chart can consume
  const chartData = data.map((ty) => ty.map((val) => ({ x: val })));
  // We render conditionally if there is some data available
  const someChartData = !_.every(chartData, _.isEmpty);

  // The number of possible bins for our results
  const bins = _.range(0, maxSeats + 2, 1);
  // Color of the bar changes to reflect the demographic charted
  const barColor = displayMajResults
    ? variables["majColor"]
    : variables["minColor"];
  //  Text-label for the demographic charted
  const demographicVisualized = displayMajResults ? mmLabels.maj : mmLabels.min;
  // calculate the mean if there is chartdata
  const meanCandidateElected = !someChartData
    ? undefined
    : mean(_.flatten(data)) + 0.01;

  const chartHeight = 350;
  const chartWidth = 550;
  return (
    <VictoryChart
      style={{ parent: { fontSize: 12 } }}
      height={chartHeight}
      width={chartWidth}
      containerComponent={
        // Height should be larger when there's data (b/c of legend)
        // and height should be even larger when the legend will overflow onto 2 rows (i.e. #labels > 3)
        <VictoryContainer
          height={
            someChartData
              ? dataLabels.length > 3
                ? chartHeight + 110
                : chartHeight + 90
              : chartHeight + 10
          }
        />
      }
    >
      {/* Chart Title, with No Data as placeholder when there is noData */}
      <VictoryLabel
        text={
          someChartData
            ? `${demographicVisualized} Candidates Elected \n Across ${
                _.flatten(data).length
              } ${selectedModel} Simulation(s) `
            : `No Data`
        }
        x={chartWidth / 2}
        y={20}
        textAnchor="middle"
      />
      {/* Display chartData with a stacked histogram*/}
      <VictoryStack>
        {!_.every(chartData, _.isEmpty) &&
          chartData.map((dataPerModel, i) => (
            <VictoryHistogram
              style={{
                data: { fill: barColor, fillOpacity: `${25 * (4 - i)}%` },
              }}
              key={dataLabels[i]}
              cornerRadius={0}
              data={dataPerModel}
              bins={bins}
              labelComponent={<VictoryTooltip constrainToVisibleArea />}
              labels={({ datum }) =>
                `${datum.x - 0.5} ${demographicVisualized} candidate${
                  datum.x > 1 ? "s" : ""
                } elected in \n${datum.y} ${dataLabels[i]} Elections`
              }
            />
          ))}
      </VictoryStack>
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

      {/* CONDITIONALLY DISPLAYED DATA */}
      {/* Legend for all colors */}
      {someChartData && (
        <VictoryLegend
          x={10}
          y={chartHeight + 15}
          orientation="horizontal"
          itemsPerRow={3}
          gutter={15}
          style={{
            border: { stroke: "grey", strokeWidth: 1 },
            title: { fontSize: 16 },
          }}
          centerTitle={true}
          title="Bar Colors Legend"
          data={dataLabels.map((label, i) => ({
            name: label,
            symbol: {
              fill: barColor,
              fillOpacity: `${25 * (4 - i)}%`,
            },
          }))}
        />
      )}
      {/* Line for Mean Outcome*/}
      {someChartData && (
        <VictoryLine
          style={{
            data: { stroke: variables["primaryEmph"], strokeDasharray: "5" },
          }}
          x={() => meanCandidateElected}
        />
      )}
    </VictoryChart>
  );
}

export default SimulationResultsHistogram;
