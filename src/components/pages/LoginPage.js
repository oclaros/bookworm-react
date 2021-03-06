import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <Link to="/">Home</Link>
        <LoginForm submit={this.submit.bind(this)} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
