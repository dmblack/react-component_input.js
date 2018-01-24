# react-component_input

An input component to serve the common good.

[![Build Status](https://travis-ci.org/dmblack/react-component_input.svg?branch=v1)](https://travis-ci.org/dmblack/react-component_input)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Styles](#styles)
* [Examples](#examples)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install react-component_input
    $ yarn add react-component_input


## Usage

The Input component props provide extensive access to the behavior of the object, including validation (More on this later).

Example:

```jsx
  <Input
    type="text"
    identifier="firstName"
    labelContent="First Name"
    validation={(value) => ({
  errorMessage:
    'The length of your input must be more than 10 characters',
  callback: value => value.length >= 10
})}
  />
```

## Styles

Documented here; Styles are deliberately not part of the component. The component does export a vast layer of classes that may
then be used to customize the style of your app. As above, there's access to prop's that allow overrides to these defaults.


## Examples

Inside an app:

```jsx
import React, { Component } from 'react';
import Input from 'react-component_input';

let validMaxLength = (length = 0) => ({
  errorMessage:
    'The length of your input must be less than ' + parseInt(length),
  callback: value => value.length <= parseInt(length)
});

let validMinLength = (length = 0) => ({
  errorMessage:
    'The length of your input must be more than ' + parseInt(length),
  callback: value => value.length >= parseInt(length)
});

class App extends Component {
  render () {
    return (
      <div className="App">
        <Input
          type="text"
          identifier="firstName"
          labelContent="First Name"
          validation={[validMaxLength(32), validMinLength(1)]}
        />
      </div>
    );
  }
}

export default App;
```