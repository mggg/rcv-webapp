import React, { useState } from "react";
import { Nav } from "react-bootstrap";
// import LuceModelParameters from "./LuceModelParameters";
import GenericInput from "./inputs/GenericInput";
import ParameterContainer from "./ParameterContainer";

const models = [
  {
    id: "luce",
    name: "luce",
    display: "Luce",
  },
  {
    id: "bradleyTerry",
    name: "bradleyTerry",
    display: "Bradley-Terry",
  },
  {
    id: "alternatingCrossover",
    name: "alternatingCrossover",
    display: "Alternating-Crossover",
  },
  {
    id: "cambridgeSampler",
    name: "cambridgeSampler",
    display: "Cambridge Sampler",
  },
];

function renderSelectedModelParameters(
  selectedModel,
  formData,
  setFormData,
  formInputs
) {
  // const SelectedModelParameters =
  //   models.find((model) => model.name === selectedModel) &&
  //   models.find((model) => model.name === selectedModel).component;
  return (
    <>
      {formInputs[selectedModel].map((param) => {
        return (
          <GenericInput
            key={param.id}
            param={param}
            formData={formData}
            setFormData={setFormData}
          />
        );
      })}
    </>
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
