import React from "react";
import "../styles/radioInput.scss";

function RadioInput({
  dataid,
  fullWidth,
  handleChange,
  id,
  label,
  options,
  padding = true,
  type,
  value,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  const paddingClass = padding ? " pr-2 pl-2 " : "";

  return (
    <div className={`${paddingClass} ${widthClass}`}>
      <div className="input-label pb-1">{label}</div>
      {options.map((option) => {
        return (
          <div key={option.id} className="pb-1">
            <input
              type="radio"
              id={option.id}
              name={dataid}
              onChange={(e) => handleChange(e.target.value)}
              value={option.value}
              checked={option.value === parseInt(value)}
              className="d-inline"
            />
            <label htmlFor={option.id} className="radio-option-text">
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioInput;
