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
          containerClassNames={["textarea-custom-container", "my-textarea-custom-container"]}
          inputClassNames={["textarea-custom-input", "my-textarea-custom-input"]}
          labelClassNames={["textarea-custom-label", "my-textarea-custom-label"]}
          validationClassNames={["textarea-custom-validation", "my-textarea-custom-validation"]}
        />
      </div>
    );
  }
}

export default {
  label: "Input - Textarea",
  app: Textarea
};
