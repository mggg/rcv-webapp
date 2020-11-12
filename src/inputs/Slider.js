import React from "react";

function Slider({
  id,
  label,
  handleChange,
  value,
  name,
  helperText,
  min,
  max,
  minLabel,
  maxLabel,
  step = 1,
}) {
  return (
    <div className="d-flex flex-wrap">
      <label className="input-label w-100">{label}</label>
      <div className="d-flex justify-content-between w-75">
        <span className="input-helper-text align-self-center mr-1">
          {minLabel}
        </span>
        <span className="input-helper-text align-self-center ml-1">
          {maxLabel}
        </span>
      </div>
      <input
        type="range"
        className="w-75"
        onChange={handleChange}
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
      />
      <span className="ml-auto">{value}%</span>
    </div>
  );
}

export default Slider;
