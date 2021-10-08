import React from "react";
import "./Piano.css";
import Cnat from "./PianoNotes/C.wav";
import Csharp from "./PianoNotes/C#.wav";
import Dnat from "./PianoNotes/D.wav";
import Dsharp from "./PianoNotes/D#.wav";
import Enat from "./PianoNotes/E.wav";
import Fnat from "./PianoNotes/F.wav";
import Fsharp from "./PianoNotes/F#.wav";
import Gnat from "./PianoNotes/G.wav";
import Gsharp from "./PianoNotes/G#.wav";
import Anat from "./PianoNotes/A.wav";
import Asharp from "./PianoNotes/A#.wav";
import Bnat from "./PianoNotes/B.wav";
import Chigh from "./PianoNotes/Chigh.wav";

const notes = [
  Cnat,
  Csharp,
  Dnat,
  Dsharp,
  Enat,
  Fnat,
  Fsharp,
  Gnat,
  Gsharp,
  Anat,
  Asharp,
  Bnat,
  Chigh,
];

function Piano() {
  function playNote(e) {
    console.log(e.target.id);
    const noteName = e.target.id;
    console.log(noteName);

    if (notes.includes(noteName)) {
      let newNote = noteName;
      let sound = new Audio(newNote);
      sound.play();
    }
  }

  return (
    <div className="piano">
      <div className="piano_brand">TINY PIANO</div>
      <div className="piano_keys">
        <button
          id="Cnat"
          className="piano_white_key"
          onClick={playNote}
        ></button>
        <button
          id="C#"
          className="piano_black_key1"
          onClick={playNote}
        ></button>
        <button
          id="Dnat"
          className="piano_white_key"
          onClick={playNote}
        ></button>
        <button
          id="D#"
          className="piano_black_key2"
          onClick={playNote}
        ></button>
        <button
          id="Enat"
          className="piano_white_key"
          onClick={playNote}
        ></button>
        <button
          id="Fnat"
          className="piano_white_key"
          onClick={playNote}
        ></button>
        <button
          id="F#"
          className="piano_black_key3"
          onClick={playNote}
        ></button>
        <button
          id="Gnat"
          className="piano_white_key"
          onClick={playNote}
        ></button>
        <button
          id="G#"
          className="piano_black_key4"
          onClick={playNote}
        ></button>
        <button
          id="Anat"
          className="piano_white_key"
          onClick={playNote}
        ></button>
        <button
          id="A#"
          className="piano_black_key5"
          onClick={playNote}
        ></button>
        <button
          id="Bnat"
          className="piano_white_key"
          onClick={playNote}
        ></button>
        <button
          id="Chigh"
          className="piano_white_key"
          onClick={playNote}
        ></button>
      </div>
    </div>
  );
}

export default Piano;
