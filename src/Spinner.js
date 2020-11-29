import React from "react";

function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <div
        className="spinner-border"
        style={{ height: 75, width: 75, marginTop: -75 }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
