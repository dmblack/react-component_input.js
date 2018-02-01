import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasChanged: false,
      hasFocus: false,
      id: this.props.identifier || undefined,
      isValid: this.props.validation ? false : true,
      justChanged: false,
      value: this.props.value || "",
      valueMask: this.props.valueMask || undefined
    };

    this.classFactory = (element) => {
      if (element instanceof Array) {
        let result = [];
        element.forEach(element => {
          result.push(`${element} ${element}-container ${element}-${this.props.type} ${this.state.hasChanged
            ? `${element}-touched`
            : `${element}-untouched`} ${this.state.hasFocus
            ? `${element}-focus`
            : `${element}-nofocus`} ${this.props.validation
            ? this.state.isValid
              ? `${element}-validation ${element}-valid`
              : `${element}-validation ${element}-invalid`
            : `${element}-novalidation`}`);
        })

        return result.join(' ');
      }

      return `${element} ${element}-container ${element}-${this.props.type} ${this.state.hasChanged
        ? `${element}-touched`
        : `${element}-untouched`} ${this.state.hasFocus
        ? `${element}-focus`
        : `${element}-nofocus`} ${this.props.validation
        ? this.state.isValid
          ? `${element}-validation ${element}-valid`
          : `${element}-validation ${element}-invalid`
        : `${element}-novalidation`}`;
    }

    // onBlur
    this.handleBlur = this.handleBlur.bind(this);
    this.handleOnBlurCallback = this.props.onBlur
      ? this.handleOnBlurCallback.bind(this)
      : () => true;
    if (this.props.onBlur) {
      switch (typeof this.props.onBlur) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          this.onBlur = this.props.onBlur.map(callBack => {
            return callBack.bind(this);
          });
          break;
        case "function":
          this.onBlur = this.props.onBlur.bind(this);
          break;
      }
    }

    // onChange
    this.handleChange = this.handleChange.bind(this);
    this.handleOnChangeCallback = this.props.onChange
      ? this.handleOnChangeCallback.bind(this)
      : () => true;
    if (this.props.onChange) {
      switch (typeof this.props.onChange) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          this.onChange = this.props.onChange.map(callBack => {
            return callBack.bind(this);
          });
          break;
        case "function":
          this.onChange = this.props.onChange.bind(this);
          break;
      }
    }

    // onClick
    this.handleClick = this.handleClick.bind(this);
    this.handleOnClickCallback = this.props.onClick
      ? this.handleOnClickCallback.bind(this)
      : () => true;
    if (this.props.onClick) {
      switch (typeof this.props.onClick) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          this.onClick = this.props.onClick.map(callBack => {
            return callBack.bind(this);
          });
          break;
        case "function":
          this.onClick = this.props.onClick.bind(this);
          break;
      }
    }

    // onFocus
    this.handleFocus = this.handleFocus.bind(this);
    this.handleOnFocusCallback = this.props.onFocus
      ? this.handleOnFocusCallback.bind(this)
      : () => true;
    if (this.props.onFocus) {
      switch (typeof this.props.onFocus) {
        case "object":
          // Type safe due to props validation of this object. This is an array.
          this.onFocus = this.props.onFocus.map(callBack => {
            return callBack.bind(this);
          });
          break;
        case "function":
          this.onFocus = this.props.onFocus.bind(this);
          break;
      }
    }
    // Handles changed state (updating untouched classes)
    this.handleHasChanged = this.handleHasChanged.bind(this);

    // Handles validations (if exists)
    this.handleHasValidation = this.props.validation
      ? this.handleHasValidation.bind(this)
      : () => true;

    // Handle the passed default validation state, if one exists.. Otherwise;
    //  default is isValid: false in state.
    if (this.props.validation) {
      if (this.props.validation.isArray) {
        let isValidArray = this.props.validation.map(x => {
          return x.isValid;
        });

        this.isValid = isValidArray.indexOf(false) === -1;
      } else if (Object.keys(this.props.validation).length > 0) {
        this.isValid = this.props.validation.validationState;
      }
    }
  }

  componentDidMount() {
    let ourCallbackResult = "";
    switch (typeof this.props.onComponentDidMount) {
      case "function":
        ourCallbackResult = this.props.onComponentDidMount(this);
        break;
      case "object":
        if (this.props.onComponentDidMount instanceof Array) {
          ourCallbackResult = this.props.onComponentDidMount.map(aFunction => {
            return aFunction(this);
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
  handleBlur(event) {
    let clonedEvent = Object.assign({}, event);
    this.setState(
      {
        hasFocus: false
      },
      () => {
        if (this.props.onBlur) {
          this.handleOnBlurCallback(clonedEvent);
        }
      }
    );
  }

  /**
   * Passed from the input control. Be careful to handle the different types of
   *  params passed from different input.
   * @param {*} event
   */
  handleOnBlurCallback(event) {
    let ourCallbackResult = "";
    let _this = Object.assign({}, this.state, event);
    switch (typeof this.onBlur) {
      case "function":
        ourCallbackResult = this.onBlur(_this);
        break;
      case "object":
        if (this.onBlur instanceof Array) {
          ourCallbackResult = this.onBlur.map(aFunction => {
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
  handleChange(event) {
    let clonedEvent = Object.assign({}, event);

    let thisValue = null;

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

    this.setState(
      {
        justChanged: true,
        value: thisValue
      },
      () => {
        if (this.props.validation) {
          this.handleHasValidation(clonedEvent);
        }
        if (this.props.onChange) {
          this.handleOnChangeCallback(clonedEvent);
        }
      }
    );

    this.handleHasChanged();
  }

  /**
   * @param {*} event - Passed from the input control. Be careful to handle the
   *  different types of params passed from different input.
   */
  handleOnChangeCallback(event) {
    let ourCallbackResult = "";
    let _this = Object.assign({}, this.state, event);
    switch (typeof this.onChange) {
      case "function":
        ourCallbackResult = this.onChange(_this);
        break;
      case "object":
        if (this.onChange instanceof Array) {
          ourCallbackResult = this.onChange.map(aFunction => {
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
  handleClick(event) {
    let clonedEvent = Object.assign({}, event);

    // We need a button handler, as this is the only way to which this input
    //  type has 'changed'.
    if (this.props.type === "button") {
      this.handleChange(clonedEvent);
    }
    this.setState(
      {
        wasClicked: true
      },
      () => {
        if (this.props.onClick) {
          this.handleOnClickCallback(clonedEvent);
        }
      }
    );
  }

  /**
   * @param {*} event - Passed from the input control. Be careful to handle the
   *  different types of params passed from different input.
   */
  handleOnClickCallback(event) {
    let ourCallbackResult = "";
    let _this = Object.assign({}, this.state, event);
    switch (typeof this.onClick) {
      case "function":
        ourCallbackResult = this.onClick(_this);
        break;
      case "object":
        if (this.onClick instanceof Array) {
          ourCallbackResult = this.onClick.map(aFunction => {
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

  handleFocus(event) {
    let clonedEvent = Object.assign({}, event);
    this.setState(
      {
        hasFocus: true
      },
      () => {
        if (this.props.onFocus) {
          this.handleOnFocusCallback(clonedEvent);
        }
      }
    );
  }

  /**
   * @param {*} event - Passed from the input control. Be careful to handle the
   *  different types of params passed from different input.
   */
  handleOnFocusCallback(event) {
    let ourCallbackResult = "";
    let _this = Object.assign({}, this.state, event);
    switch (typeof this.onFocus) {
      case "function":
        ourCallbackResult = this.onFocus(_this);
        break;
      case "object":
        if (this.onFocus instanceof Array) {
          ourCallbackResult = this.onFocus.map(aFunction => {
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

  handleHasChanged() {
    if (!this.state.hasChanged) {
      this.setState({
        hasChanged: true
      });
    }

    this.setState({
      justChanged: false
    });
  }

  handleHasValidation(event) {
    let value = undefined;
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
    let validationResult = undefined;
    let validationFailureIndex = -1;
    if (this.props.validation instanceof Array) {
      validationResult = this.props.validation.map(aFunction => {
        return aFunction.callback(value);
      });

      validationFailureIndex = validationResult.indexOf(false);
      if (validationFailureIndex === -1) {
        validationResult = true;
      } else {
        validationResult = false;
        this.setState({
          validationErrorMessage: this.props.validation[validationFailureIndex]
            .errorMessage
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

  render() {
    let thisInput = <p>Unsupported Input</p>;
    let containerClassNames = this.props.containerClassNames
      ? this.classFactory(this.props.containerClassNames)
      : this.classFactory(this.props.type)

    let labelClassNames = this.props.labelClassNames
      ? this.classFactory(this.props.labelClassNames)
      : this.classFactory('label')
    
    let inputClassNames = this.props.inputClassNames
      ? this.classFactory(this.props.inputClassNames)
      : this.classFactory('input')

    let validationClassNames = this.props.validationClassNames
      ? this.classFactory(this.props.validationClassNames)
      : this.classFactory('validation')

    switch (this.props.type) {
      case "button":
        thisInput = (
          <input
            className={inputClassNames}
            id={this.props.identifier}
            name={this.props.name || this.props.identifier}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            placeholder={this.props.placeholder || ""}
            type={this.props.type}
            value={this.state.value}
          />
        );
        break;

      case "radio":
        thisInput = (
          <input
            className={inputClassNames}
            id={this.props.identifier}
            name={this.props.name || this.props.identifier}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            placeholder={this.props.placeholder || ""}
            type={this.props.type}
          />
        );
        break;

      case "text":
        thisInput = (
          <input
            className={inputClassNames}
            id={this.props.identifier}
            name={this.props.name || this.props.identifier}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            placeholder={this.props.placeholder || ""}
            type={this.props.type}
            value={this.state.value}
          />
        );
        break;

      case "textarea":
        thisInput = (
          <textarea
            className={inputClassNames}
            id={this.props.identifier}
            name={this.props.name || this.props.identifier}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            placeholder={this.props.placeholder || ""}
            type={this.props.type}
            value={this.state.value}
          />
        );
        break;

      default:
        thisInput = (
          <input
            className={inputClassNames}
            id={this.props.identifier}
            name={this.props.name || this.props.identifier}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            placeholder={this.props.placeholder || ""}
            type={this.props.type}
            value={this.state.value}
          />
        );
        break;
    }

    let thisValidation = null;
    if (this.props.validation) {
      thisValidation = (
        <p className={validationClassNames}>
          {this.state.validationErrorMessage || "invalid"}
        </p>
      );
    }

    return (
      <div className={containerClassNames}>
        <label className={labelClassNames} htmlFor={this.props.identifier}>
          {this.props.labelContent}
        </label>
        {thisInput}
        {thisValidation}
      </div>
    );
  }
}

Input.propTypes = {
  /** containerClassNames are class names applied to the container only. */
  containerClassNames: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  /** Defines the HTML ID applied to the input (Required). */
  identifier: PropTypes.string.isRequired,
  /** An input class names override for the input. Expects a, or array of,
   * string. */
  inputClassNames: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  /** A label class names override for the input. Expects a, or array of,
   * string. */
  labelClassNames: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  /** A label for your input. Labels can be styled with the label-<criteria>
   * selector, unless override from labelClassNames prop */
  labelContent: PropTypes.string.isRequired,
  /** A name object, applied to the input at a HTML level. */
  name: PropTypes.string,
  /** An onChange callback. The React event object is passed. Expects a
   * function, or array of functions. */
  onChange: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.func
  ]),
  /** An onClick callback. The React event object is passed. Expects a
   * function, or array of functions. */
  onClick: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.func
  ]),
  /** An onComponentDidMount callback. The React event object is passed.
   * Expects a function, or array of functions. */
  onComponentDidMount: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.func
  ]),
  /** An onFocus callback. The React event object is passed. Expects a
   * function, or array of functions. */
  onFocus: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.func
  ]),
  /** An onBlur (or React: onBlur) callback. The React event object is passed.
   * Expects a function, or array of functions. */
  onBlur: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.func
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  /** A validation class names override - defaults to "validation-<criteria>".
   * Expects a string, or array of strings */
  validationClassNames: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  /**
   * Validation expect an object, or array of objects, with "callback", and
   * "validationState" required properties. I've chosen to supply an isolated
   * property to appropriately abstract, yet "contain" all the states of
   * Validation.
   */
  validation: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        /** A react event object is passed to your callback function for your
         * validation */
        callback: PropTypes.func.isRequired,
        /** Store the error message for this input failing validation */
        errorMessage: PropTypes.string.isRequired,
        /** This is used to provide a tooltip to your input. */
        tooltip: PropTypes.string
      })
    ),
    PropTypes.shape({
      /** A react event object is passed to your callback function for your
       * validation */
      callback: PropTypes.func.isRequired,
      /** Store the error message for this input failing validation */
      errorMessage: PropTypes.string.isRequired,
      /** This is used to provide a tooltip to your input. */
      tooltip: PropTypes.string
    })
  ]),
  value: PropTypes.string,
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
  valueMask: PropTypes.string
};

export default Input;
