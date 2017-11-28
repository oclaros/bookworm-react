import React, { Component } from "react";
import { Alert  } from "reactstrap";
class InlineError extends Component {
  render() {
    return (
      <Alert  color="warning">{this.props.text}</Alert >
    );
  }
}

export default InlineError;
