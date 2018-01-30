import React, { Component } from 'react';
import Input from 'react-component_input';

class Radio extends Component {
  render() {
    return (
      <div>
        <Input
          containerClassNames="form-group"
          identifier="radioInput"
          labelContent="Radio Input"
          type="radio"
          inputClassNames="form-control"
        />
      </div>
    );
  }
}

export default {
  label: "Input - Radio",
  app: Radio
};