import React from "react";

function NumberInput({
  label,
  handleChange,
  value,
  name,
  min,
  max,
  helperText,
  step = 1,
}) {
  return (
    <div className="sm-6">
      <label className="input-label">{label}</label>
      <input
        name={name}
        type="number"
        onChange={handleChange}
        value={value}
        step={step}
        min={min}
        max={max}
      />
      <p className="input-helper-text">{helperText}</p>
    </div>
  );
}

export default NumberInput;
