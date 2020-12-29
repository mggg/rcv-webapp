import React from "react";
import Slider from "react-rangeslider";
// To include the default styles

function TestSlider({
  className,
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
  padding = true,
  step = 1,
  value,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  const paddingClass = padding ? " pr-2 pl-2 " : "";

  return (
    <div className={`${paddingClass} ${widthClass}`}>
      <div className="row align-items-center">
        <label className="input-label col-8">{label}</label>
        <div className="col-4 text-right">
          <input
            className="align-self-center input-value text-right"
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
      {/* <input
        type="range"
        className="w-100 green-purple-slider"
        onChange={handleChange}
        value={value}
        min={min}
        max={max}
        step={step}
      /> */}
      <Slider
        value={Number(value)}
        min={min}
        max={max}
        step={step}
        orientation="horizontal"
        onChange={(val, event) => {
          event.target.value = val;
          return handleChange(event);
        }}
      />
    </div>
  );
}

export default TestSlider;
