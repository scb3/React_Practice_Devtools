import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://th.bing.com/th/id/R.8ee0b36800d34875528c240e85654070?rik=DJJACuDY214MUA&pid=ImgRaw&r=0" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
