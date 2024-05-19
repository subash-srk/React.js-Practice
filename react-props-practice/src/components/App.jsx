import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div className="info">
      <h1 className="heading">My Contacts</h1>
      <Card
        img={contacts[0].imgURL}
        name={contacts[0].name}
        ph={contacts[0].phone}
        mail={contacts[0].email}
      />
      <Card
        img={contacts[1].imgURL}
        name={contacts[1].name}
        ph={contacts[1].phone}
        mail={contacts[1].email}
      />
      <Card
        img={contacts[2].imgURL}
        name={contacts[2].name}
        ph={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
