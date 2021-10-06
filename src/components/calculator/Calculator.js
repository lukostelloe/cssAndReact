import { React, useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [numberArray, setNumberArray] = useState([0]);

  console.log(numberArray);

  function onDisplayChange(e) {
    if (numberArray == 0) {
      setNumberArray([e.target.name]);
    } else {
      setNumberArray([...numberArray, e.target.name]);
    }
  }

  function clearButton() {
    setNumberArray([0]);
  }

  function displayResult() {
    console.log("result");
  }

  return (
    <div className="calculator">
      <div className="calculator_top">
        <button className="calculator_clear" onClick={clearButton}>
          C
        </button>
        <div className="calculator_screen">
          <div className="calculator_screen_size">
            <div className="calculator_screen_info">{numberArray}</div>
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
        <button className="calculator_button" name="=" onClick={displayResult}>
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
