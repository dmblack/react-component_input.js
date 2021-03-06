"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

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
      disabled: _this2.props.disabled || false,
      isValid: _this2.props.validation ? false : true,
      justChanged: false,
      value: _this2.props.value || "",
      valueMask: _this2.props.valueMask || undefined
    };

    _this2.classFactory = function (element) {
      if (element instanceof Array) {
        var result = [];
        element.forEach(function (element) {
          result.push(element + " " + element + "-container " + element + "-" + _this2.props.type + " " + (_this2.state.hasChanged ? element + "-touched" : element + "-untouched") + " " + (_this2.state.hasFocus ? element + "-focus" : element + "-nofocus") + " " + (_this2.props.validation ? _this2.state.isValid ? element + "-validation " + element + "-valid" : element + "-validation " + element + "-invalid" : element + "-novalidation"));
        });

        return result.join(' ');
      }

      return element + " " + element + "-container " + element + "-" + _this2.props.type + " " + (_this2.state.hasChanged ? element + "-touched" : element + "-untouched") + " " + (_this2.state.hasFocus ? element + "-focus" : element + "-nofocus") + " " + (_this2.props.validation ? _this2.state.isValid ? element + "-validation " + element + "-valid" : element + "-validation " + element + "-invalid" : element + "-novalidation");
    };

    /**
     * Used for input taht have child value like behavior (radio, select)
     */
    _this2.childValueFactory = function (values) {
      if (values instanceof Array) {
        var _childValues = [];
        values.forEach(function (value) {
          switch (_this2.props.type) {
            case 'radio':
              _childValues.push(_react2.default.createElement("input", { type: "radio", id: value.name, name: value.name, key: value.name, tooltip: value.tooltip, value: value.value }));
              break;
            case 'select':
              _childValues.push(_react2.default.createElement(
                "option",
                { id: value.name, name: value.name, key: value.name, tooltip: value.tooltip, value: value.value },
                value.name
              ));
              break;
            default:
              _childValues.push(_react2.default.createElement("input", { type: "radio", id: value.name, name: value.name, key: value.name, tooltip: value.tooltip, value: value.value }));
              break;
          }
        });

        return _childValues;
      } else {
        switch (_this2.props.type) {
          case 'radio':
            return childValues.push(_react2.default.createElement("input", { type: "radio", id: value.name, name: value.name, tooltip: value.tooltip, value: value.value }));
          case 'select':
            return childValues.push(_react2.default.createElement(
              "option",
              { id: value.name, name: value.name, tooltip: value.tooltip, value: value.value },
              value.name
            ));
          default:
            return childValues.push(_react2.default.createElement("input", { type: "radio", id: value.name, name: value.name, tooltip: value.tooltip, value: value.value }));
        }
      }
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

      // Handles initial validation state (Triggered for error message)
      if (this.props.validation) {
        this.handleHasValidation();
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
        default:
          thisValue = clonedEvent.target.value;
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

      // Handles initial validation state, which does not include an event.
      if (event) {
        switch (this.props.type) {
          default:
            value = event.target.value;
            break;
        }
      } else {
        value = this.state.value;
      }
      var validationResult = undefined;

      if (this.props.validation instanceof Array) {
        validationResult = this.props.validation.map(function (aFunction) {
          return aFunction.callback(value);
        });

        var validationFailureIndex = validationResult.indexOf(false);
        if (validationFailureIndex === -1) {
          validationResult = true;
        } else {
          validationResult = false;
          this.setState({
            errorMessage: this.props.validation[validationFailureIndex].errorMessage
          });
        }
      } else {
        validationResult = this.props.validation.callback(value);
        if (validationResult !== true) {
          this.setState({
            errorMessage: this.props.validation.errorMessage
          });
        }
      }

      if (validationResult) {
        this.setState({ errorMessage: '' });
      };

      this.setState({
        isValid: validationResult
      });
    }
  }, {
    key: "render",
    value: function render() {
      var thisInput = _react2.default.createElement(
        "p",
        null,
        "Unsupported Input"
      );
      var containerClassNames = this.props.containerClassNames ? this.classFactory(this.props.containerClassNames) : this.classFactory(this.props.type);

      var labelClassNames = this.props.labelClassNames ? this.classFactory(this.props.labelClassNames) : this.classFactory('label');

      var inputClassNames = this.props.inputClassNames ? this.classFactory(this.props.inputClassNames) : this.classFactory('input');

      var validationClassNames = this.props.validationClassNames ? this.classFactory(this.props.validationClassNames) : this.classFactory('validation');

      var childValues = this.props.childValues ? this.childValueFactory(this.props.childValues) : undefined;

      switch (this.props.type) {
        case "button":
          thisInput = _react2.default.createElement("input", {
            className: inputClassNames,
            disabled: this.state.disabled || false,
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
          thisInput = _react2.default.createElement(
            "div",
            {
              className: inputClassNames,
              disabled: this.state.disabled || false,
              id: this.props.identifier,
              name: this.props.name || this.props.identifier,
              onBlur: this.handleBlur,
              onChange: this.handleChange,
              onClick: this.handleClick,
              onFocus: this.handleFocus,
              placeholder: this.props.placeholder || "",
              type: this.props.type },
            childValues
          );
          break;

        case "select":
          thisInput = _react2.default.createElement(
            "select",
            {
              className: inputClassNames,
              disabled: this.state.disabled || false,
              id: this.props.identifier,
              name: this.props.name || this.props.identifier,
              onBlur: this.handleBlur,
              onChange: this.handleChange,
              onClick: this.handleClick,
              onFocus: this.handleFocus,
              placeholder: this.props.placeholder || "",
              type: this.props.type },
            childValues
          );
          break;

        case "text":
          thisInput = _react2.default.createElement("input", {
            className: inputClassNames,
            disabled: this.state.disabled || false,
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
            disabled: this.state.disabled || false,
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
            disabled: this.state.disabled || false,
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

      var thisValidation = null;
      if (this.props.validation) {
        thisValidation = _react2.default.createElement(
          "p",
          { className: validationClassNames },
          this.state.errorMessage
        );
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
  /** childValues are objects that which the input is dependent, such
   * as a radio, or a select input. Name and Value are mandatory, however
   * tooltip is optional.
   */
  childValues: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    tooltip: _propTypes2.default.string,
    name: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  })),
  /** containerClassNames are class names applied to the container only. */
  containerClassNames: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.string]),
  // Enables 'disabled' html input type - which is a browser behavior.
  disabled: _propTypes2.default.bool,
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