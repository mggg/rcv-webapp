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
    <div className="d-flex flex-wrap w-50 pr-2 pl-2">
      <label className="input-label w-100">{label}</label>
      <span className="ml-auto align-self-center input-value">{value}%</span>
      <div className="d-flex justify-content-between w-100">
        <span className="input-helper-text align-self-center mr-1">
          {minLabel}
        </span>
        <span className="input-helper-text align-self-center ml-1">
          {maxLabel}
        </span>
      </div>
      <input
        type="range"
        className="w-100"
        onChange={handleChange}
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}

export default Slider;
