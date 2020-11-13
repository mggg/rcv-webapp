import React from "react";
import _ from "lodash";

function TickedSlider({
  id,
  label,
  handleChange,
  value,
  name,
  helperText,
  min,
  max,
  minLabel,
  maxLabel,
  step = 1,
}) {
  const ticks = _.range(min, max + step, step);
  return (
    <div className="d-flex flex-wrap">
      <label className="input-label w-100">{label}</label>
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
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        list={`${id}-steplist`}
      />
      <datalist
        id={`${id}-steplist`}
        className="d-flex w-100 justify-content-between"
      >
        {ticks.map((tick, i) => (
          <option key={tick} value={tick} />
        ))}
      </datalist>
    </div>
  );
}

export default TickedSlider;
