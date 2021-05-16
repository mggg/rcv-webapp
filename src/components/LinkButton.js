import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function LinkButton({ history, to, children }) {
  return (
    <Button variant="primary" size="lg" onClick={() => history.push(to)}>
      {children}
    </Button>
  );
}

export default withRouter(LinkButton);
