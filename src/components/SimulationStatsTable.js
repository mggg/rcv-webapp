import React from "react";
import _ from "lodash";
import { Table, Col, Row } from "react-bootstrap";
import { min, max, mean, modeFast, standardDeviation } from "simple-statistics";

import EmptyPlaceholder from "./EmptyPlaceholder";

function KeyValueTable({ kv = {} }) {
  return Object.keys(kv).length === 0 ? (
    <EmptyPlaceholder />
  ) : (
    <Table striped borderless hover className="kv-table">
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

function SimulationStatsTable({ data = [], maxSeats = 1 }) {
  const stats = !_.isEmpty(data) && {
    Min: min(data),
    Max: max(data),
    Mode: modeFast(data),
    Mean: mean(data).toFixed(2),
    "Standard Deviation": standardDeviation(data).toFixed(2),
  };

  const statsMarginalized = !_.isEmpty(stats) && {
    Min: (stats.Min / maxSeats).toFixed(2),
    Max: (stats.Max / maxSeats).toFixed(2),
    Mode: (stats.Mode / maxSeats).toFixed(2),
    Mean: (stats.Mean / maxSeats).toFixed(2),
    "Standard Deviation": (stats["Standard Deviation"] / maxSeats).toFixed(2),
  };

  const statsDisplay = !_.isEmpty(statsMarginalized) && {
    Min: `${(statsMarginalized.Min * 100).toFixed(2)}% (${
      stats.Min
    } / ${maxSeats})`,
    Max: `${(statsMarginalized.Max * 100).toFixed(2)}% (${
      stats.Max
    } / ${maxSeats})`,
    Mode: `${(statsMarginalized.Mode * 100).toFixed(2)}% (${
      stats.Mode
    } / ${maxSeats})`,
    Mean: `${(statsMarginalized.Mean * 100).toFixed(2)}% (${
      stats.Mean
    } / ${maxSeats})`,
    "Standard Deviation": `${statsMarginalized["Standard Deviation"] * 100}% (${
      stats["Standard Deviation"]
    } / ${maxSeats})`,
  };

  return (
    <Row className="m-0">
      <Col sm={12} className="pr-1 pl-1">
        <h5 className="stats-table-title">
          <span className="literal-title">Statistics</span>
        </h5>
        <KeyValueTable kv={statsDisplay} />
      </Col>
    </Row>
  );
}

export default React.memo(SimulationStatsTable);
