# react-component_input

An input component to serve the common good.

[![Build Status](https://travis-ci.org/dmblack/react-component_input.js.svg?branch=master)](https://travis-ci.org/dmblack/react-component_input.js?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/dmblack/react-component_input.js/badge.svg?branch=master)](https://coveralls.io/github/dmblack/react-component_input.js?branch=master)

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

Documented here; Styles are, deliberately, not part of the component. The component does export a vast layer of CSS classes
applied to elements that may then be used to customize the style of your app. Additionally; passing appropriate className
overrides allows you to customise / manage these defaults.

Important:
This also means that validation errors are shown by default! You can manage this by using the toggle classes of;
.validation-untouched, .validation-valid, and .container-focus to properly manage the behavior of your validation error
messages.

A basic example may be;
```css
/* Ensures validation messages are not rendered if that input has not yet been modified */
.validation-untouched {
  display: none;
}

/* Ensures validation messages are not rendered if the input is actually valid */ 
.validation-valid {
  display: none;
}

/* Hides validation messages whilst the Input has cursor focus */
.container-focus .validation-invalid {
  display: none;
}
```

## Examples

Inside an app:
Note: These examples include the optional validation object (validMaxLength, validMinLength) which are passed as an array
to the Input object via the validation prop.

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