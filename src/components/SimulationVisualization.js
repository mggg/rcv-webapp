import React from "react";
import { Form } from "react-bootstrap";
import _ from "lodash";
import { mmLabels } from "../model/constants";
import SimulationStatsTable from "./SimulationStatsTable";
import SimulationResultsHistogram from "./SimulationResultsHistogram";

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
      selectedModel = "",
      simulationParams = {},
      simulationResults = {},
    } = this.props;
    const pocElected = simulationResults.poc_elected_rcv;
    const maxSeats = simulationResults.seats_open;
    const relevantElected = this.state.displayMajResults
      ? pocElected.map((pocWinners) => maxSeats - pocWinners)
      : pocElected;
    const switchWillVisualize = !this.state.displayMajResults
      ? mmLabels.maj
      : mmLabels.min;

    return (
      <section>
        {!_.isEmpty(simulationResults) && (
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
      </section>
    );
  }
}

export default SimulationVisualization;
