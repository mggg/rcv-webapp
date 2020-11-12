import React from "react";
import GenericInput from "./inputs/GenericInput";
import ParameterContainer from "./ParameterContainer";

function ElectionParameters({ formData, setFormData, formInputs }) {
  return (
    <>
      <h1>Election Parameters</h1>
      <ParameterContainer>
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
      </ParameterContainer>
    </>
  );
}

export default ElectionParameters;
