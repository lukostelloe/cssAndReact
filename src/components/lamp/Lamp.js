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
        <div className="lamp_baseOn">
          <button className="lamp_button" onClick={toggleTurnOnOff}></button>
        </div>
      ) : (
        <div className="lamp_baseOff">
          <button className="lamp_button" onClick={toggleTurnOnOff}></button>
        </div>
      )}
    </div>
  );
}

export default Lamp;
