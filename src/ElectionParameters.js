import React from "react";
import { Card } from "react-bootstrap";
import ResetButton from "./components/ResetButton";

import GenericInput from "./inputs/GenericInput";
import { electionInputs } from "./model/electionData";

function ElectionParameters({ formData, setFormData, resetData }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Election Parameters</h1>
        <ResetButton onClick={resetData} />
      </div>
      <Card className="parameter-container flex-grow-1">
        <Card.Body className="d-flex flex-wrap align-content-start">
          {electionInputs.map((param) => {
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

export default React.memo(ElectionParameters);
