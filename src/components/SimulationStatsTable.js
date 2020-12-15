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
            <tr>
              <td className="table-key">{k}</td>
              <td className="table-value">{v}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function SimulationStatsTable({ data = [], simulationParams }) {
  console.log("data", data);
  const d = _.flatMap(data, (d) => d.x);
  const stats = !_.isEmpty(d) && {
    Min: min(d),
    Max: max(d),
    Mode: modeFast(d),
    Mean: mean(d).toFixed(2),
    "Standard Deviation": standardDeviation(d).toFixed(2),
  };
  console.log("stats", stats);
  return (
    <Row className="m-0">
      <Col sm={6} className="pr-1 pl-1">
        <h5 className="stats-table-title">
          <span className="literal-title">Parameters</span>
        </h5>
        <KeyValueTable kv={simulationParams} />
      </Col>
      <Col sm={6} className="pr-1 pl-1">
        <h5 className="stats-table-title">
          <span className="literal-title">Statistics</span>
        </h5>
        <KeyValueTable kv={stats} />
      </Col>
    </Row>
  );
}

export default SimulationStatsTable;
