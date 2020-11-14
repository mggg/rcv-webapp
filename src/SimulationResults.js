import React from "react";
import axios from "axios";
import _ from "lodash";
import { Button, Card } from "react-bootstrap";
import GenericInput from "./inputs/GenericInput";
import EmptyPlaceholder from "./EmptyPlaceholder";

function SimulationResults({
  formData,
  setFormData,
  formInputs,
  simulationResults,
  setSimulationResults,
}) {
  const apiURL =
    process.env.REACT_APP_API_BASEURL + process.env.REACT_APP_API_SLUG;
  const fetchData = async () => {
    const response = await axios.get(apiURL, { params: formData });
    setSimulationResults(response.data);
  };

  return (
    <>
      <h1>Simulations</h1>
      <Card className="parameter-container flex-grow-1">
        <Card.Body className="">
          {formInputs.map((param) => {
            return (
              <GenericInput
                key={param.id}
                param={param}
                formData={formData}
                setFormData={setFormData}
              />
            );
          })}
          {_.isEmpty(simulationResults) && <EmptyPlaceholder />}
          {!_.isEmpty(simulationResults) && (
            <p>{JSON.stringify(simulationResults)}</p>
          )}
          <Button onClick={fetchData}>Run Simulation</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SimulationResults;
