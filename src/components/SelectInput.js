import React from "react";
import { Form } from "react-bootstrap";

function SelectInput({ title, options, setValue, value }) {
  return (
    <Form.Group controlId="exampleForm.SelectCustom">
      {title && <Form.Label>{title}</Form.Label>}
      <Form.Control
        as="select"
        onChange={(e) => setValue(e.target.value)}
        custom
        value={value}
      >
        {options.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
}

export default SelectInput;
