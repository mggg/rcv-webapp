import React, { useState } from "react";
import { Nav, Card } from "react-bootstrap";
import GenericInput from "./inputs/GenericInput";

function ModelParameters({
  filterInputsByModelType,
  formData,
  formInputs,
  models,
  setFormData,
}) {
  const [selectedModel, setSelectedModel] = useState(models[2].dataid);
  return (
    <>
      <h1>Model Parameters</h1>
      <Card className="parameter-container flex-grow-1">
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey={selectedModel}
            onSelect={(k) => {
              setSelectedModel(k);
            }}
          >
            {models.map((model) => (
              <Nav.Item key={model.id}>
                <Nav.Link eventKey={model.dataid}>{model.display}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Card.Header>
        <Card.Body className="d-flex flex-wrap align-content-start">
          {filterInputsByModelType(formInputs, selectedModel).map((param) => (
            <GenericInput
              key={param.id}
              param={param}
              formData={formData}
              setFormData={setFormData}
            />
          ))}
        </Card.Body>
      </Card>
    </>
  );
}

export default ModelParameters;
