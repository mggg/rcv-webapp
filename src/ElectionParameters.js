import React from "react";
import { Card } from "react-bootstrap";
import GenericInput from "./inputs/GenericInput";

function ElectionParameters({ formData, setFormData, formInputs }) {
  return (
    <>
      <h1>Election Parameters</h1>
      <Card className="parameter-container flex-grow-1">
        <Card.Body className="d-flex flex-wrap">
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
        </Card.Body>
      </Card>
    </>
  );
}

export default ElectionParameters;
