import React from "react";
import { Button } from "react-bootstrap";
import { Download } from "react-feather";
import { exportComponentAsPNG } from "react-component-export-image";

function SaveButton({ refToSave }) {
  return (
    <div className="d-flex justify-content-between">
      <Button
        onClick={() => {
          exportComponentAsPNG(refToSave);
        }}
        className="d-flex justify-content-center align-items-center"
        size="sm"
      >
        <Download size={16} className="mr-1" />
        Save
      </Button>
    </div>
  );
}

export default SaveButton;
