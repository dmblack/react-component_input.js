import React, { Component } from 'react';
import Input from 'react-component_input';

class Select extends Component {
  
  render() {
    return (
      <div>
        <Input
          type="select"
          identifier="select"
          labelContent="Select"
          inputClassNames="form-control"
          childValues={
            [
              {
                name: '--select one--',
                value: ''
              },
              {
                name: 'Select 1',
                value: 'Select-1'
              },
              {
                name: 'Select 2',
                value: 'select-2'
              }
            ]
          }
        />
      </div>
    );
  }
}

export default {
  label: "Input - Select",
  app: Select
};
