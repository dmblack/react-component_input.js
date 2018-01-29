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

class TextExample extends Component {
  render() {
    return (
      <div>
        <Input
          identifier="textInput"
          labelContent="Text Input"
          type="textarea"
          validation={[validMaxLength(10), validMinLength(1)]}
        />
      </div>
    );
  }
}

export default {
  label: "Input - Text",
  app: TextExample
};
