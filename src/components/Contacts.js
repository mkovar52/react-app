import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@aol.com",
        phone: "555-555-5511"
      },
      {
        id: 2,
        name: "Pam Beasley",
        email: "pam@theoffice.com",
        phone: "111-222-3333"
      },
      {
        id: 3,
        name: "Nala Kovar",
        email: "nalathepup@gmail.com",
        phone: "010-555-1234"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
