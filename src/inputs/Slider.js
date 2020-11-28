import React from "react";

function Slider({
  dataid,
  fullWidth,
  handleChange,
  helperText,
  id,
  label,
  max,
  maxLabel,
  min,
  minLabel,
  value,
  step = 1,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";

  return (
    <div className={`pr-2 pl-2 ${widthClass}`}>
      <div className="row align-items-center">
        <label className="input-label col-8">{label}</label>
        <div className="col-4 text-right">
          <input
            className="align-self-center input-value"
            onChange={handleChange}
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
          />
        </div>
      </div>
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
        value={value}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}

export default Slider;
