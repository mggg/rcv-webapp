import React from "react";
import _ from "lodash";
import { Form } from "react-bootstrap";
import {
  VictoryAxis,
  VictoryChart,
  VictoryContainer,
  VictoryHistogram,
  VictoryLabel,
  VictoryTooltip,
} from "victory";
import { mmLabels } from "../model/constants";
import SimulationStatsTable from "./SimulationStatsTable";
import variables from "../styles/_variables.scss";

function SimulationResultsHistogram({
  displayMajResults,
  electionSimulations,
  maxSeats,
  selectedModel,
  data,
}) {
  const pocData = (data || []).map((val) => ({ x: val }));
  // Determine the number of elections with no POC winners
  const electionWithoutRelevantWinners =
    data && data.length ? electionSimulations - data.length : 0;
  for (let i = 0; i < electionWithoutRelevantWinners; i++) {
    pocData.push({ x: 0 });
  }

  const bins = _.range(0, maxSeats + 2, 1);
  const barColor = displayMajResults ? variables.green : variables.purple;
  const demographicVisualized = displayMajResults ? mmLabels.maj : mmLabels.min;

  return (
    <VictoryChart
      style={{ parent: { fontSize: 12 } }}
      containerComponent={
        <VictoryContainer
          className="pt-2 pb-2"
          style={{ height: "auto", maxWidth: 400, margin: "auto" }}
        />
      }
    >
      {/* Display pocData */}
      <VictoryHistogram
        style={{ labels: { fill: "black" }, data: { fill: barColor } }}
        cornerRadius={0}
        data={pocData}
        bins={bins}
        labelComponent={<VictoryTooltip constrainToVisibleArea />}
        labels={({ datum }) =>
          `# Elections with ${
            datum.x - 0.5
          } ${demographicVisualized} winner(s)\n${datum.y}`
        }
      />
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
      {/* X axis */}
      <VictoryAxis
        label={`Frequency of outcome`}
        textAnchor="middle"
        axisLabelComponent={<VictoryLabel dy={-12} />}
        dependentAxis
      />
      {/* Y Axis */}
      <VictoryAxis
        label={`Number of ${demographicVisualized} candidates elected`}
        tickLabelComponent={<VictoryLabel dy={-5} dx={200 / bins.length} />}
        tickValues={bins.slice(0, bins.length - 1)}
      />
    </VictoryChart>
  );
}

class SimulationVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMajResults: false,
    };
  }

  toggleMajResults = () => {
    this.setState({
      displayMajResults: !this.state.displayMajResults,
    });
  };

  // Only re-render when the simulationResults are new or if the displayMajResults has changed
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.simulationResults !== this.props.simulationResults ||
      nextState.displayMajResults !== this.state.displayMajResults
    );
  }

  render() {
    const {
      electionSimulations,
      maxSeats = 1,
      selectedModel = "",
      simulationParams = {},
      simulationResults = {},
    } = this.props;
    const pocElected = simulationResults.poc_elected_rcv;
    const relevantElected = this.state.displayMajResults
      ? pocElected.map((pocWinners) => maxSeats - pocWinners)
      : pocElected;
    const switchWillVisualize = !this.state.displayMajResults
      ? mmLabels.maj
      : mmLabels.min;

    return (
      <>
        {!_.isUndefined(electionSimulations) && (
          <Form.Check
            type="switch"
            id="custom-switch"
            className="results-demographic-flip mt-0"
            value={this.state.displayMajResults}
            onChange={this.toggleMajResults}
            label={`View ${switchWillVisualize} results`}
          />
        )}
        <SimulationResultsHistogram
          electionSimulations={electionSimulations}
          maxSeats={maxSeats}
          displayMajResults={this.state.displayMajResults}
          data={relevantElected}
          selectedModel={selectedModel}
        />
        <SimulationStatsTable
          data={relevantElected}
          maxSeats={maxSeats}
          simulationParams={simulationParams}
        />
      </>
    );
  }
}

export default SimulationVisualization;
