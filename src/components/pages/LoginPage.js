import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

class LoginPage extends Component {
  onClick = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <Link to="/">Home</Link>
        <LoginForm onClick={this.onClick.bind(this)} />
      </div>
    );
  }
}

export default LoginPage;
