import React, { useState } from "react";

import './App.css';

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      return;
    }

    // Handle Equal
    if (value === "=") {
      try {
        setInput(String(eval(input)));
      } catch {
        setInput("Error");
      }
      return;
    }
    setInput(input + value);
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
