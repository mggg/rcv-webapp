import React from "react";

function NumberInput(props) {
  return (
    <>
      <label className="input-label">{props.label}</label>
      <input
        type="number"
        onChange={(e) => props.handleChange(e.target.value)}
        value={props.value}
      />
      <p className="input-helper-text">{props.helperText}</p>
    </>
  );
}

export default NumberInput;
