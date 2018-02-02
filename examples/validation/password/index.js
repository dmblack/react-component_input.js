import React, { Component } from 'react';
import Input from 'react-component_input';

let validMaxLength = (length = 0) => ({
  errorMessage:
    'The length of your input must be less than ' + parseInt(length),
  callback: value => value.length <= parseInt(length)
});

let validMinLength = (length = 0) => ({
  errorMessage:
    'The length of your input must be more than ' + parseInt(length),
  callback: value => value.length >= parseInt(length)
});

class Password extends Component {
  render() {
    return (
      <div>
        <Input
          identifier="passwordInput"
          labelContent="Password Input"
          type="password"
          validation={[validMaxLength(15), validMinLength(8)]}
        />
      </div>
    );
  }
}

export default {
  label: "Input - Password",
  app: Password
};