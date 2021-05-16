import React from "react";

import { Range, getTrackBackground } from "react-range";
import variables from "../styles/temp-variables.js";
// To include the default styles

function Slider({
  minColorFirst,
  value,
  min,
  max,
  step,
  onChange,
  labelFormat,
}) {
  return (
    <Range
      onChange={(values) => onChange(values[0])}
      values={[value]}
      min={min}
      max={max}
      step={step}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          className="slider-track"
          style={{
            ...props.style,
            background: getTrackBackground({
              values: [value],
              colors: minColorFirst
                ? [variables["minColor"], variables["majColor"]]
                : [variables["majColor"], variables["minColor"]],
              min: min,
              max: max,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div {...props} className="slider-thumb">
          {/* Render the tooltip when being dragged */}
          {isDragged && <div className="slider-tooltip">{labelFormat()}</div>}
        </div>
      )}
    />
  );
}

function SplitSlider({
  className,
  minColorFirst,
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
  const paddingClass = padding ? " pr-2 pl-2 " : "p-0";

  return (
    <div className={`${paddingClass} ${widthClass}`}>
      <label className="input-label w-75">{label}</label>
      <div className="d-flex align-items-center justify-content-between">
        {/* Left Value Numeric Input */}
        <input
          className="input-value"
          onChange={(e) => handleChange(e.target.value)}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
        />
        {/* Slider */}
        <span className="pl-3 pr-3 w-100">
          <Slider
            minColorFirst={minColorFirst}
            value={Number(value)}
            min={min}
            max={max}
            step={step}
            labelFormat={() => `${Number(value)}% - ${max - Number(value)}%`}
            onChange={(val) => handleChange(val)}
          />
        </span>
        {/* Right Value Numeric Input */}
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
