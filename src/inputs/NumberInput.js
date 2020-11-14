import React from "react";

function NumberInput({
  label,
  handleChange,
  value,
  name,
  min,
  max,
  maxVariable,
  fullWidth,
  helperText,
  step = 1,
}) {
  const widthClass = fullWidth ? " w-100 " : " w-50 ";
  return (
    <div className={`pr-2 pl-2 ${widthClass}`}>
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
