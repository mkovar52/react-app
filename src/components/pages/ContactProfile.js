import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactProfile extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4"> Full Profile Page </h1>
        <p>
          Finished? Back <Link to="/">home</Link>{" "}
        </p>
      </div>
    );
  }
}

export default ContactProfile;
