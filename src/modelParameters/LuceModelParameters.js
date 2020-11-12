import React from "react";
import GenericInput from "../inputs/GenericInput";

function LuceModelParameters({ formData, setFormData, formInputs }) {
  return (
    <>
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
    </>
  );
}

export default LuceModelParameters;
