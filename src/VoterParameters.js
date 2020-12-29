import React from "react";
import { Card } from "react-bootstrap";
import ResetButton from "./components/ResetButton";

import GenericInput from "./inputs/GenericInput";
import { voterInputs } from "./model/voterData";

function ElectionParameters({ formData, setFormData, resetData }) {
  return (
    <>
      <div className="d-flex">
        <h1>Voter Parameters</h1>
        <ResetButton onClick={resetData} />
      </div>
      <Card className="parameter-container flex-grow-1">
        <Card.Body className="d-flex flex-wrap align-content-start">
          {voterInputs.map((param) => {
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
