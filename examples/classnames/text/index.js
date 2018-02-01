import React, { Component } from 'react';
import Input from 'react-component_input';

class TextExample extends Component {
  render() {
    return (
      <div>
        <Input
          identifier="textInput"
          labelContent="Text Input"
          type="text"
          containerClassNames={["text-custom-container", "my-text-custom-container"]}
          inputClassNames={["text-custom-input", "my-text-custom-input"]}
          labelClassNames={["text-custom-label", "my-text-custom-label"]}
          validationClassNames={["text-custom-validation", "my-text-custom-validation"]}
        />
      </div>
    );
  }
}

export default {
  label: "Input - Text",
  app: TextExample
};
