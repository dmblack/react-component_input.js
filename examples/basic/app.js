import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Checkbox from './checkbox';
import Password from './password';
import Radio from './radio';
import Select from './select';
import TextExample from './text';
import Textarea from './textarea';

const appElement = document.getElementById('example');

const examples = [
  Button,
  Checkbox,
  Password,
  Radio,
  Select,
  TextExample,
  Textarea
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
