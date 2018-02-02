import React, { Component } from 'react';
import Input from 'react-component_input';

class Password extends Component {
  render() {
    return (
      <div>
        <Input
          identifier="passwordInput"
          labelContent="Password Input"
          type="password"
          inputClassNames="form-control"
        />
      </div>
    );
  }
}

export default {
  label: "Input - Password",
  app: Password
};