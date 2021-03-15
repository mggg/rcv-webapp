import React from "react";
import { Form } from "react-bootstrap";
import "../styles/radioInput.scss";

function RadioInput({
  dataid,
  fullWidth,
  handleChange,
  id,
  label,
  options,
  padding = true,
  value,
}) {
  const widthClass = fullWidth ? " col-12 " : " col-sm-6 ";
  const paddingClass = padding ? " pr-2 pl-2 " : "p-0";

  return (
    <div className={`${paddingClass} ${widthClass}`}>
      <div className="input-label pb-1">{label}</div>
      {options.map((option) => {
        return (
          <div key={option.id} className="pb-1">
            <Form.Check
              custom
              type="checkbox"
              id={option.id}
              name={dataid}
              onChange={(e) => handleChange(e.target.value)}
              value={option.value}
              checked={value.includes(option.value)}
              className="d-inline"
            />
            <label htmlFor={option.id} className="checkbox-option-text">
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioInput;
