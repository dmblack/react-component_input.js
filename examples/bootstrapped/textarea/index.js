import React, { Component } from 'react';
import Input from 'react-component_input';

class Textarea extends Component {
  
  render() {
    return (
      <div>
        <Input
          containerClassNames="form-group"
          type="textarea"
          identifier="textarea"
          labelContent="Text Area"
          inputClassNames="form-control"
        />
      </div>
    );
  }
}

export default {
  label: "Input - Textarea",
  app: Textarea
};
