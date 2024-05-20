import React from "react";
import { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString().split(" ")[0];
  const [time, setTime] = useState(now);

  function updateTime() {
    setTime(new Date().toLocaleTimeString().split(" ")[0]);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
