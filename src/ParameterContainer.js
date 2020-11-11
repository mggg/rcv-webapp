import React from "react";
import { Card } from "react-bootstrap";

function ParameterContainer(props) {
  return (
    <Card className="flex-grow-1">
      {props.headerComponent && (
        <Card.Header>{props.headerComponent}</Card.Header>
      )}
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}

export default ParameterContainer;
