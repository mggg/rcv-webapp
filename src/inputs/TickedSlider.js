import React from "react";
import _ from "lodash";

function TickedSlider({
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
  const ticks = _.range(min, max + step, step);
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  return (
    <div className={`pr-2 pl-2 ${widthClass}`}>
      <label className="input-label">{label}</label>
      <div className="d-flex justify-content-between">
        <span className="input-helper-text align-self-center mr-1 text-left">
          {minLabel}
        </span>
        <span className="input-helper-text align-self-center ml-1 text-right">
          {maxLabel}
        </span>
      </div>
      <input
        type="range"
        onChange={handleChange}
        value={value}
        min={min}
        max={max}
        step={step}
        list={`${id}-steplist`}
        className="w-100"
      />
      <datalist
        id={`${id}-steplist`}
        className="d-flex justify-content-between ticked-slider-datalist"
      >
        {ticks.map((tick, i) => (
          <option key={tick} value={tick} />
        ))}
      </datalist>
    </div>
  );
}

export default TickedSlider;
