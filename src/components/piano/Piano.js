import React from "react";
import "./Piano.css";

function Piano() {
  function sayHi() {
    console.log("hello");
  }

  return (
    <div className="piano">
      <div className="piano_brand">TINY PIANO</div>
      <div className="piano_keys">
        <button className="piano_white_key" onClick={sayHi}></button>
        <button className="piano_white_key"></button>
        <button className="piano_white_key"></button>
        <button className="piano_white_key"></button>
        <button className="piano_white_key"></button>
        <button className="piano_white_key"></button>
        <button className="piano_white_key"></button>
        <button className="piano_white_key"></button>
        <button className="piano_black_key1"></button>
        <button className="piano_black_key2"></button>
        <button className="piano_black_key3"></button>
        <button className="piano_black_key4"></button>
        <button className="piano_black_key5"></button>
      </div>
    </div>
  );
}

export default Piano;
