import React, { useState } from "react";
import { Nav, Card } from "react-bootstrap";
import GenericInput from "./inputs/GenericInput";

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
      <Card className="parameter-container flex-grow-1">
        <Card.Header>
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
        </Card.Header>
        <Card.Body className="">
          {renderSelectedModelParameters(
            selectedModel,
            formData,
            setFormData,
            formInputs
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ModelParameters;
