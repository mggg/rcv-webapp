import React from "react";

function NumberInput({
  dataid,
  fullWidth,
  handleChange,
  helperText,
  label,
  max,
  maxVariable,
  min,
  value,
  step = 1,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  return (
    <div className={`pr-2 pl-2 ${widthClass}`}>
      <label className="input-label">{label}</label>
      <input
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
