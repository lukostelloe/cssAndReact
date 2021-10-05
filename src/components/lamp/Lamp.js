import { React, useState } from "react";
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

  return (
    <div>
      {lightOn ? (
        <div className="lamp">
          <div className="lamp_stand"></div>
          <div className="lamp_arm"></div>
          <div className="lamp_baseOn">
            <div className="lamp_head"></div>
            <button className="lamp_button" onClick={toggleTurnOnOff}></button>
          </div>
        </div>
      ) : (
        <div className="lamp">
          <div className="lamp_stand"></div>
          <div className="lamp_arm"></div>
          <div className="lamp_baseOff">
            <div className="lamp_head"></div>
            <button className="lamp_button" onClick={toggleTurnOnOff}></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lamp;
