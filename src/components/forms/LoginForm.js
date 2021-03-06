import React, { Component } from "react";
import Validator from "validator";
import { Button } from "reactstrap";
import InlineError from "../messages/InlineError";
import PropTypes from "prop-types";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    //this.props.onClick(this.state.data)
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "password cannot be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <div>
        {errors.global && <InlineError text={errors.global} />}
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              aria-describedby="passwordHelp"
              required="true"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </div>
          <Button color="primary">Login</Button>
        </form>
      </div>
    );
  }
}

LoginForm.PropTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
