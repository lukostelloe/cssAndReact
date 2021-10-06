import { React, useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [numberArray, setNumberArray] = useState([0]);
  const [plus, setPlus] = useState([]);
  const [minus, setMinus] = useState([]);
  const [multiply, setMultiply] = useState([]);
  const [divide, setDivide] = useState([]);

  console.log(numberArray);

  function onDisplayChange(e) {
    if (numberArray == 0) {
      setNumberArray([e.target.name]);
    } else {
      setNumberArray([...numberArray, e.target.name]);
    }
  }

  function decimalButton(e) {
    setNumberArray([...numberArray, e.target.name]);
  }

  function equalsButton() {
    console.log("result");
  }

  function clearButton() {
    setNumberArray([0]);
    setPlus([]);
    setMinus([]);
    setMultiply([]);
    setDivide([]);
  }

  function plusButton() {
    setPlus("+");
    setMinus([]);
    setMultiply([]);
    setDivide([]);
  }

  function minusButton() {
    setPlus([]);
    setMinus(["-"]);
    setMultiply([]);
    setDivide([]);
  }

  function multiplyButton() {
    setPlus([]);
    setMinus([]);
    setMultiply(["x"]);
    setDivide([]);
  }

  function divideButton() {
    setPlus([]);
    setMinus([]);
    setMultiply([]);
    setDivide(["÷"]);
  }

  return (
    <div className="calculator">
      <div className="calculator_top">
        <button className="calculator_clear" onClick={clearButton}>
          C
        </button>
        <div className="calculator_screen">
          <div className="calculator_screen_size">
            <div className="calculator_screen_info">
              <div>{numberArray}</div>
              <div>{plus}</div>
              <div>{minus}</div>
              <div>{multiply}</div>
              <div>{divide}</div>
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
        <button className="calculator_button" name="+" onClick={plusButton}>
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
        <button className="calculator_button" name="-" onClick={minusButton}>
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
        <button className="calculator_button" name="÷" onClick={divideButton}>
          ÷
        </button>
        <button
          className="calculator_button"
          name="0"
          onClick={onDisplayChange}
        >
          0
        </button>
        <button className="calculator_button" name="." onClick={decimalButton}>
          .
        </button>
        <button className="calculator_button" name="=" onClick={equalsButton}>
          =
        </button>
        <button className="calculator_button" name="x" onClick={multiplyButton}>
          x
        </button>
      </div>
    </div>
  );
}

export default Calculator;
