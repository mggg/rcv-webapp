import React from "react";
import { Nav, Card } from "react-bootstrap";
import GenericInput from "./inputs/GenericInput";
import {
  models,
  modelInputs,
  filterInputsByModelType,
} from "./model/rcvModelData";

function ModelParameters({
  formData,
  selectedModelDataid,
  setFormData,
  setSelectedModelDataid,
}) {
  return (
    <>
      <h1>Model Parameters</h1>
      <Card className="parameter-container flex-grow-1">
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey={selectedModelDataid}
            onSelect={(k) => {
              setSelectedModelDataid(k);
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
          {filterInputsByModelType(modelInputs, selectedModelDataid).map(
            (param) => (
              <GenericInput
                key={param.id}
                param={param}
                formData={formData}
                setFormData={setFormData}
              />
            )
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default React.memo(ModelParameters);
