# react-component_input

An input component to serve the common good.

[![Build Status](https://travis-ci.org/dmblack/react-component_input.js.svg?branch=master)](https://travis-ci.org/dmblack/react-component_input.js?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/dmblack/react-component_input.js/badge.svg?branch=master)](https://coveralls.io/github/dmblack/react-component_input.js?branch=master)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Styles](#styles)
* [FAQ](#FAQ)
* [Examples](#examples)

Additionally, you can check out one of the key features here;
* [Validation](#validation)

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

## FAQ
(Mostly asked by myself, to myself)

* Why does this component even exist?
Initially developing an application heavily dependent on HTML 'Input' elements,
I was quickly overwhelmed with the vast options of options available on NPM.
These options, whilst not opinionated, often didn't quite meet my requirements,
which I felt really were 'core' and 'key' features of an input.

In working on this app, I developed my own (app specific) child component, made
it rather hard to conveniently include in other projects. Work invested in copy
/ paste quickly became tedious (And the wrong way to manage things anyway).

Thus; react-component_input.js was born

* Goals of this Project
The goal of this project is to provide a 'core'/'key' feature functional input
component that performs nothing outside of that scope. These should also provide
appropriate functionality that is exposed by React (Otherwise; what would be the
point of making this a react component, right?)

Overall; this is one of the reasons styles are completely abstract from the
project.

Yes.. Yes. It's not perfect.. :( See... [Validation](#Validation)

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

## Validation
For those interested in why this is included, please also see:
[Notes On Validation](#validation%20notes)

Validation is a, or an array of, objects which contain a 'callback', and 
validation error message. This object is provided to the component via the
'validation' prop.

The callback functions are passed the value of the triggered input, as
provided by the [React Event](https://reactjs.org/docs/handling-events.html).
The return of the function, (boolean) false or true, is used to determine the state of the
component. If false; the validation error is rendered. If an array of validation
is provided, and one fails - the component fails validation, however; only the
failing validation object error message is shown.

An example validation object may be;

```js
let validMinLength = (length = 0) => ({
  errorMessage:
    'The length of your input must be more than ' + parseInt(length),
  callback: value => value.length >= parseInt(length)
});
```
and
```js
let validMinLength = (length = 0) => ({
  errorMessage:
    'The length of your input must be more than ' + parseInt(length),
  callback: value => value.length >= parseInt(length)
});
```

This is then passed to the component via the validation property.
```jsx
  validation={validMinLength(10)}
```

As stated, as an array;
```jsx
  validation={[validMaxLength(32), validMinLength(10)]}
```

## Validation Notes
Oh gosh; how I wanted to/will eventually leave this out of the component. In its
current state; this is an inbuilt and entirely custom to component feature. 
Validation, in it's pure form; isn't really built into HTML Inputs, nor should
it ever be purely depended on for any form of 'backend' processing. 

For now; the behavior was included to provide exposure to the validation
error.

See; https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
