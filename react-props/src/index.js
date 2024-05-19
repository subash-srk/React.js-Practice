import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.pic} alt="avatar_img" />
      <p>{props.ph}</p>
      <p>{props.mail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      pic="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      ph="+123 456 789"
      mail="b@beyonce.com"
    />
    <Card
      name="Ariana Grande"
      pic="data:image/jpeg;base64,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"
      ph="+123 456 789"
      mail="b@beyonce.com"
    />
    <Card
      name="Abel Tesfaye"
      pic="data:image/jpeg;base64,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"
      ph="+123 456 789"
      mail="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);