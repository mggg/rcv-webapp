import React from "react";
import { RefreshCw } from "react-feather";

function ResetButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      // variant="outline-primary"
      className="btn mr-0 ml-1 mt-2 mb-2 d-flex justify-content-center align-items-center"
    >
      <RefreshCw size={18} className="mr-1" />
      Reset
    </button>
  );
}

export default ResetButton;
