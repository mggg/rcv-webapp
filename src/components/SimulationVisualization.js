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
    // Translate the result of running a simluation

    const { seatsOpen, rcvTypeLabels, rcvTypeResults } = simulationResults;
    // NOTE: Now that we only visualize purple results, no need for ternary exp.
    const relevantElected = rcvTypeResults;
    // const relevantElected = this.state.displayMajResults
    //   ? simulationResults.map((dataPerModel) =>
    //       dataPerModel.map((pocWinners) => maxSeats - pocWinners)
    //     )
    //   : simulationResults;

    return (
      <section>
        <SimulationResultsHistogram
          maxSeats={seatsOpen}
          // displayMajResults={this.state.displayMajResults}
          displayMajResults={false}
          data={relevantElected}
          dataLabels={rcvTypeLabels}
          selectedModel={selectedModel}
        />
        <SimulationStatsTable
          data={relevantElected}
          maxSeats={seatsOpen}
          simulationParams={simulationParams}
        />
      </section>
    );
  }
}

export default SimulationVisualization;
