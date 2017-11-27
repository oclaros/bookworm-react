import React from "react";
import Validator from "validator";
import { Button } from "reactstrap";

class LoginForm extends React.Component {
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

  onSubmit = () => {
      const errors = this.validate(this.state.data);
      this.setState({errors});
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'password cannot be blank';
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              aria-describedby="passwordHelp"
              value={data.password}
              onChange={this.onChange}
            />
          </div>
          <Button color="primary">Login</Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
