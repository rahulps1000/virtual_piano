import React from "react";
import "./style.css";
import { notes, keyBindings, noteBinings } from "./constants";

const playNote = async (note) => {
  const audio = new Audio(`/tones/${note.replace("#", "s").toLowerCase()}.mp3`);
  await audio.play();
};

const onKeyDown = async (e) => {
  const key = e.key.toUpperCase();
  if (keyBindings.hasOwnProperty(key)) {
    const note = keyBindings[key];
    console.log(note);
    await playNote(note);
    document.getElementById(note).classList.add("active");
  }
};

const onKeyUp = async (e) => {
  const key = e.key.toUpperCase();
  if (keyBindings.hasOwnProperty(key)) {
    const note = keyBindings[key];
    document.getElementById(note).classList.remove("active");
  }
};

const Piano = ({ showNote = true }) => {
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
        }`}
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
