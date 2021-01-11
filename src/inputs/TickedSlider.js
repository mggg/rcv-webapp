import React from "react";
import _ from "lodash";
import { Range, getTrackBackground } from "react-range";
import variables from "../styles/_variables.scss";

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
  padding = true,
  step = 1,
  value,
}) {
  const ticks = _.range(min, max + step, step);
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  const paddingClass = padding ? " pr-2 pl-2 " : "";

  return (
    <div className={`${paddingClass} ${widthClass}`}>
      <label className="input-label">{label}</label>
      <div className="d-flex mb-2 justify-content-between">
        <span className="input-helper-text align-self-center mr-1 text-left">
          {minLabel}
        </span>
        <span className="input-helper-text align-self-center ml-1 text-right">
          {maxLabel}
        </span>
      </div>
      <Range
        onChange={(values) => handleChange(values[0])}
        values={[value]}
        min={min}
        max={max}
        step={step}
        marks={ticks}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              borderRadius: "10px",
              boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.4)",
              marginBottom: "6px",
              background: getTrackBackground({
                values: [value],
                colors: [variables.primary, "#ccc"],
                min: min,
                max: max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => <div {...props} className="ticked_thumb" />}
        renderMark={({ props }) => <div {...props} className="ticked_mark" />}
      />
    </div>
  );
}

export default TickedSlider;
