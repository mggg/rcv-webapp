import React from "react";
import { Card } from "react-bootstrap";

function ParameterContainer(props) {
  return (
    <Card body className="flex-grow-1">
      {props.children}
    </Card>
  );
}

export default ParameterContainer;
