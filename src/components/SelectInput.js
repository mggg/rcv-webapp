import React from "react";
import { Form } from "react-bootstrap";

function SelectInput({ title, options, setValue }) {
  return (
    <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>{title}</Form.Label>
      <Form.Control as="select" onChange={setValue}>
        {options.map((opt) => {
          return (
            <option key={opt.id} value={opt.id}>
              {opt.display}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
}

export default SelectInput;
