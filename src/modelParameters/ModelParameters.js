import React, { useState } from "react";
import { Nav } from "react-bootstrap";
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
    component: BradleyTerryModelParameters,
  },
  {
    id: "alternatingCrossover",
    name: "alternatingCrossover",
    display: "Alternating-Crossover",
    component: AlternatingCrossoverModelParameters,
  },
  {
    id: "cambridgeSampler",
    name: "cambridgeSampler",
    display: "Cambridge Sampler",
    component: CambridgeSamplerModelParameters,
  },
];

function renderSelectedModelParameters(
  selectedModel,
  formData,
  setFormData,
  formInputs
) {
  const SelectedModelParameters =
    models.find((model) => model.name === selectedModel) &&
    models.find((model) => model.name === selectedModel).component;
  return (
    <SelectedModelParameters
      formData={formData}
      setFormData={setFormData}
      formInputs={formInputs[selectedModel]}
    />
  );
}

function ModelParameters({ formData, setFormData, formInputs }) {
  const [selectedModel, setSelectedModel] = useState(models[0].name);
  return (
    <>
      <h1>Model Parameters</h1>
      <ParameterContainer
        headerComponent={
          <Nav
            variant="tabs"
            defaultActiveKey={models[0].name}
            onSelect={(k) => {
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
        {renderSelectedModelParameters(
          selectedModel,
          formData,
          setFormData,
          formInputs
        )}
      </ParameterContainer>
    </>
  );
}

export default ModelParameters;
