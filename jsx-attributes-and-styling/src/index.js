import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img src={img} alt="s" />
      <img src="https://picsum.photos/200" alt="" />
      <img src="https://picsum.photos/200" alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
