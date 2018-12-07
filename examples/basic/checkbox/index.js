import React, { Component } from 'react';
import Input from 'react-component_input';

class Checkbox extends Component {
  render() {
    return (
      <div>
        <Input
          identifier="passwordInput"
          labelContent="Checkbox Input"
          type="checkbox"
          value="true"
        />
      </div>
    );
  }
}

export default {
  label: "Input - Checkbox",
  app: Checkbox
};