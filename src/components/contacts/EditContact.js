import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import uuid from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import { async } from "q";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  //pass correct user info to use as placeholder, use this same approach for full profile view

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, errors } = this.state;

    // check for errors
    if (name == "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email == "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone == "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    //object to hold updated info
    const updatedContact = {
      name,
      email,
      phone
    };

    //make put request for user info
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    // clears state after submit
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // redirect to homepage after submission
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="xxx-xxx-xxxx"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-block btn-dark"
                  />
                  <button
                    className="btn btn-block btn-danger"
                    style={{ color: "white" }}
                  >
                    <Link to="/">CANCEL</Link>
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
