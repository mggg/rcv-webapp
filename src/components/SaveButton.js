import React from "react";
import { Button } from "react-bootstrap";
import { Download } from "react-feather";
import { exportComponentAsPNG } from "react-component-export-image";

function SaveButton({ refToSave }) {
  return (
    <div className="d-flex justify-content-between">
      <Button
        onClick={() => {
          console.log(
            "🚀 ~ file: SaveButton.js ~ line 12 ~ SaveButton ~ refToSave",
            refToSave
          );
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
