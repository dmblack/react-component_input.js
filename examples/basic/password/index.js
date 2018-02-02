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
        />
      </div>
    );
  }
}

export default {
  label: "Input - Password",
  app: Password
};