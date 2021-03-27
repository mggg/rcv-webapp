import React from "react";
import { Card, Row } from "react-bootstrap";
import ResetButton from "./ResetButton";

import GenericInput from "../inputs/GenericInput";

function InputParametersCard({
  formTitle,
  formData,
  formInputs,
  setFormData,
  resetData,
}) {
  return (
    <>
      <div className="d-flex">
        <h1>{formTitle}</h1>
        <ResetButton onClick={resetData} />
      </div>
      <Card className="parameter-container">
        <Row as={Card.Body} noGutters className="align-content-start">
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
        </Row>
      </Card>
    </>
  );
}

export default React.memo(InputParametersCard);
