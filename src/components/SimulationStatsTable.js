import React, { useState } from "react";
import _ from "lodash";
import { Table, Col, Row } from "react-bootstrap";
import { min, max, mean, modeFast, standardDeviation } from "simple-statistics";
import SelectInput from "./SelectInput";

import EmptyPlaceholder from "./EmptyPlaceholder";

function KeyValueTable({ kv = {} }) {
  return Object.keys(kv).length === 0 ? (
    <EmptyPlaceholder />
  ) : (
    <Table striped borderless className="kv-table">
      <tbody>
        {Object.entries(kv).map(([k, v]) => {
          return (
            <tr key={k}>
              <td className="table-key">{k}</td>
              <td className="table-value">{v}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function SimulationStatsTable({ data = [], electionTypes = [], maxSeats = 1 }) {
  const defaultModelValue = "All Models";
  const [selectedModel, setSelectedModel] = useState(defaultModelValue);

  const filteredData =
    selectedModel === defaultModelValue
      ? _.flatten(data)
      : _.flatten(
          data.filter((modelType, i) => electionTypes[i] === selectedModel)
        );

  const stats = !_.isEmpty(filteredData) && {
    Min: min(filteredData),
    Max: max(filteredData),
    Mode: modeFast(filteredData),
    Mean: mean(filteredData).toFixed(2),
    "Standard Deviation": standardDeviation(filteredData).toFixed(2),
  };

  const statsMarginalized = !_.isEmpty(stats) && {
    Min: (stats.Min / maxSeats).toFixed(2),
    Max: (stats.Max / maxSeats).toFixed(2),
    Mode: (stats.Mode / maxSeats).toFixed(2),
    Mean: (stats.Mean / maxSeats).toFixed(2),
    "Standard Deviation": (stats["Standard Deviation"] / maxSeats).toFixed(2),
  };

  // Create a Key-Value paired object to be fed to our TableComponent
  const statsDisplay = !_.isEmpty(statsMarginalized) && {
    Min: `${(statsMarginalized.Min * 100).toFixed(0)}% of seats (${
      stats.Min
    } / ${maxSeats})`,
    Max: `${(statsMarginalized.Max * 100).toFixed(0)}% of seats (${
      stats.Max
    } / ${maxSeats})`,
    Mode: `${(statsMarginalized.Mode * 100).toFixed(0)}% of seats (${
      stats.Mode
    } / ${maxSeats})`,
    Mean: `${(statsMarginalized.Mean * 100).toFixed(0)}% of seats (${
      stats.Mean
    } / ${maxSeats})`,
    "Standard Deviation": `${(
      statsMarginalized["Standard Deviation"] * 100
    ).toFixed(0)}% (${stats["Standard Deviation"]} / ${maxSeats})`,
  };

  return (
    <Row className="m-0">
      <Col sm={12} className="pr-1 pl-1">
        <h5 className="stats-table-title d-flex justify-content-between align-items-center">
          <span className="literal-title">Statistics</span>
          {!_.isEmpty(data) && (
            <SelectInput
              options={[defaultModelValue, ...electionTypes]}
              setValue={setSelectedModel}
              value={selectedModel}
            />
          )}
        </h5>
        {_.isEmpty(data) ? (
          <EmptyPlaceholder />
        ) : (
          <>
            <KeyValueTable kv={statsDisplay} />
          </>
        )}
      </Col>
    </Row>
  );
}

export default React.memo(SimulationStatsTable);
