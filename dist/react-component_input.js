(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactComponent_Input"] = factory(require("react"));
	else
		root["ReactComponent_Input"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (undefined !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(0);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (undefined !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = __webpack_require__(5);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Input2.default;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this2 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this2.state = {
      hasChanged: false,
      hasFocus: false,
      id: _this2.props.identifier || undefined,
      isValid: _this2.props.validation ? false : true,
      justChanged: false,
      value: _this2.props.value || "",
      valueMask: _this2.props.valueMask || undefined
    };

    // onBlur
    _this2.handleBlur = _this2.handleBlur.bind(_this2);
    _this2.handleOnBlurCallback = _this2.props.onBlur ? _this2.handleOnBlurCallback.bind(_this2) : function () {
      return true;
    };
    if (_this2.props.onBlur) {
      switch (_typeof(_this2.props.onBlur)) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          _this2.onBlur = _this2.props.onBlur.map(function (callBack) {
            return callBack.bind(_this2);
          });
          break;
        case "function":
          _this2.onBlur = _this2.props.onBlur.bind(_this2);
          break;
      }
    }

    // onChange
    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.handleOnChangeCallback = _this2.props.onChange ? _this2.handleOnChangeCallback.bind(_this2) : function () {
      return true;
    };
    if (_this2.props.onChange) {
      switch (_typeof(_this2.props.onChange)) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          _this2.onChange = _this2.props.onChange.map(function (callBack) {
            return callBack.bind(_this2);
          });
          break;
        case "function":
          _this2.onChange = _this2.props.onChange.bind(_this2);
          break;
      }
    }

    // onClick
    _this2.handleClick = _this2.handleClick.bind(_this2);
    _this2.handleOnClickCallback = _this2.props.onClick ? _this2.handleOnClickCallback.bind(_this2) : function () {
      return true;
    };
    if (_this2.props.onClick) {
      switch (_typeof(_this2.props.onClick)) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          _this2.onClick = _this2.props.onClick.map(function (callBack) {
            return callBack.bind(_this2);
          });
          break;
        case "function":
          _this2.onClick = _this2.props.onClick.bind(_this2);
          break;
      }
    }

    // onFocus
    _this2.handleFocus = _this2.handleFocus.bind(_this2);
    _this2.handleOnFocusCallback = _this2.props.onFocus ? _this2.handleOnFocusCallback.bind(_this2) : function () {
      return true;
    };
    if (_this2.props.onFocus) {
      switch (_typeof(_this2.props.onFocus)) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          _this2.onFocus = _this2.props.onFocus.map(function (callBack) {
            return callBack.bind(_this2);
          });
          break;
        case "function":
          _this2.onFocus = _this2.props.onFocus.bind(_this2);
          break;
      }
    }
    // Handles changed state (updating untouched classes)
    _this2.handleHasChanged = _this2.handleHasChanged.bind(_this2);

    // Handles validations (if exists)
    _this2.handleHasValidation = _this2.props.validation ? _this2.handleHasValidation.bind(_this2) : function () {
      return true;
    };

    // Handle the passed default validation state, if one exists.. Otherwise;
    //  default is isValid: false in state.
    if (_this2.props.validation) {
      if (_this2.props.validation.isArray) {
        var isValidArray = _this2.props.validation.map(function (x) {
          return x.isValid;
        });

        _this2.isValid = isValidArray.indexOf(false) === -1;
      } else if (Object.keys(_this2.props.validation).length > 0) {
        _this2.isValid = _this2.props.validation.validationState;
      }
    }
    return _this2;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var ourCallbackResult = "";
      switch (_typeof(this.props.onComponentDidMount)) {
        case "function":
          ourCallbackResult = this.props.onComponentDidMount(this);
          break;
        case "object":
          if (this.props.onComponentDidMount instanceof Array) {
            ourCallbackResult = this.props.onComponentDidMount.map(function (aFunction) {
              return aFunction(_this3);
            });
          }
          break;
        default:
          ourCallbackResult = false;
          break;
      }
      if (ourCallbackResult !== "") {
        this.setState({
          onComponentDidMountCallback: ourCallbackResult
        });
      }
    }

    /**
     * Handles blur state change triggered by default react onBlur.
     * @param {React Event} event
     */

  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      var _this4 = this;

      var clonedEvent = Object.assign({}, event);
      this.setState({
        hasFocus: false
      }, function () {
        if (_this4.props.onBlur) {
          _this4.handleOnBlurCallback(clonedEvent);
        }
      });
    }

    /**
     * Passed from the input control. Be careful to handle the different types of
     *  params passed from different input.
     * @param {*} event
     */

  }, {
    key: "handleOnBlurCallback",
    value: function handleOnBlurCallback(event) {
      var ourCallbackResult = "";
      var _this = Object.assign({}, this.state, event);
      switch (_typeof(this.onBlur)) {
        case "function":
          ourCallbackResult = this.onBlur(_this);
          break;
        case "object":
          if (this.onBlur instanceof Array) {
            ourCallbackResult = this.onBlur.map(function (aFunction) {
              return aFunction(_this);
            });
          }
          break;
        default:
          ourCallbackResult = false;
          break;
      }
      if (ourCallbackResult !== "") {
        this.setState({
          onBlurCallback: ourCallbackResult
        });
      }
    }

    /**
     * handleChange - Triggered when the input is modified in any way, expecting
     *  a react event.
     *  Will also trigger onChange prop.
     *  Will also trigger a validation check.
     * @param {React Event} event
     */

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this5 = this;

      var clonedEvent = Object.assign({}, event);

      var thisValue = null;

      switch (this.props.type) {
        case "button":
          thisValue = clonedEvent.target.value;
          break;
        case "radio":
          thisValue = clonedEvent.target.value;
          break;
        case "text":
          thisValue = clonedEvent.target.value;
          break;
        case "textarea":
          thisValue = clonedEvent.target.value;
          break;
        default:
          thisValue = clonedEvent.target.value || clonedEvent.value || false;
          break;
      }

      if (this.state.valueMask) {
        thisValue = this.state.valueMask.replace("{{value}}", thisValue);
      }

      this.setState({
        justChanged: true,
        value: thisValue
      }, function () {
        if (_this5.props.validation) {
          _this5.handleHasValidation(clonedEvent);
        }
        if (_this5.props.onChange) {
          _this5.handleOnChangeCallback(clonedEvent);
        }
      });

      this.handleHasChanged();
    }

    /**
     * @param {*} event - Passed from the input control. Be careful to handle the
     *  different types of params passed from different input.
     */

  }, {
    key: "handleOnChangeCallback",
    value: function handleOnChangeCallback(event) {
      var ourCallbackResult = "";
      var _this = Object.assign({}, this.state, event);
      switch (_typeof(this.onChange)) {
        case "function":
          ourCallbackResult = this.onChange(_this);
          break;
        case "object":
          if (this.onChange instanceof Array) {
            ourCallbackResult = this.onChange.map(function (aFunction) {
              return aFunction(_this);
            });
          }
          break;
        default:
          ourCallbackResult = false;
          break;
      }
      if (ourCallbackResult !== "") {
        this.setState({
          onChangeCallback: ourCallbackResult
        });
      }
    }

    /**
     * Triggered by React onClick event.
     * @param {React Event} event
     */

  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var _this6 = this;

      var clonedEvent = Object.assign({}, event);

      // We need a button handler, as this is the only way to which this input
      //  type has 'changed'.
      if (this.props.type === "button") {
        this.handleChange(clonedEvent);
      }
      this.setState({
        wasClicked: true
      }, function () {
        if (_this6.props.onClick) {
          _this6.handleOnClickCallback(clonedEvent);
        }
      });
    }

    /**
     * @param {*} event - Passed from the input control. Be careful to handle the
     *  different types of params passed from different input.
     */

  }, {
    key: "handleOnClickCallback",
    value: function handleOnClickCallback(event) {
      var ourCallbackResult = "";
      var _this = Object.assign({}, this.state, event);
      switch (_typeof(this.onClick)) {
        case "function":
          ourCallbackResult = this.onClick(_this);
          break;
        case "object":
          if (this.onClick instanceof Array) {
            ourCallbackResult = this.onClick.map(function (aFunction) {
              return aFunction(_this);
            });
          }
          break;
        default:
          ourCallbackResult = false;
          break;
      }
      if (ourCallbackResult !== "") {
        this.setState({
          onClickCallback: ourCallbackResult
        });
      }
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      var _this7 = this;

      var clonedEvent = Object.assign({}, event);
      this.setState({
        hasFocus: true
      }, function () {
        if (_this7.props.onFocus) {
          _this7.handleOnFocusCallback(clonedEvent);
        }
      });
    }

    /**
     * @param {*} event - Passed from the input control. Be careful to handle the
     *  different types of params passed from different input.
     */

  }, {
    key: "handleOnFocusCallback",
    value: function handleOnFocusCallback(event) {
      var ourCallbackResult = "";
      var _this = Object.assign({}, this.state, event);
      switch (_typeof(this.onFocus)) {
        case "function":
          ourCallbackResult = this.onFocus(_this);
          break;
        case "object":
          if (this.onFocus instanceof Array) {
            ourCallbackResult = this.onFocus.map(function (aFunction) {
              return aFunction(_this);
            });
          }
          break;
        default:
          ourCallbackResult = false;
          break;
      }
      if (ourCallbackResult !== "") {
        this.setState({
          onFocusCallback: ourCallbackResult
        });
      }
    }
  }, {
    key: "handleHasChanged",
    value: function handleHasChanged() {
      if (!this.state.hasChanged) {
        this.setState({
          hasChanged: true
        });
      }

      this.setState({
        justChanged: false
      });
    }
  }, {
    key: "handleHasValidation",
    value: function handleHasValidation(event) {
      var value = undefined;
      switch (this.props.type) {
        case "radio":
          value = event.target.on;
          break;

        case "text":
          value = event.target.value;
          break;

        case "textarea":
          value = event.target.value;
          break;

        default:
          value = true;
          break;
      }
      var validationResult = undefined;
      var validationFailureIndex = -1;
      if (this.props.validation instanceof Array) {
        validationResult = this.props.validation.map(function (aFunction) {
          return aFunction.callback(value);
        });

        validationFailureIndex = validationResult.indexOf(false);
        if (validationFailureIndex === -1) {
          validationResult = true;
        } else {
          validationResult = false;
          this.setState({
            validationErrorMessage: this.props.validation[validationFailureIndex].errorMessage
          });
        }
      } else {
        validationResult = this.props.validation.callback(value);
        if (validationResult !== true) {
          this.setState({
            validationErrorMessage: this.props.validation.errorMessage
          });
        }
      }

      this.setState({
        isValid: validationResult
      });
    }
  }, {
    key: "render",
    value: function render() {
      var containerClassNames = "";
      var inputClassNames = "";
      var labelClassNames = "";
      var validationClassNames = "";

      if (this.props.containerClassNames) {
        if (this.props.containerClassNames instanceof Array) {
          containerClassNames += "" + this.props.containerClassNames.join(" ");
        } else {
          containerClassNames += "" + this.props.containerClassNames;
        }
      } else {
        containerClassNames += "input input-container input-" + this.props.type;
      }

      if (this.props.inputClassNames) {
        if (this.props.inputClassNames instanceof Array) {
          inputClassNames += "" + this.props.inputClassNames.join(" ");
        } else {
          inputClassNames += "" + this.props.inputClassNames;
        }
      } else {
        inputClassNames += this.props.type + " " + this.props.type + "-container";
      }

      if (this.props.labelClassNames) {
        if (this.props.labelClassNames instanceof Array) {
          labelClassNames += "" + this.props.labelClassNames.join(" ");
        } else {
          labelClassNames += "" + this.props.labelClassNames;
        }
      } else {
        labelClassNames += "label label-container label-" + this.props.type;
      }

      if (this.props.validationClassNames) {
        if (this.props.validationClassNames instanceof Array) {
          validationClassNames += "" + this.props.validationClassNames.join(" ");
        } else {
          validationClassNames += "" + this.props.validationClassNames;
        }
      } else {
        validationClassNames += "validation validation-container validation-" + this.props.type;
      }

      if (this.state.hasChanged) {
        containerClassNames += " container-touched";
        inputClassNames += " input-touched";
        labelClassNames += " label-touched";
        validationClassNames += " validation-touched";
      } else {
        containerClassNames += " container-untouched";
        inputClassNames += " input-untouched";
        labelClassNames += " label-untouched";
        validationClassNames += " validation-untouched";
      }

      if (this.state.justChanged) {
        containerClassNames += " container-justchanged";
        inputClassNames += " input-justchanged";
        labelClassNames += " label-justchanged";
        validationClassNames += " validation-justchanged";
      }

      if (this.state.hasFocus) {
        containerClassNames += " container-focus";
        inputClassNames += " input-focus";
        labelClassNames += " label-focus";
        validationClassNames += " validation-focus";
      } else {
        containerClassNames += " container-nofocus";
        inputClassNames += " input-nofocus";
        labelClassNames += " label-nofocus";
        validationClassNames += " validation-nofocus";
      }

      if (this.props.validation) {
        if (this.state.isValid) {
          containerClassNames += " container-valid";
          inputClassNames += " input-valid";
          labelClassNames += " label-valid";
          validationClassNames += " validation-valid";
        } else {
          containerClassNames += " container-invalid";
          inputClassNames += " input-invalid";
          labelClassNames += " label-invalid";
          validationClassNames += " validation-invalid";
        }
      }

      var thisValidation = null;
      if (this.props.validation) {
        thisValidation = _react2.default.createElement(
          "p",
          { className: validationClassNames },
          this.state.validationErrorMessage || "invalid"
        );
      }

      var thisInput = _react2.default.createElement(
        "p",
        null,
        "Unsupported Input"
      );
      switch (this.props.type) {
        case "button":
          thisInput = _react2.default.createElement("input", {
            className: inputClassNames,
            id: this.props.identifier,
            name: this.props.name || this.props.identifier,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            placeholder: this.props.placeholder || "",
            type: this.props.type,
            value: this.state.value
          });
          break;

        case "radio":
          thisInput = _react2.default.createElement("input", {
            className: inputClassNames,
            id: this.props.identifier,
            name: this.props.name || this.props.identifier,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            placeholder: this.props.placeholder || "",
            type: this.props.type
          });
          break;

        case "text":
          thisInput = _react2.default.createElement("input", {
            className: inputClassNames,
            id: this.props.identifier,
            name: this.props.name || this.props.identifier,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            placeholder: this.props.placeholder || "",
            type: this.props.type,
            value: this.state.value
          });
          break;

        case "textarea":
          thisInput = _react2.default.createElement("textarea", {
            className: inputClassNames,
            id: this.props.identifier,
            name: this.props.name || this.props.identifier,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            placeholder: this.props.placeholder || "",
            type: this.props.type,
            value: this.state.value
          });
          break;

        default:
          thisInput = _react2.default.createElement("input", {
            className: inputClassNames,
            id: this.props.identifier,
            name: this.props.name || this.props.identifier,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            placeholder: this.props.placeholder || "",
            type: this.props.type,
            value: this.state.value
          });
          break;
      }

      return _react2.default.createElement(
        "div",
        { className: containerClassNames },
        _react2.default.createElement(
          "label",
          { className: labelClassNames, htmlFor: this.props.identifier },
          this.props.labelContent
        ),
        thisInput,
        thisValidation
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  /** containerClassNames are class names applied to the container only. */
  containerClassNames: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),
  /** Defines the HTML ID applied to the input (Required). */
  identifier: _propTypes2.default.string.isRequired,
  /** An input class names override for the input. Expects a, or array of,
   * string. */
  inputClassNames: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),
  /** A label class names override for the input. Expects a, or array of,
   * string. */
  labelClassNames: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),
  /** A label for your input. Labels can be styled with the label-<criteria>
   * selector, unless override from labelClassNames prop */
  labelContent: _propTypes2.default.string.isRequired,
  /** A name object, applied to the input at a HTML level. */
  name: _propTypes2.default.string,
  /** An onChange callback. The React event object is passed. Expects a
   * function, or array of functions. */
  onChange: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.func), _propTypes2.default.func]),
  /** An onClick callback. The React event object is passed. Expects a
   * function, or array of functions. */
  onClick: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.func), _propTypes2.default.func]),
  /** An onComponentDidMount callback. The React event object is passed.
   * Expects a function, or array of functions. */
  onComponentDidMount: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.func), _propTypes2.default.func]),
  /** An onFocus callback. The React event object is passed. Expects a
   * function, or array of functions. */
  onFocus: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.func), _propTypes2.default.func]),
  /** An onBlur (or React: onBlur) callback. The React event object is passed.
   * Expects a function, or array of functions. */
  onBlur: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.func), _propTypes2.default.func]),
  placeholder: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired,
  /** A validation class names override - defaults to "validation-<criteria>".
   * Expects a string, or array of strings */
  validationClassNames: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),
  /**
   * Validation expect an object, or array of objects, with "callback", and
   * "validationState" required properties. I've chosen to supply an isolated
   * property to appropriately abstract, yet "contain" all the states of
   * Validation.
   */
  validation: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({
    /** A react event object is passed to your callback function for your
     * validation */
    callback: _propTypes2.default.func.isRequired,
    /** Store the error message for this input failing validation */
    errorMessage: _propTypes2.default.string.isRequired,
    /** This is used to provide a tooltip to your input. */
    tooltip: _propTypes2.default.string
  })), _propTypes2.default.shape({
    /** A react event object is passed to your callback function for your
     * validation */
    callback: _propTypes2.default.func.isRequired,
    /** Store the error message for this input failing validation */
    errorMessage: _propTypes2.default.string.isRequired,
    /** This is used to provide a tooltip to your input. */
    tooltip: _propTypes2.default.string
  })]),
  value: _propTypes2.default.string,
  /**
   * valueMask: {string}
   *
   *  An opportunity to mask the return value supplied by the input. Replaces
   * {{value}} with the actual value of the input.
   *    An example may be;
   *    "First Name: {{value}}".
   *
   * Note: Input Mask is NOT supplied to validators.
   */
  valueMask: _propTypes2.default.string
};

exports.default = Input;
module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (undefined !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(8)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(11)();
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(0);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(3);
var assign = __webpack_require__(9);

var ReactPropTypesSecret = __webpack_require__(2);
var checkPropTypes = __webpack_require__(10);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (undefined !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (undefined !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (undefined !== 'production') {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(3);
  var ReactPropTypesSecret = __webpack_require__(2);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (undefined !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(0);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(2);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ })
/******/ ]);
});