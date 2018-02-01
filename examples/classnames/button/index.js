import React, { Component } from 'react';
import Input from 'react-component_input';

class Button extends Component {
  render() {
    return (
      <div>
        <Input
          identifier="buttonInput"
          labelContent="Button Input"
          type="button"
          value="button"
          containerClassNames={["button-custom-container", "my-button-custom-container"]}
          inputClassNames={["button-custom-input", "my-button-custom-input"]}
          labelClassNames={["button-custom-label", "my-button-custom-label"]}
          validationClassNames={["button-custom-validation", "my-button-custom-validation"]}
          />
      </div>
    );
  }
}

export default {
  label: "Input - Button",
  app: Button
};