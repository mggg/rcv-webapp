import React from "react";
import { GitHub } from "react-feather";

function Footer() {
  const style = {
    fontSize: "0.8rem",
    position: "relative",
    bottom: 0,
  };
  return (
    <footer className="w-100 text-center p-3" style={style}>
      Built and Designed by Dylan Phelan |{" "}
      <a href="https://github.com/Dtphelan1">
        <GitHub size={12} /> @dtphelan1{" "}
      </a>
    </footer>
  );
}

export default Footer;
