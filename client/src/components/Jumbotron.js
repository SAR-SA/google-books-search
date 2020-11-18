import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      // style={{ height: 200, clear: "both", paddingTop: 120, textAlign: "center", background-image: url("image.png") }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
