import React, { Component } from 'react';
import Input from 'react-component_input';

class Radio extends Component {
  render() {
    return (
      <div>
        <Input
          identifier="radioInput"
          labelContent="Radio Input"
          type="radio"
          containerClassNames={["radio-custom-container", "my-radio-custom-container"]}
          inputClassNames={["radio-custom-input", "my-radio-custom-input"]}
          labelClassNames={["radio-custom-label", "my-radio-custom-label"]}
          validationClassNames={["radio-custom-validation", "my-radio-custom-validation"]}
        />
      </div>
    );
  }
}

export default {
  label: "Input - Radio",
  app: Radio
};
