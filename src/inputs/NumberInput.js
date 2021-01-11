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
  padding = true,
  step = 1,
  value,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  const paddingClass = padding ? " pr-2 pl-2 " : "p-0";

  return (
    <div className={`${paddingClass} ${widthClass}`}>
      <label className="input-label">{label}</label>
      <input
        type="number"
        onChange={(e) => handleChange(e.target.value)}
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
