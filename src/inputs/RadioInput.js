import React from "react";

function RadioInput({
  fullWidth,
  handleChange,
  id,
  label,
  options,
  type,
  value,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";

  return (
    <div className={`pr-2 pl-2 ${widthClass}`}>
      <label className="input-label">{label}</label>
      <fieldset id={id}>
        {options.map((option) => {
          return (
            <div className="d-flex align-items-center pb-1" key={option.id}>
              <input
                type="radio"
                id={option.id}
                onChange={handleChange}
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
