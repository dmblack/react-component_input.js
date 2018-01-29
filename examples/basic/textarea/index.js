import React, { Component } from 'react';
import Input from 'react-component_input';

class Textarea extends Component {
  
  render() {
    return (
      <div>
        <Input
          type="textarea"
          identifier="textarea"
          labelContent="Text Area"
        />
      </div>
    );
  }
}

export default {
  label: "Input - Textarea",
  app: Textarea
};
