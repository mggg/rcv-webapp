import React, { useRef } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import ReactToPrint from "react-to-print";
// import EmptyPlaceholder from "./EmptyPlaceholder";
import Spinner from "./Spinner";
import SimulationVisualization from "./SimulationVisualization";
import useAsync from "./hooks/useAsync";
import GenericInput from "./inputs/GenericInput";
import { getApiEndpoint, filterDataByModelTypes } from "./model/rcvModelData";
import { simulationInputs } from "./model/simulationData";

function SimulationResults({
  combineFormData,
  formData,
  getSeats,
  getElectionSimulationCount,
  setFormData,
  selectedModelDataid,
}) {
  // Get the API Endpoint for the selected model
  const selectedModelEndpoint = getApiEndpoint(selectedModelDataid);

  // Build the API URL
  const apiURL =
    process.env.REACT_APP_API_BASEURL +
    process.env.REACT_APP_API_SLUG +
    selectedModelEndpoint;

  // Build the function that gets simulation results and
  const fetchData = async () => {
    const response = await axios.get(apiURL, {
      // Filter all the query params by the selectedModelDataid
      params: filterDataByModelTypes(combineFormData(), selectedModelDataid),
    });
    return response.data;
  };

  // Store the results of simulations in state, as well as request status/error
  const { execute, status, value, error } = useAsync(fetchData, false);

  // Create a ref to the simulationResults
  const simulationResultsRef = useRef();

  return (
    <>
      <h1>Simulations</h1>
      <Card className="parameter-container flex-grow-1">
        <Card.Body className="d-flex  flex-column align-content-start">
          {/* First div: the inputs in the form of a row, and the button to trigger sims */}
          <div>
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
            <Button onClick={execute} disabled={status === "pending"}>
              {status !== "pending" ? "Run Simulation" : "Loading..."}
            </Button>
          </div>
          {/* Second div: the results of the current simulation */}
          <div className="d-flex flex-column">
            <h4 className="w-100">Results</h4>
            {/* When errors are present, log them to the console */}
            {status === "error" && (
              <div>
                There was an error processing those simulations.
                {console.error(error)}
              </div>
            )}
            {/* While loading, display a spinner */}
            {status === "pending" && (
              <div style={{ height: "300px" }}>
                <Spinner />
              </div>
            )}
            {/* Show an empty viz when no simulations have been triggered or completed  */}
            {status === "idle" && (
              <SimulationVisualization maxBins={getSeats()} />
            )}
            {status === "success" && (
              <>
                <SimulationVisualization
                  ref={simulationResultsRef}
                  maxSeats={getSeats()}
                  electionSimulations={getElectionSimulationCount()}
                  simulationResults={value}
                />
                <ReactToPrint
                  trigger={() => <Button>Print Results</Button>}
                  content={() => simulationResultsRef.current}
                />
              </>
            )}
          </div>
          {/* TODO: Implement local history of simulations in order to compare and contrast over time */}
          {/* <div>
            <h4>History of Simulations</h4>
            <EmptyPlaceholder />
          </div> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default React.memo(SimulationResults);
