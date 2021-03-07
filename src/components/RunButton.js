import React from "react";
import { Button } from "react-bootstrap";
import { Play } from "react-feather";
function RunButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="d-flex ml-1 justify-content-center align-items-center"
      size="sm"
    >
      <Play size={16} className="mr-1" />
      Run
    </Button>
  );
}

export default RunButton;
