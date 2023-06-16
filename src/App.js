import "./App.css";
import Piano from "./Piano";
import React, { useState } from "react";

function App() {
  const [showNote, setShowNote] = useState(true);
  return (
    <div className="App">
      <div className="nav">Virtual Piano</div>
      <div className="keyboard">
        <div className="cover">
          <div className="settings">
            <div>
              <div className="text">Notes</div>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setShowNote((x) => !x)}
                />
                <div>
                  <span></span>
                </div>
              </label>
              <div className="text">Keys</div>
            </div>
          </div>
          <Piano showNote={showNote} />
        </div>
      </div>
      <span className="like">
        Made with ❤️ by{" "}
        <a
          href="https://www.github.com/rahulps1000"
          target="_blank"
          rel="noreferrer"
        >
          Rahul
        </a>
      </span>
    </div>
  );
}

export default App;
