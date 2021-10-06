import { React, useState } from "react";
import clsx from "clsx";
import "./Lamp.css";

function Lamp() {
  const [lightOn, setLightOn] = useState(false);

  function toggleTurnOnOff() {
    if (lightOn === false) {
      setLightOn(true);
    } else if (lightOn === true) {
      setLightOn(false);
    }
  }

  const lampClasses = clsx(
    lightOn ? "lamp_base--on" : "lamp_base--off",
    "lamp_base"
  );

  return (
    <div>
      <div className="lamp">
        <div className="lamp_stand"></div>
        <div className="lamp_arm"></div>
        <div className={lampClasses}>
          <div className="lamp_head"></div>
          <button className="lamp_button" onClick={toggleTurnOnOff}>
            I/O
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lamp;
