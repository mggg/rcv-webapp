import React from "react";
import { Card, Row } from "react-bootstrap";
import ResetButton from "./components/ResetButton";

import GenericInput from "./inputs/GenericInput";
import { electionInputs } from "./model/electionData";

function ElectionParameters({ formData, setFormData, resetData }) {
  return (
    <>
      <div className="d-flex">
        <h1>Election Details</h1>
        <ResetButton onClick={resetData} />
      </div>
      <Card className="parameter-container flex-grow-1">
        <Row as={Card.Body} noGutters className="align-content-start">
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
        </Row>
      </Card>
    </>
  );
}

export default React.memo(ElectionParameters);
