import React, { useState } from "react";
import { Card, Tab, Tabs, Nav } from "react-bootstrap";
import LuceModelParameters from "./LuceModelParameters";
import CambridgeSamplerModelParameters from "./CambridgeSamplerModelParameters";
import BradleyTerryModelParameters from "./BradleyTerryModelParameters";
import AlternatingCrossoverModelParameters from "./AlternatingCrossoverModelParameters";
import ParameterContainer from "../ParameterContainer";

const models = [
  {
    id: "luce",
    name: "luce",
    display: "Luce",
    component: LuceModelParameters,
  },
  {
    id: "bradleyTerry",
    name: "bradleyTerry",
    display: "Bradley-Terry",
    component: CambridgeSamplerModelParameters,
  },
  {
    id: "alternatingCrossover",
    name: "alternatingCrossover",
    display: "Alternating-Crossover",
    component: BradleyTerryModelParameters,
  },
  {
    id: "cambridgeSampler",
    name: "cambridgeSampler",
    display: "Cambridge Sampler",
    component: AlternatingCrossoverModelParameters,
  },
];
function renderSelectedModelParameters(selectedModel) {
  const SelectedModelParameters =
    models.find((model) => model.name === selectedModel) &&
    models.find((model) => model.name === selectedModel).component;
  return <SelectedModelParameters />;
}

function ModelParameters() {
  const [selectedModel, setSelectedModel] = useState(models[0].name);
  console.log(models.find((model) => model.name === selectedModel).component);
  return (
    <>
      <h1>Model Parameters</h1>
      <ParameterContainer
        headerComponent={
          <Nav
            variant="tabs"
            defaultActiveKey={models[0].name}
            onSelect={(k) => {
              console.log(k);
              setSelectedModel(k);
            }}
          >
            {models.map((model) => (
              <Nav.Item key={model.id}>
                <Nav.Link eventKey={model.name}>{model.display}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        }
      >
        {renderSelectedModelParameters(selectedModel)}
      </ParameterContainer>
    </>
  );
}

export default ModelParameters;
