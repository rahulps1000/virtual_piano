import React from "react";
import "./style.css";
import {
  notes,
  keyBindings,
  noteBinings,
  audios as audioFiles,
} from "./constants";

const Piano = ({ showNote = true }) => {
  const [pressedKey, setPressedKey] = React.useState(new Set());

  const playNote = async (note) => {
    const audio = audioFiles[note];
    await new Audio(audio.src).play();
  };

  const onKeyDown = async (e) => {
    const key = e.key.toUpperCase();
    if (keyBindings.hasOwnProperty(key)) {
      const note = keyBindings[key];
      setPressedKey((prev) => new Set([...prev, note]));
      await playNote(note);
    }
  };

  const onKeyUp = async (e) => {
    const key = e.key.toUpperCase();
    if (keyBindings.hasOwnProperty(key)) {
      const note = keyBindings[key];
      setPressedKey((prev) => {
        const newSet = new Set([...prev]);
        newSet.delete(note);
        return newSet;
      });
    }
  };

  document.onkeydown = onKeyDown;
  document.onkeyup = onKeyUp;

  const audios = notes.map((note) => {
    return (
      <li
        key={note}
        id={note}
        className={`${note.includes("#") ? "black" : "white"} ${
          note.includes("#")
            ? note.charAt(0).toLowerCase() + "s"
            : note.charAt(0).toLowerCase()
        } ${pressedKey.has(note) ? "active" : ""}`}
        onClick={async () => await playNote(note)}
      >
        <span>{showNote ? note : noteBinings[note]}</span>
      </li>
    );
  });

  return (
    <div className="piano">
      <ul className="set">{audios}</ul>
    </div>
  );
};

export default Piano;
