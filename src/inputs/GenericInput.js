import React from "react";
import NumberInput from "./NumberInput";
import RadioInput from "./RadioInput";
import Slider from "./Slider";
import TickedSlider from "./TickedSlider";

function GenericInput({ param, formData, setFormData, formInputs }) {
  const handleChange = (param) => (event) => {
    const transformFunction = param.updateTransform || ((arg) => arg);
    const formDataCopy = { ...formData };
    formDataCopy[param.dataid] = transformFunction(
      event.target.value,
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

    case "anti-number":
      return (
        <NumberInput
          {...param}
          max={param.maxVariable ? formData[param.maxVariable] : param.max}
          handleChange={handleChange(param)}
          value={formData[param.maxVariable] - formData[param.dataid]}
        />
      );
    case "slider":
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
    case "anti-slider":
      return (
        <Slider
          {...param}
          handleChange={handleChange(param)}
          value={param.max - formData[param.dataid] + param.min}
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
