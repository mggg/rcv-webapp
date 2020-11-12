import React from "react";
import NumberInput from "./NumberInput";
import Slider from "./Slider";
import TickedSlider from "./TickedSlider";

function GenericInput({ param, formData, setFormData, formInputs }) {
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

  switch (param.type) {
    case "number":
      return (
        <NumberInput
          {...param}
          handleChange={handleChange}
          value={formData[param.name]}
        />
      );
    case "slider":
      return (
        <Slider
          {...param}
          handleChange={handleChange}
          value={formData[param.name]}
        />
      );
    case "ticked-slider":
      return (
        <TickedSlider
          {...param}
          handleChange={handleChange}
          value={formData[param.name]}
        />
      );

    case "anti-slider":
      return (
        <Slider
          {...param}
          handleChange={handleAntiChange(param.max)}
          value={param.max - formData[param.name]}
        />
      );
    default:
      console.warn(`Seeing a new kind of parameter type: ${param.type}`);
      return null;
  }
}

export default GenericInput;
