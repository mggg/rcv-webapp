import React from "react";
import NumberInput from "./NumberInput";
import ParameterContainer from "./ParameterContainer";
import Slider from "./Slider";

function ElectionParameters({ formData, setFormData, formInputs }) {
  const handleChange = (event) => {
    const formDataCopy = { ...formData };
    formDataCopy[event.target.name] = event.target.value;
    setFormData(formDataCopy);
  };

  const handleAntiChange = (max) => {
    return (event) => {
      const formDataCopy = { ...formData };
      formDataCopy[event.target.name] = max - event.target.value;
      setFormData(formDataCopy);
    };
  };

  return (
    <>
      <h1>Election Parameters</h1>
      <ParameterContainer>
        {formInputs.map((param) => {
          switch (param.type) {
            case "number":
              return (
                <NumberInput
                  id={param.id}
                  key={param.id}
                  // Note: This is used to key onto the formData object, and is crucial for successfully updating the formData appropriately
                  name={param.name}
                  label={param.label}
                  handleChange={handleChange}
                  step={param.step}
                  min={param.min}
                  max={param.max}
                  value={formData[param.name]}
                  helperText={param.helperText}
                />
              );
            case "slider":
              return (
                <Slider
                  id={param.id}
                  key={param.id}
                  // Note: This is used to key onto the formData object, and is crucial for successfully updating the formData appropriately
                  name={param.name}
                  label={param.label}
                  handleChange={handleChange}
                  step={param.step}
                  min={param.min}
                  max={param.max}
                  minLabel={param.minLabel}
                  maxLabel={param.maxLabel}
                  value={formData[param.name]}
                  helperText={param.helperText}
                />
              );
            case "anti-slider":
              return (
                <Slider
                  id={param.id}
                  key={param.id}
                  // Note: This is used to key onto the formData object, and is crucial for successfully updating the formData appropriately
                  name={param.name}
                  label={param.label}
                  handleChange={handleAntiChange(param.max)}
                  step={param.step}
                  min={param.min}
                  max={param.max}
                  minLabel={param.minLabel}
                  maxLabel={param.maxLabel}
                  value={param.max - formData[param.name]}
                  helperText={param.helperText}
                />
              );
            default:
              console.warn(
                `Seeing a new kind of parameter type: ${param.type}`
              );
              return null;
          }
        })}
      </ParameterContainer>
    </>
  );
}

export default ElectionParameters;
