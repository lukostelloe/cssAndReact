import { React, useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [numberArray, setNumberArray] = useState([0]);
  const [nextNumberArray, setNextNumberArray] = useState([]);
  const [plus, setPlus] = useState([]);
  const [minus, setMinus] = useState([]);
  const [multiply, setMultiply] = useState([]);
  const [divide, setDivide] = useState([]);
  const [result, setResult] = useState([]);

  console.log(numberArray);

  function onDisplayChange(e) {
    if (numberArray == 0 && nextNumberArray == 0) {
      setNumberArray([e.target.name]);
    } else {
      setNumberArray([...numberArray, e.target.name]);
    }

    if (
      plus.length > 0 ||
      minus.length > 0 ||
      multiply.length > 0 ||
      divide.length > 0
    ) {
      setNextNumberArray([...nextNumberArray, e.target.name]);
      setNumberArray([...numberArray]);
    }
  }

  function decimalButton(e) {
    setNumberArray([...numberArray, e.target.name]);

    if (
      numberArray.includes(".") ||
      plus.length > 0 ||
      minus.length > 0 ||
      multiply.length > 0 ||
      divide.length > 0
    ) {
      setNumberArray([...numberArray]);
    }

    if (
      plus.length > 0 ||
      minus.length > 0 ||
      multiply.length > 0 ||
      divide.length > 0
    ) {
      setNextNumberArray([...nextNumberArray, e.target.name]);
    }

    if (nextNumberArray.includes(".")) {
      setNextNumberArray([...nextNumberArray]);
    }
  }

  function equalsButton() {
    setNumberArray([]);
    setNextNumberArray([]);
    setPlus([]);
    setMinus([]);
    setMultiply([]);
    setDivide([]);
    setResult("result");
  }

  function clearButton() {
    setNumberArray([0]);
    setNextNumberArray([]);
    setPlus([]);
    setMinus([]);
    setMultiply([]);
    setDivide([]);
    setResult([]);
  }

  function plusButton() {
    if (nextNumberArray == 0) {
      setPlus("+");
      setMinus([]);
      setMultiply([]);
      setDivide([]);
    } else {
      setPlus("+");
    }
  }

  function minusButton() {
    if (nextNumberArray == 0) {
      setPlus([]);
      setMinus(["-"]);
      setMultiply([]);
      setDivide([]);
    } else {
      setMinus("-");
    }
  }

  function multiplyButton() {
    if (nextNumberArray == 0) {
      setPlus([]);
      setMinus([]);
      setMultiply("x");
      setDivide([]);
    } else {
      setMultiply("x");
    }
  }

  function divideButton() {
    if (nextNumberArray == 0) {
      setPlus([]);
      setMinus([]);
      setMultiply([]);
      setDivide("÷");
    } else {
      setDivide("÷");
    }
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
              <div>{nextNumberArray}</div>
              <div>{result}</div>
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
