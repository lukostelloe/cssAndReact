import { React, useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [numberArray, setNumberArray] = useState([]);

  function onDisplayChange(e) {
    console.log(e.target.name);
    setNumberArray([...numberArray, e.target.name]);
    console.log(numberArray);
  }

  // onDisplay(e) {
  //   setNumberArray([...numberArray, e.target.value]);
  // }

  return (
    <div className="calculator">
      <div className="calculator_top">
        <button className="calculator_clear">C</button>
        <div className="calculator_screen">
          <div className="calculator_screen_size">
            <div className="calculator_screen_info">
              {/* {numberArray.map((m) => (
                <div>{m}</div>
              ))} */}
              {numberArray}
            </div>
          </div>
        </div>
      </div>
      <div className="calculator_buttons">
        <button
          className="calculator_button"
          name="7"
          onClick={onDisplayChange}
        >
          7
        </button>
        <button
          className="calculator_button"
          name="8"
          onClick={onDisplayChange}
        >
          8
        </button>
        <button
          className="calculator_button"
          name="9"
          onClick={onDisplayChange}
        >
          9
        </button>
        <button
          className="calculator_button"
          name="+"
          onClick={onDisplayChange}
        >
          +
        </button>
        <button
          className="calculator_button"
          name="4"
          onClick={onDisplayChange}
        >
          4
        </button>
        <button
          className="calculator_button"
          name="5"
          onClick={onDisplayChange}
        >
          5
        </button>
        <button
          className="calculator_button"
          name="6"
          onClick={onDisplayChange}
        >
          6
        </button>
        <button
          className="calculator_button"
          name="-"
          onClick={onDisplayChange}
        >
          -
        </button>
        <button
          className="calculator_button"
          name="1"
          onClick={onDisplayChange}
        >
          1
        </button>
        <button
          className="calculator_button"
          name="2"
          onClick={onDisplayChange}
        >
          2
        </button>
        <button
          className="calculator_button"
          name="3"
          onClick={onDisplayChange}
        >
          3
        </button>
        <button
          className="calculator_button"
          name="÷"
          onClick={onDisplayChange}
        >
          ÷
        </button>
        <button
          className="calculator_button"
          name="0"
          onClick={onDisplayChange}
        >
          0
        </button>
        <button
          className="calculator_button"
          name="."
          onClick={onDisplayChange}
        >
          .
        </button>
        <button
          className="calculator_button"
          name="="
          onClick={onDisplayChange}
        >
          =
        </button>
        <button
          className="calculator_button"
          name="x"
          onClick={onDisplayChange}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Calculator;
