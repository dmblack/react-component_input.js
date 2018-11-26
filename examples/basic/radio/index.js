import React, { Component } from 'react';
import Input from 'react-component_input';

class Radio extends Component {
  render () {
    return (
      <div>
        <Input
          identifier="radioInputA"
          labelContent="Radio Input"
          type="radio"
          childValues={
            [
              {
                label: "Radio A",
                name: "radio",
                value: "Radio A"
              },
              {
                label: "Radio B",
                name: "radio",
                value: "Radio B"
              }
            ]
          }
        />
      </div>
    );
  }
}

export default {
  label: "Input - Radio",
  app: Radio
};