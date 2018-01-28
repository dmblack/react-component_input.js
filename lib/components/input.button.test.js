"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _enzyme = require("enzyme");

var _Input = require("./Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global expect */
/* eslint-env yarn */

it("renders without crashing", function () {
  var div = document.createElement("div");
  _reactDom2.default.render(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }), div);
});

it("should have a html div container", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }));
  var container = wrapper.find("#testInput");

  expect(container.length).toEqual(1);
});

it("container has appropriate classes", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }));
  var container = wrapper.find("[className='input input-container input-button container-untouched  container-nofocus container-invalid']");

  expect(container.length).toEqual(1);
});

it("container has appropriate classes when over-ridden with single string", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input", containerClassNames: "reniatnoc" }));
  var container = wrapper.find("[className='reniatnoc container-untouched  container-nofocus container-invalid']");

  expect(container.length).toEqual(1);
});

it("container has appropriate classes when over-ridden with array of strings", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input", containerClassNames: ["reniatnoc", "reniatno"] }));
  var container = wrapper.find("[className='reniatnoc reniatno container-untouched  container-nofocus container-invalid']");

  expect(container.length).toEqual(1);
});

it("should have a html label element", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }));
  var label = wrapper.find("label").prop("children");

  expect(label).toContain("Test Input");
});

it("label should have appropraite classes", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }));
  var label = wrapper.find("[className='input input-label label-untouched  label-invalid']");

  expect(label.length).toEqual(1);
});

it("label should have appropraite classes when over-ridden with an array of strings", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input", labelClassNames: ["lebal", "leba"] }));
  var label = wrapper.find("[className='lebal leba label-untouched  label-invalid']");

  expect(label.length).toEqual(1);
});

it("input should have appropriate classes", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }));
  var input = wrapper.find("[className='input input-input input-untouched  input-invalid']");

  expect(input.length).toEqual(1);
});

it("input should have appropriate classes when over-ridden with an array of strings", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input", inputClassNames: ["tupni", "tupn"] }));
  var input = wrapper.find("[className='tupni tupn input-untouched  input-invalid']");

  expect(input.length).toEqual(1);
});

it("should have a html p (validation) element", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }));
  var input = wrapper.find("p");

  expect(input.length).toEqual(1);
});

it("p (validation) should have appropriate classes", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input" }));
  var input = wrapper.find("[className='input input-validation validation-untouched  validation-invalid']");

  expect(input.length).toEqual(1);
});

it("p (validation) should have appropriate classes when over-ridden by an array of strings", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, { type: "button", identifier: "testInput", labelContent: "Test Input", validationClassNames: ["noitadilav", "noitadila"] }));
  var input = wrapper.find("[className='noitadilav noitadila validation-untouched  validation-invalid']");

  expect(input.length).toEqual(1);
});

it("accepts, and renders, name property text", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input",
    name: "name Text"
  }));

  var name = wrapper.find("[name='name Text']");

  expect(name.length).toEqual(1);
});

it("accepts, and renders, name property text - control (ensures no false positive)", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input",
    name: "name Text"
  }));

  var name = wrapper.find("[name='name Text That Doesn\"t Exist']");

  expect(name.length).toEqual(0);
});

it("accepts, and renders, placeholder property text", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input",
    placeholder: "Placeholder Text"
  }));

  var placeholder = wrapper.find("[placeholder='Placeholder Text']");

  expect(placeholder.length).toEqual(1);
});

it("accepts, and renders, placeholder property text - control (ensures no false positive)", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input",
    placeholder: "Placeholder Text"
  }));

  var placeholder = wrapper.find("[placeholder='Placeholder Text That Doesn\"t Exist']");

  expect(placeholder.length).toEqual(0);
});

it("component contains a container-nofocus class default", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  var hasNoFocus = wrapper.find(".container-nofocus");

  expect(hasNoFocus.length).toEqual(1);
});

it("component contains a container-focus class upon receiving focus", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  var hasNoFocus = wrapper.find(".container-nofocus");

  expect(hasNoFocus.length).toEqual(1);

  wrapper.find("input").simulate("focus");

  var nowHasFocus = wrapper.find(".container-focus");

  expect(nowHasFocus.length).toEqual(1);
});

it("component contains a container-nofocus class upon receiving focus, then again losing focus", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  var hasNoFocus = wrapper.find(".container-nofocus");
  expect(hasNoFocus.length).toEqual(1);

  wrapper.find("input").simulate("focus");
  var nowHasFocus = wrapper.find(".container-focus");
  expect(nowHasFocus.length).toEqual(1);

  wrapper.find("input").simulate("blur");
  var noLongerHasFocus = wrapper.find(".container-nofocus");
  expect(noLongerHasFocus.length).toEqual(1);
});

it("component contains a container-untouched class default", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  var hasNoTouched = wrapper.find(".container-untouched");

  expect(hasNoTouched.length).toEqual(1);
});

// Currently seems to fail because of something similar to htis; https://github.com/facebook/jest/issues/207
// WIP
// it("component contains a container-focus class upon change (touched)", () => {
//   const wrapper = shallow(
//     <Input
//       type="button"
//       identifier="testInput"
//       labelContent="Test Input"
//       value="Test Button"
//     />
//   );

