import React from "react";

function NumberInput({
  label,
  handleChange,
  value,
  name,
  helperText,
  step = 1,
}) {
  return (
    <>
      <label className="input-label">{label}</label>
      <input
        name={name}
        type="number"
        onChange={handleChange}
        value={value}
        step={step}
      />
      <p className="input-helper-text">{helperText}</p>
    </>
  );
}

export default NumberInput;
