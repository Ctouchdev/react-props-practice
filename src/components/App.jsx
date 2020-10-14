import React from "react";
import Cards from "./Cards";
import Contacts from "../contacts";


const app = () => {
  return (
    <>
      <Cards
        name = {Contacts[0].name}
        photo = {Contacts[0].imgURL}
        phone = {Contacts[0].phone}
        email = {Contacts[0].email}
      />
      <Cards
        name = {Contacts[1].name}
        photo = {Contacts[1].imgURL}
        phone = {Contacts[1].phone}
        email = {Contacts[1].email}
      />
      <Cards
        name = {Contacts[2].name}
        photo = {Contacts[2].imgURL}
        phone = {Contacts[2].phone}
        email = {Contacts[2].email}
      />
    </>
  );
};

export default app;
