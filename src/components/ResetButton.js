import React from "react";
import { Button } from "react-bootstrap";
import { RefreshCw } from "react-feather";

function ResetButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="mr-0 mt-2 mb-2 d-flex justify-content-center align-items-center"
    >
      <RefreshCw size={18} className="mr-1" />
      Reset
    </Button>
  );
}

export default ResetButton;
