/*  
wraps around entire application 
via ProviderComponent
*/
import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

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
    ],

    dispatch: action => this.setState(state => reducer(state, action))
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
