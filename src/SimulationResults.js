import React from "react";
import axios from "axios";
import _ from "lodash";
import { Button } from "react-bootstrap";
import ParameterContainer from "./ParameterContainer";
import EmptyDataPlaceholder from "./EmptyDataPlaceholder";

function SimulationResults(props) {
  const apiURL = `http://localhost:1080/api/v1/simulate`;

  const fetchData = async () => {
    const response = await axios.get(apiURL, { params: props.queryParams });
    props.setSimulationResults(response.data);
  };

  return (
    <>
      <h1>Simultation Results</h1>
      <ParameterContainer>
        {_.isEmpty(props.simulationResults) && <EmptyDataPlaceholder />}
        {!_.isEmpty(props.simulationResults) && (
          <p>{JSON.stringify(props.simulationResults)}</p>
        )}
        <Button onClick={fetchData}>Run Simulation</Button>
      </ParameterContainer>
    </>
  );
}

export default SimulationResults;
