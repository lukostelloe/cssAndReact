import React from "react";
import "./Pencil.css";

function Pencil(props) {
  console.log(props);
  return (
    <div className="pencil_container">
      <div
        className="pencil"
        style={{ backgroundColor: props.color, transform: props.transform }}
      >
        <div className="pencil_shadow"></div>
        <div className="pencil_tip"></div>
      </div>
    </div>
  );
}

export default Pencil;