//   let hasNoTouched = wrapper.find(".container-untouched");

//   expect(hasNoTouched.length).toEqual(1);

//   wrapper.find("input").simulate("click");

//   let nowHasTouched = wrapper.find(".container-touched");

//   expect(nowHasTouched.length).toEqual(1);
// });

it("component contains a container-untouched class upon change (Touched), and is retained on blur", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  var hasNoTouched = wrapper.find(".container-untouched");
  expect(hasNoTouched.length).toEqual(1);

  wrapper.find("input").simulate("change", { target: { value: "a" } });
  var nowHasTouched = wrapper.find(".container-touched");
  expect(nowHasTouched.length).toEqual(1);

  wrapper.find("input").simulate("blur");
  var stillRetainsTouched = wrapper.find(".container-touched");
  expect(stillRetainsTouched.length).toEqual(1);
});

it("accepts an onChange object, and updates the state of onChange with appropraite response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onChange: function onChange() {
      return { result: true };
    },
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  expect(wrapper.state("onChangeCallback")).toEqual({ result: true });
});

it("accepts an onChange object [array of], and updates the state of onChange with the appropriate response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onChange: [function () {
      return { result: true };
    }, function () {
      return { result: false };
    }],
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  expect(wrapper.state("onChangeCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onChangeCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onChangeCallback")[1]).toEqual({ result: false });
});

// Currently seems to fail because of something similar to htis; https://github.com/facebook/jest/issues/207
// WIP
// it ("accepts an onClick object, and updates the state of onClick with appropraite response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="button"
//       onClick={() => { return { result: true } } }
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("click");

//   expect(wrapper.state("onClickCallback")).toEqual({result: true});
//});

// Currently seems to fail because of something similar to htis; https://github.com/facebook/jest/issues/207
// WIP

// it ("accepts an onClick object [array of], and updates the state of onClick with the appropriate response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="button"
//       onClick={[() => { return { result: true } }, () => { return { result : false } }] }
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("click");

//   expect(wrapper.state("onClickCallback") instanceof Array).toEqual(true)

//   expect(wrapper.state("onClickCallback")[0]).toEqual({result: true});
//   expect(wrapper.state("onClickCallback")[1]).toEqual({result: false});
// });

it("accepts an onFocus object, and updates the state of onFocus with appropraite response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onFocus: function onFocus() {
      return { result: true };
    },
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");

  expect(wrapper.state("onFocusCallback")).toEqual({ result: true });
});

it("accepts an onFocus object [array of], and updates the state of onFocus with the appropriate response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onFocus: [function () {
      return { result: true };
    }, function () {
      return { result: false };
    }],
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");

  expect(wrapper.state("onFocusCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onFocusCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onFocusCallback")[1]).toEqual({ result: false });
});

it("accepts an onBlur object, and updates the state of onBlur with appropraite response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onBlur: function onBlur() {
      return { result: true };
    },
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");
  wrapper.find("input").simulate("blur");

  expect(wrapper.state("onBlurCallback")).toEqual({ result: true });
});

it("accepts an onBlur object [array of], and updates the state of onBlur with the appropriate response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onBlur: [function () {
      return { result: true };
    }, function () {
      return { result: false };
    }],
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");
  wrapper.find("input").simulate("blur");

  expect(wrapper.state("onBlurCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onBlurCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onBlurCallback")[1]).toEqual({ result: false });
});

it("accepts an onComponentDidMount object, and updates the state of onComponentDidMount with appropraite response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onComponentDidMount: function onComponentDidMount() {
      return { result: true };
    },
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  expect(wrapper.state("onComponentDidMountCallback")).toEqual({ result: true });
});

it("accepts an onComponentDidMount object [array of], and updates the state of onComponentDidMount with the appropriate response criteria", function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, {
    type: "button",
    onComponentDidMount: [function () {
      return { result: true };
    }, function () {
      return { result: false };
    }],
    identifier: "testInput",
    labelContent: "Test Input"
  }));

  expect(wrapper.state("onComponentDidMountCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onComponentDidMountCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onComponentDidMountCallback")[1]).toEqual({ result: false });
});

// Currently seems to fail because of something similar to htis; https://github.com/facebook/jest/issues/207
// WIP
// it ("accepts an valueMask string, and updates the state with appropraite response criteria (Without value replacement) - not sure why you would ever want this lol", () => {
//   const wrapper = shallow(
//     <Input
//       type="button"
//       valueMask={"Test Input Value Mask"}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("click");

//   expect(wrapper.state("value")).toEqual("Test Input Value Mask");
// });

// it ("accepts an valueMask string, and updates the state with appropraite response criteria (With value replacement)", () => {
//   const wrapper = shallow(
//     <Input
//       type="button"
//       valueMask={"Test Input Value Mask {{value}}"}
//       identifier="testInput"
//       labelContent="Test Input"
//       value="test"
//     />
//   );

//   wrapper.find("input").simulate("click");

//   expect(wrapper.state("value")).toEqual("Test Input Value Mask a");
// });