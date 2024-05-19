import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} />
      </div>
      <div className="bottom">
        <p>{props.ph}</p>
        <p>{props.mail}</p>
      </div>
    </div>
  );
}

export default Card;
