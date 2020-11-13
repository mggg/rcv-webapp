import React from "react";
import _ from "lodash";
import NumberInput from "./NumberInput";
import Slider from "./Slider";
import TickedSlider from "./TickedSlider";

function GenericInput({ param, formData, setFormData, formInputs }) {
  const handleChange = (param) => (event) => {
    const transformFunction = param.updateTransform || ((arg) => arg);
    const formDataCopy = { ...formData };
    formDataCopy[event.target.name] = transformFunction(event.target.value);
    setFormData(formDataCopy);
  };

  switch (param.type) {
    case "number":
      return (
        <NumberInput
          {...param}
          handleChange={handleChange(param)}
          value={formData[param.name]}
        />
      );
    case "slider":
      return (
        <Slider
          {...param}
          handleChange={handleChange(param)}
          value={formData[param.name]}
        />
      );
    case "ticked-slider":
      return (
        <TickedSlider
          {...param}
          handleChange={handleChange(param)}
          value={formData[param.name]}
        />
      );

    case "anti-slider":
      return (
        <Slider
          {...param}
          handleChange={handleChange(param)}
          value={param.max - formData[param.name]}
        />
      );
    default:
      console.warn(`Seeing a new kind of parameter type: ${param.type}`);
      return null;
  }
}

export default GenericInput;
