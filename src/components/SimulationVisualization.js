import React from "react";
import _ from "lodash";
import SimulationStatsTable from "./SimulationStatsTable";
import SimulationResultsHistogram from "./SimulationResultsHistogram";
class SimulationVisualization extends React.Component {
  // Only re-render when the simulationResults are new or if the displayMajResults has changed
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.simulationResults !== this.props.simulationResults;
  }

  render() {
    const {
      selectedModel = "",
      simulationParams = {},
      simulationResults = {},
    } = this.props;
    const { seatsOpen, rcvTypeLabels, rcvTypeResults } = simulationResults;
    const relevantLabels =
      rcvTypeLabels &&
      rcvTypeLabels.filter((label, i) => !_.isEmpty(rcvTypeResults[i]));
    const relevantTypeResults =
      rcvTypeResults && rcvTypeResults.filter((results) => !_.isEmpty(results));
    return (
      <section>
        <SimulationResultsHistogram
          maxSeats={seatsOpen}
          // displayMajResults={this.state.displayMajResults}
          displayMajResults={false}
          data={relevantTypeResults}
          dataLabels={relevantLabels}
          selectedModel={selectedModel}
        />
        <SimulationStatsTable
          data={relevantTypeResults}
          electionTypes={relevantLabels}
          maxSeats={seatsOpen}
          simulationParams={simulationParams}
        />
      </section>
    );
  }
}

export default SimulationVisualization;
