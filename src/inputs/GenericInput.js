import React from "react";
import NumberInput from "./NumberInput";
import RadioInput from "./RadioInput";
import Slider from "./SplitSlider";
import TickedSlider from "./TickedSlider";

function GenericInput({ param, formData, setFormData, formInputs }) {
  const handleChange = (param) => (value) => {
    const transformFunction = param.updateTransform || ((arg) => arg);
    const formDataCopy = { ...formData };
    formDataCopy[param.dataid] = transformFunction(
      value,
      param.dataid,
      formDataCopy
    );
    setFormData(formDataCopy);
  };

  switch (param.type) {
    case "number":
      return (
        <NumberInput
          {...param}
          max={param.maxVariable ? formData[param.maxVariable] : param.max}
          handleChange={handleChange(param)}
          value={formData[param.dataid]}
        />
      );
    case "split-slider":
      return (
        <Slider
          {...param}
          handleChange={handleChange(param)}
          value={formData[param.dataid]}
        />
      );
    case "ticked-slider":
      return (
        <TickedSlider
          {...param}
          handleChange={handleChange(param)}
          value={formData[param.dataid]}
        />
      );
    case "radio":
      return (
        <RadioInput
          {...param}
          handleChange={handleChange(param)}
          value={formData[param.dataid]}
          formData={formData}
        />
      );
    default:
      console.warn(`Seeing a new kind of parameter type: ${param.type}`);
      return null;
  }
}

export default GenericInput;
