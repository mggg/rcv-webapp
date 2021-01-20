import React from "react";
import Slider from "react-rangeslider";
// To include the default styles

function SplitSlider({
  className,
  colorFlip,
  fullWidth,
  handleChange,
  id,
  label,
  leftLabel,
  rightLabel,
  max,
  min,
  padding = true,
  step = 1,
  value,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  const paddingClass = padding ? " pr-2 pl-2 " : "";

  return (
    <div className={`${paddingClass} ${widthClass}`}>
      <label className="input-label w-75">{label}</label>
      <div className="d-flex align-items-center justify-content-between">
        <input
          className="input-value"
          onChange={(e) => handleChange(e.target.value)}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
        />
        <span className="pl-3 pr-3 w-100">
          <Slider
            orientation="horizontal"
            className={colorFlip && "color-flip"}
            value={Number(value)}
            min={min}
            max={max}
            step={step}
            format={(val) => `${val}% - ${max - val}%`}
            onChange={(val) => handleChange(val)}
          />
        </span>
        <input
          className="input-value text-right"
          onChange={(e) => handleChange(max - e.target.value)}
          type="number"
          value={max - value}
          min={min}
          max={max}
          step={step}
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="text-left">
          <label className="d-block input-helper-text mr-1 mb-0">
            {leftLabel}
          </label>
        </div>
        <div className="text-right">
          <label className="d-block input-helper-text ml-1  mb-0">
            {rightLabel}
          </label>
        </div>
      </div>
    </div>
  );
}

export default SplitSlider;