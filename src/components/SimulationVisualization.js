import React from "react";
import { Form } from "react-bootstrap";
import _ from "lodash";
import { mmLabels } from "../model/constants";
import SelectInput from "./SelectInput";
import SimulationStatsTable from "./SimulationStatsTable";
import SimulationResultsHistogram from "./SimulationResultsHistogram";
import { rcvTypesToVisualize } from "../model/rcvTypesToVisualize";
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
    console.log("rcvTypeLabels", rcvTypeLabels);
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
          maxSeats={seatsOpen}
          simulationParams={simulationParams}
        />
      </section>
    );
  }
}

export default SimulationVisualization;
