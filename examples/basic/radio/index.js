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
        />
      </div>
    );
  }
}

export default {
  label: "Input - Radio",
  app: Radio
};