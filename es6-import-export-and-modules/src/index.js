import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);
