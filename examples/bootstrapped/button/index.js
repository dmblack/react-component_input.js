import React, { Component } from 'react';
import Input from 'react-component_input';

class Button extends Component {
  render() {
    return (
      <div>
        <Input
          containerClassNames="form-group"
          identifier="buttonInput"
          inputClassNames={["btn", "btn-primary", "form-control"]}
          labelContent="Button Input"
          type="button"
          value="button"
        />
      </div>
    );
  }
}

export default {
  label: "Input - Button",
  app: Button
};