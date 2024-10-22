import React, { useState } from 'react';
import './App.css';

function App() {
  const fullName = "CALMA XIAN MEG - IT3A"; // Replace this with your full name and section
  const [message, setMessage] = useState("10 Things That Require Zero Talent");

  const handleKeyPress = (key) => {
    const messages = {
      1: "Being On Time",
      2: "Making An Effort",
      3: "Being High Energy",
      4: "Having A Positive Attitude",
      5: "Being Passionate",
      6: "Using Good Body Language",
      7: "Being Coachable",
      8: "Doing A Little Extra",
      9: "Being Prepared",
      0: "Having A Strong Work Ethic",
      reset: "10 Things That Require Zero Talent",
      name: fullName.toUpperCase(),
    };
    setMessage(messages[key]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{fullName}</h1>
        <h2>{message}</h2>
        <div>
          <button onClick={() => handleKeyPress(1)}>1</button>
          <button onClick={() => handleKeyPress(2)}>2</button>
          <button onClick={() => handleKeyPress(3)}>3</button>
          <button onClick={() => handleKeyPress(4)}>4</button>
          <button onClick={() => handleKeyPress(5)}>5</button>
          <button onClick={() => handleKeyPress(6)}>6</button>
          <button onClick={() => handleKeyPress(7)}>7</button>
          <button onClick={() => handleKeyPress(8)}>8</button>
          <button onClick={() => handleKeyPress(9)}>9</button>
          <button onClick={() => handleKeyPress(0)}>0</button>
          <button onClick={() => handleKeyPress('reset')}>RESET</button>
          <button onClick={() => handleKeyPress('name')}>NAME</button>
        </div>
      </header>
    </div>
  );
}

export default App;
