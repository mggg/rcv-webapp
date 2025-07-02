import React from "react";
import qs from "qs";
import axios from "axios";
import { Card, Row } from "react-bootstrap";
import Spinner from "./components/Spinner";
import SimulationVisualization from "./components/SimulationVisualization";
import SaveButton from "./components/SaveButton";
import RunButton from "./components/RunButton";
import LoadingButton from "./components/LoadingButton";
import useAsync from "./hooks/useAsync";
import GenericInput from "./inputs/GenericInput";
import { getApiEndpoint, filterDataByModelTypes } from "./model/rcvModelData";
import { rcvTypesToVisualize } from "./model/rcvTypesToVisualize";

function SimulationInformation({
  appRef,
  combineFormData,
  formData,
  formInputs,
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
    selectedModel ? selectedModel : undefined
  );

  const fetchData = async () => {
    const response = await axios.get(apiURL, {
      // Filter all the query params by the selectedModel
      params: relevantParams,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    });
    const data = response.data;
    // Translate the response data into a list of data for each type of RCV election
    return {
      seatsOpen: data.seats_open,
      rcvTypeLabels: rcvTypesToVisualize.map(
        (modelType) => modelType["display"]
      ),
      rcvTypeResults: rcvTypesToVisualize.map((modelType) => {
        return modelType["getPocElected"](data);
      }),
    };
  };

  // Store the results of simulations in state, as well as request status/error
  const { execute, status, value, error } = useAsync(fetchData, false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Simulations</h1>
      </div>
      <Card className="parameter-container">
        <Card.Body>
          {/* First div: the inputs in the form of a row, and the button to trigger sims */}
          <Row noGutters className="align-content-start">
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
          </Row>
          <div>
            {/* Second div: the results of the current simulation */}
            <div className="d-flex justify-content-between">
              <h4>Election Results</h4>
              {/* Download and save buttons */}
              <div className="d-flex">
                {status === "success" && <SaveButton refToSave={appRef} />}
                {status !== "pending" ? (
                  <RunButton onClick={execute} />
                ) : (
                  <LoadingButton />
                )}
              </div>
            </div>
            {/* Results of the simulation */}
            {/* When errors are present, log them to the console */}
            {status === "error" && (
              <p>
                There was an error processing those simulations. MGGG is no longer able to maintain this
               application. Please contact us at code@mggg.org if you would like to join an effort to relaunch this app.
              Or see VoteKit, our new Python package for simulating RCV.
                {console.error(error)}
              </p>
            )}
            {/* While loading, display a spinner */}
            {status === "pending" && (
              <div className="d-flex flex-column w-100">
                <div style={{ height: "415px" }}>
                  <Spinner />
                </div>
              </div>
            )}
            {/* Show an empty viz when no simulations have been triggered or completed  */}
            {status === "idle" && <SimulationVisualization />}
            {/* Display the results of the simulation when completed */}
            {status === "success" && (
              <SimulationVisualization
                simulationResults={value}
                simulationParams={relevantParams}
                selectedModel={selectedModel}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default React.memo(SimulationInformation);
