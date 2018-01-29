import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-component_input';
import TextExample from './text';
import Textarea from './textarea';
// import Forms from './forms';
// import ReactRouter from './react-router';
// import NestedInputs from './nested_inputs';

const appElement = document.getElementById('example');

const examples = [
  TextExample,
  Textarea
//   MultipleInputs,
//   NestedInputs,
//   ReactRouter
];

class App extends Component {
  render() {
    return (
      <div>
        {examples.map((example, key) => {
          const ExampleApp = example.app;
          return (
            <div key={key + 1} className="example">
              <h3>{`#${key + 1}. ${example.label}`}</h3>
              <ExampleApp />
            </div>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, appElement);
