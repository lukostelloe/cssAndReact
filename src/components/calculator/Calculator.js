import React from "react";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator_top">
        <button className="calculator_clear">C</button>
        <div className="calculator_screen">
          <div className="calculator_screen_size">
            <div classNamwe="calculator_screen_info">2+2=5</div>
          </div>
        </div>
      </div>
      <div className="calculator_buttons">
        <button className="calculator_button">7</button>
        <button className="calculator_button">8</button>
        <button className="calculator_button">9</button>
        <button className="calculator_button">+</button>
        <button className="calculator_button">4</button>
        <button className="calculator_button">5</button>
        <button className="calculator_button">6</button>
        <button className="calculator_button">-</button>
        <button className="calculator_button">1</button>
        <button className="calculator_button">2</button>
        <button className="calculator_button">3</button>
        <button className="calculator_button">÷</button>
        <button className="calculator_button">0</button>
        <button className="calculator_button">.</button>
        <button className="calculator_button">=</button>
        <button className="calculator_button">X</button>
      </div>
    </div>
  );
}

export default Calculator;
