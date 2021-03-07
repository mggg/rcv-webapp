import React from "react";
import { Button } from "react-bootstrap";
import { Loader } from "react-feather";

function LoadingButton() {
  return (
    <Button
      className="d-flex ml-1 justify-content-center align-items-center"
      size="sm"
      disabled={true}
    >
      <Loader size={16} className="mr-1" />
      Loading...
    </Button>
  );
}

export default LoadingButton;
