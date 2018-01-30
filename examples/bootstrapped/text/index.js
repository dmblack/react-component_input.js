import React, { Component } from 'react';
import Input from 'react-component_input';

class TextExample extends Component {
  render() {
    return (
      <div>
        <Input
          containerClassNames="form-group"
          identifier="textInput"
          labelContent="Text Input"
          type="text"
          inputClassNames="form-control"
        />
      </div>
    );
  }
}

export default {
  label: "Input - Text",
  app: TextExample
};
