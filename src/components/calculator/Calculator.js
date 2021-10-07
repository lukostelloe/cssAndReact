import { React, useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [displayArray, setDisplayArray] = useState([]);
  const [nextDisplayArray, setNextDisplayArray] = useState([]);
  const [numberArray, setNumberArray] = useState([0]);
  const [nextNumberArray, setNextNumberArray] = useState([]);
  const [plus, setPlus] = useState([]);
  const [minus, setMinus] = useState([]);
  const [multiply, setMultiply] = useState([]);
  const [divide, setDivide] = useState([]);
  const [result, setResult] = useState([]);

  //INPUT FOR NUMBERS
  function onDisplayChange(e) {
    if (numberArray[0] === 0 && nextNumberArray === 0) {
      setDisplayArray([e.target.name]);
      setNumberArray([e.target.name]);

      console.log(displayArray);
      console.log(numberArray);
    } else {
      setDisplayArray([...displayArray, e.target.name]);
      setNumberArray([...numberArray, e.target.name]);
      console.log(displayArray);
      console.log(numberArray);
    }

    if (
      plus.length > 0 ||
      minus.length > 0 ||
      multiply.length > 0 ||
      divide.length > 0
    ) {
      setNextDisplayArray([...nextDisplayArray, e.target.name]);
      setNextNumberArray([...nextNumberArray, e.target.name]);

      setDisplayArray([...displayArray]);
      setNumberArray([...numberArray]);
    }
  }

  //DECIMAL BUTTON
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

  //EQUALS BUTTON
  function equalsButton() {
    setDisplayArray([]);
    setNextDisplayArray([]);
    setNumberArray([]);
    setNextNumberArray([]);
    setPlus([]);
    setMinus([]);
    setMultiply([]);
    setDivide([]);
    setResult("result");

    //CREATE EMPTY ARRAY THEN CHANGE STRINGS OF ARRAY TO NUMBERS
    var numberArrayInt = [];
    var nextNumberArrayInt = [];

    for (var i = 0; i < numberArray.length; i++) {
      numberArrayInt.push(parseInt(numberArray[i]));
    }

    for (var m = 0; m < nextNumberArray.length; m++) {
      nextNumberArrayInt.push(parseInt(nextNumberArray[m]));
    }

    //ADD UP THE VALUES OF THE ARRAY
    let sum1 = 0;

    for (let i = 0; i < numberArrayInt.length; i++) {
      sum1 += numberArrayInt[i];
    }
    debugger;
    console.log(sum1);

    let sum2 = 0;

    for (let i = 0; i < nextNumberArrayInt.length; i++) {
      sum2 += nextNumberArrayInt[i];
    }
    console.log(sum2);

    if (plus.length > 0) {
      setResult([sum1 + sum2]);
    }
  }

  //FUNCTION FOR EQUALSBUTTON TO BE USED LATER
  // function calculate(num1, operator, num2) {
  //   if (operator === "+") {
  //     return num1 + num2;
  //   }
  // }

  //CLEAR BUTTON
  function clearButton() {
    setDisplayArray([0]);
    setNextDisplayArray([]);
    setNumberArray([0]);
    setNextNumberArray([]);
    setPlus([]);

    setMinus([]);
    setMultiply([]);
    setDivide([]);
    setResult([]);
  }

  //PLUS BUTTON
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

  //MINUS BUTTON
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

  //MULTIPLY BUTTON
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

  //DIVIDEBUTTON
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
