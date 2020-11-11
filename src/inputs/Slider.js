import React from "react";

function Slider({
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
      <label className="w-100">{label}</label>
      <span className="input-helper-text align-self-center mr-1">
        {minLabel}
      </span>
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
      <span className="input-helper-text align-self-center ml-1">
        {maxLabel}
      </span>
      <span className="ml-auto">{value}%</span>
      <p className="input-helper-text w-100">{helperText}</p>
    </div>
  );
}

export default Slider;
