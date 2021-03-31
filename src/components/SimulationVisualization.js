import React from "react";
import { Form } from "react-bootstrap";
import _ from "lodash";
import { mmLabels } from "../model/constants";
import SelectInput from "./SelectInput";
import SimulationStatsTable from "./SimulationStatsTable";
import SimulationResultsHistogram from "./SimulationResultsHistogram";
const dataTypesToVisualize = [
  {
    id: "all",
    display: "All models",
    getPocElected: (simulationResults) => simulationResults.poc_elected_rcv,
  },
  {
    id: "pl",
    display: "Plackett-Luce",
    getPocElected: (simulationResults) => simulationResults.ac_poc_elected_rcv,
  },
  {
    id: "bt",
    display: "Bradley-Terry",
    getPocElected: (simulationResults) => simulationResults.bt_poc_elected_rcv,
  },
  {
    id: "ac",
    display: "Alternating Crossover",
    getPocElected: (simulationResults) => simulationResults.pl_poc_elected_rcv,
  },
  {
    id: "cs",
    display: "Cambridge Sampler",
    getPocElected: (simulationResults) => simulationResults.cs_poc_elected_rcv,
  },
];

class SimulationVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMajResults: false,
      dataToVisualize: dataTypesToVisualize[0],
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
      nextState.dataToVisualize !== this.state.dataToVisualize ||
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
    const pocElected = _.isEmpty(simulationResults)
      ? undefined
      : this.state.dataToVisualize["getPocElected"](simulationResults);
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
        {!_.isEmpty(simulationResults) && (
          <SelectInput
            title="Models included in results"
            value={this.state.dataToVisualize}
            setValue={(e) => {
              const optionId = e.target.value;
              this.setState({
                dataToVisualize: dataTypesToVisualize.find(
                  (ty) => ty.id === optionId
                ),
              });
            }}
            options={dataTypesToVisualize}
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
