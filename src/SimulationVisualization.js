import React from "react";
import _ from "lodash";
import {
  VictoryChart,
  VictoryHistogram,
  VictoryContainer,
  VictoryAxis,
  VictoryLabel,
  VictoryTooltip,
} from "victory";
import { mmLabels } from "./model/constants";

class SimulationVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef(null);
    this.setChartRef = (ref) => {
      this.chartRef = ref;
    };
  }
  // Only re-render when the simulationResults are new
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.simulationResults !== this.props.simulationResults;
  }

  render() {
    const {
      simulationResults = {},
      maxSeats = 1,
      electionSimulations,
    } = this.props;
    const values = simulationResults.poc_elected_rcv;
    const data = (values || []).map((val) => ({ x: val }));
    // Determine the number of elections with no POC winners
    const electionWithoutRelevantWinners =
      values && values.length ? electionSimulations - values.length : 0;
    for (let i = 0; i < electionWithoutRelevantWinners; i++) {
      data.push({ x: 0 });
    }

    const bins = _.range(0, maxSeats + 2, 1);
    return (
      <>
        <button
          onClick={() => {
            console.log(this.chartRef);
            console.log(this.chartRef.svgRef);
          }}
        >
          Log ref
        </button>
        <VictoryChart
          style={{ parent: { fontSize: 12 } }}
          containerRef={this.chartRef}
          // Define hover behavior
          containerComponent={
            <VictoryContainer containerRef={this.setChartRef} />
          }
        >
          {/* Display data */}
          <VictoryHistogram
            style={{ labels: { fill: "black" } }}
            cornerRadius={0}
            data={data}
            bins={bins}
            labelComponent={<VictoryTooltip constrainToVisibleArea />}
            labels={({ datum }) =>
              `# Elections with ${datum.x - 0.5} ${mmLabels.min} winner(s)\n${
                datum.y
              }`
            }
          />
          {/* Chart Title */}
          <VictoryLabel
            text={
              _.isUndefined(electionSimulations)
                ? `No Data`
                : `${mmLabels.min} Candidates Elected \n Across ${electionSimulations} Election(s) `
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
            label={`Number of ${mmLabels.min} candidates elected`}
            tickLabelComponent={<VictoryLabel dy={-5} dx={200 / bins.length} />}
            // tickCount={maxSeats}
            tickValues={bins.slice(0, bins.length - 1)}
          />
        </VictoryChart>
      </>
    );
  }
}

export default SimulationVisualization;
