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
        />
      </div>
    );
  }
}

export default {
  label: "Input - Button",
  app: Button
};