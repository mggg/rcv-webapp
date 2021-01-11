import React from "react";
import { Nav, Card } from "react-bootstrap";

import ResetButton from "./components/ResetButton";
import GenericInput from "./inputs/GenericInput";
import {
  models,
  modelInputs,
  filterInputsByModelType,
} from "./model/rcvModelData";

function ModelParameters({
  formData,
  resetData,
  selectedModel,
  setFormData,
  setSelectedModel,
}) {
  return (
    <>
      <div className="d-flex">
        <h1>Model Settings</h1>
        <ResetButton onClick={resetData} />
      </div>
      <Card className="parameter-container flex-grow-1">
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey={selectedModel}
            onSelect={(keyForEachModel) => {
              setSelectedModel(keyForEachModel);
            }}
          >
            {models.map((model) => (
              <Nav.Item key={model.id}>
                <Nav.Link eventKey={model.display}>{model.display}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Card.Header>
        <Card.Body className="d-flex flex-wrap align-content-start">
          {filterInputsByModelType(modelInputs, selectedModel).map((param) => (
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

export default React.memo(ModelParameters);
