import React from "react";

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
      <label className="input-label">{label}</label>
      <fieldset id={dataid}>
        {options.map((option) => {
          return (
            <div className="d-flex align-items-center pb-1" key={option.id}>
              <input
                type="radio"
                id={option.id}
                name={dataid}
                onChange={(e) => handleChange(e.target.value)}
                value={option.value}
                checked={option.value === parseInt(value)}
                className="d-inline"
              />
              <label htmlFor={option.id} className="input-option-text">
                {option.label}
              </label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
}

export default RadioInput;
