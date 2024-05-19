import React from "react";
import ReactDOM from "react-dom";

const morning = { color: "red" };
const evening = { color: "green" };
const night = { color: "blue" };

let style1 = {};
let greet = greetFun();

function greetFun() {
  time = new Date().getHours();

  if (time < 12) {
    style1 = morning;
    return "Good Morning";
  } else if (time < 18) {
    style1 = evening;
    return "Good Evening";
  } else {
    style1 = night;
    return "Good Night";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={style1}>
      {greet}
    </h1>
  </div>,
  document.getElementById("root")
);
