import React, { useRef } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { Download, Play, Loader } from "react-feather";
import { exportComponentAsPNG } from "react-component-export-image";

import Spinner from "./components/Spinner";
import SimulationVisualization from "./components/SimulationVisualization";
import useAsync from "./hooks/useAsync";
import GenericInput from "./inputs/GenericInput";
import { getApiEndpoint, filterDataByModelTypes } from "./model/rcvModelData";
import { simulationInputs } from "./model/simulationData";

function SaveButton({ status, simulationVisualizationRef }) {
  return (
    <div className="d-flex justify-content-between">
      <Button
        onClick={() => {
          exportComponentAsPNG(simulationVisualizationRef);
        }}
        className="d-flex justify-content-center align-items-center"
        size="sm"
      >
        <Download size={16} className="mr-1" />
        Save
      </Button>
    </div>
  );
}

function RunButton({ execute, status }) {
  return (
    <Button
      onClick={execute}
      className="d-flex ml-1 justify-content-center align-items-center"
      size="sm"
      disabled={status === "pending"}
    >
      {status !== "pending" ? (
        <>
          <Play size={16} className="mr-1" />
          Run
        </>
      ) : (
        <>
          <Loader size={16} className="mr-1" />
          Loading...
        </>
      )}
    </Button>
  );
}

function SimulationInformation({
  combineFormData,
  formData,
  getSeats,
  getElectionSimulationCount,
  setFormData,
  selectedModel,
}) {
  // Get the API Endpoint for the selected model
  const selectedModelEndpoint = getApiEndpoint(selectedModel);
  // Build the API URL
  const apiURL =
    process.env.REACT_APP_API_BASEURL +
    process.env.REACT_APP_API_SLUG +
    selectedModelEndpoint;

  // Get relevant params, and define the function that gets simulation results
  const relevantParams = filterDataByModelTypes(
    combineFormData(),
    selectedModel
  );
  const fetchData = async () => {
    const response = await axios.get(apiURL, {
      // Filter all the query params by the selectedModel
      params: relevantParams,
    });
    return response.data;
  };

  // Store the results of simulations in state, as well as request status/error
  const { execute, status, value, error } = useAsync(fetchData, false);

  // Create a ref to the SimulationInformation
  const simulationVisualizationRef = useRef();

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Simulations</h1>
      </div>
      <Card className="parameter-container flex-grow-1">
        <Card.Body>
          {/* First div: the inputs in the form of a row, and the button to trigger sims */}
          {simulationInputs.map((param) => {
            return (
              <GenericInput
                key={param.id}
                param={param}
                formData={formData}
                padding={false}
                setFormData={setFormData}
              />
            );
          })}
          {/* Second div: the results of the current simulation */}
          <div className="d-flex justify-content-between">
            <h4>Election Results</h4>
            {/* Download and save buttons */}
            <div className="d-flex">
              {status === "success" && (
                <SaveButton
                  status={status}
                  simulationVisualizationRef={simulationVisualizationRef}
                />
              )}
              <RunButton execute={execute} status={status} />
            </div>
          </div>
          {/* When errors are present, log them to the console */}
          {status === "error" && (
            <p>
              There was an error processing those simulations.
              {console.error(error)}
            </p>
          )}
          {/* While loading, display a spinner */}
          {status === "pending" && (
            <div className="d-flex flex-column w-100">
              <div style={{ height: "300px" }}>
                <Spinner />
              </div>
            </div>
          )}
          {/* Show an empty viz when no simulations have been triggered or completed  */}
          {status === "idle" && <SimulationVisualization />}
          {status === "success" && (
            <SimulationVisualization
              ref={simulationVisualizationRef}
              electionSimulations={getElectionSimulationCount()}
              simulationResults={value}
              simulationParams={relevantParams}
              selectedModel={selectedModel}
            />
          )}
          {/* TODO: Implement local history of simulations in order to compare and contrast over time */}
          {/* <div>
            <h4>History of Simulations</h4>
            <EmptyPlceholder />
          </div> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default React.memo(SimulationInformation);
