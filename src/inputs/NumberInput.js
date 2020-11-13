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
    <div>
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
      <span className="d-block input-helper-text">{helperText}</span>
    </div>
  );
}

export default NumberInput;
