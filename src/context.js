/*  
wraps around entire application 
via ProviderComponent
*/
import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
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
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
