/* global expect */
/* eslint-env yarn */

import React from "react";
import ReactDOM from "react-dom";
import { shallow, toEqual } from "enzyme";
import Input from "./../src";

let maxLength = value => {
  return value.length <= 10;
};

let minLength = value => {
  return value.length > 0;
};

let greaterThanZero = {
  callback: minLength,
  validationErrorMessage:
    "Your input is too short. Expecting anything longer than 0"
};

let lessThanTen = {
  callback: maxLength,
  validationErrorMessage:
    "Your input is too long. Expecting anything less than 10 characters long."
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />,
    div
  );
});

it("should have a html div container", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );
  let container = wrapper.find("#testInput");

  expect(container.length).toEqual(1);
});

it("container has appropriate classes", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );
  let container = wrapper.find(
    "[className='input input-container input-radio input-untouched input-nofocus input-novalidation']"
  );

  expect(container.length).toEqual(1);
});

it("container has appropriate classes when over-ridden with single string", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      containerClassNames="reniatnoc"
    />
  );
  let container = wrapper.find(
    "[className='reniatnoc reniatnoc-container reniatnoc-radio reniatnoc-untouched reniatnoc-nofocus reniatnoc-novalidation']"
  );

  expect(container.length).toEqual(1);
});

it("container has appropriate classes when over-ridden with array of strings", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      containerClassNames={["reniatnoc", "reniatno"]}
    />
  );
  let container = wrapper.find(
    "[className='reniatnoc reniatnoc-container reniatnoc-radio reniatnoc-untouched reniatnoc-nofocus reniatnoc-novalidation reniatno reniatno-container reniatno-radio reniatno-untouched reniatno-nofocus reniatno-novalidation']"
  );

  expect(container.length).toEqual(1);
});

it("should have a html label element", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );
  let label = wrapper.find("label").prop("children");

  expect(label).toContain("Test Input");
});

it("label should have appropraite classes", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );
  let label = wrapper.find(
    "[className='label label-container label-radio label-untouched label-nofocus label-novalidation']"
  );

  expect(label.length).toEqual(1);
});

it("label should have appropraite classes when over-ridden with an array of strings", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      labelClassNames={["lebal", "leba"]}
    />
  );
  let label = wrapper.find(
    "[className='lebal lebal-container lebal-radio lebal-untouched lebal-nofocus lebal-novalidation leba leba-container leba-radio leba-untouched leba-nofocus leba-novalidation']"
  );

  expect(label.length).toEqual(1);
});

it("input should have appropriate classes", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );
  let input = wrapper.find(
    "[className='radio radio-container radio-radio radio-untouched radio-nofocus radio-novalidation']"
  );

  expect(input.length).toEqual(1);
});

it("input should have appropriate classes when over-ridden with an array of strings", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      inputClassNames={["tupni", "tupn"]}
    />
  );
  let input = wrapper.find(
    "[className='tupni tupni-container tupni-radio tupni-untouched tupni-nofocus tupni-novalidation tupn tupn-container tupn-radio tupn-untouched tupn-nofocus tupn-novalidation']"
  );

  expect(input.length).toEqual(1);
});

it("should have a html p (validation) element", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      validation={greaterThanZero}
    />
  );
  let input = wrapper.find("p");

  expect(input.length).toEqual(1);
});

it("p (validation) should have appropriate classes", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      validation={greaterThanZero}
    />
  );
  let input = wrapper.find(
    "[className='validation validation-container validation-radio validation-untouched validation-nofocus validation-validation validation-invalid']"
  );

  expect(input.length).toEqual(1);
});

it("p (validation) should have appropriate classes when over-ridden by an array of strings", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      validation={greaterThanZero}
      validationClassNames={["noitadilav", "noitadila"]}
    />
  );
  let input = wrapper.find(
    "[className='noitadilav noitadilav-container noitadilav-radio noitadilav-untouched noitadilav-nofocus noitadilav-validation noitadilav-invalid noitadila noitadila-container noitadila-radio noitadila-untouched noitadila-nofocus noitadila-validation noitadila-invalid']"
  );

  expect(input.length).toEqual(1);
});

it("accepts, and renders, name property text", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      name="name Text"
    />
  );

  let name = wrapper.find("[name='name Text']");

  expect(name.length).toEqual(1);
});

it("accepts, and renders, name property text - control (ensures no false positive)", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      name="name Text"
    />
  );

  let name = wrapper.find("[name='name Text That Doesn\"t Exist']");

  expect(name.length).toEqual(0);
});

it("accepts, and renders, placeholder property text", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      placeholder="Placeholder Text"
    />
  );

  let placeholder = wrapper.find("[placeholder='Placeholder Text']");

  expect(placeholder.length).toEqual(1);
});

it("accepts, and renders, placeholder property text - control (ensures no false positive)", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      identifier="testInput"
      labelContent="Test Input"
      placeholder="Placeholder Text"
    />
  );

  let placeholder = wrapper.find(
    "[placeholder='Placeholder Text That Doesn\"t Exist']"
  );

  expect(placeholder.length).toEqual(0);
});

it("component contains a radio-nofocus class default", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );

  let hasNoFocus = wrapper.find(".radio-nofocus");

  expect(hasNoFocus.length).toEqual(1);
});

it("component contains a radio-focus class upon receiving focus", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );

  let hasNoFocus = wrapper.find(".radio-nofocus");

  expect(hasNoFocus.length).toEqual(1);

  wrapper.find("input").simulate("focus");

  let nowHasFocus = wrapper.find(".radio-focus");

  expect(nowHasFocus.length).toEqual(1);
});

it("component contains a radio-nofocus class upon receiving focus, then again losing focus", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );

  let hasNoFocus = wrapper.find(".radio-nofocus");
  expect(hasNoFocus.length).toEqual(1);

  wrapper.find("input").simulate("focus");
  let nowHasFocus = wrapper.find(".radio-focus");
  expect(nowHasFocus.length).toEqual(1);

  wrapper.find("input").simulate("blur");
  let noLongerHasFocus = wrapper.find(".radio-nofocus");
  expect(noLongerHasFocus.length).toEqual(1);
});

it("component contains a radio-untouched class default", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );

  let hasNoTouched = wrapper.find(".radio-untouched");

  expect(hasNoTouched.length).toEqual(1);
});

it("component contains a radio-focus class upon change (touched)", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );

  let hasNoTouched = wrapper.find(".radio-untouched");

  expect(hasNoTouched.length).toEqual(1);

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  let nowHasTouched = wrapper.find(".radio-touched");

  expect(nowHasTouched.length).toEqual(1);
});

it("component contains a radio-untouched class upon change (Touched), and is retained on blur", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );

  let hasNoTouched = wrapper.find(".radio-untouched");
  expect(hasNoTouched.length).toEqual(1);

  wrapper.find("input").simulate("change", { target: { value: "a" } });
  let nowHasTouched = wrapper.find(".radio-touched");
  expect(nowHasTouched.length).toEqual(1);

  wrapper.find("input").simulate("blur");
  let stillRetainsTouched = wrapper.find(".radio-touched");
  expect(stillRetainsTouched.length).toEqual(1);
});

it("accepts a validation object, with default state validation-invalid", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      validation={greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );
  let hiddenValidationError = wrapper.find(".validation-invalid");

  expect(hiddenValidationError.length).toEqual(1);
});

// Must write a way to properly handle and test these scenarios (Though they should never happen...)
// it("accepts a validation object, and updates state to validation-valid upon successful validation criteria (text input simulation)", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       validation={greaterThanZero}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "a" } });

//   let hiddenValidationError = wrapper.find(".validation-invalid");

//   expect(hiddenValidationError.length).toEqual(0);
// });

// it("accepts an array of validation objects, and updates state to validation-valid upon successful validation criteria (text input simulation)", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       validation={[greaterThanZero, lessThanTen]}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "a" } });

//   let hiddenValidationError = wrapper.find(".validation-invalid");

//   expect(hiddenValidationError.length).toEqual(0);
// });

// it("accepts an array of validation objects, and updates state to validation-invalid upon successful validation criteria of one, but failure in another (text input simulation)", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       validation={[greaterThanZero, lessThanTen]}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "abcdefghijk" } });

//   let hiddenValidationError = wrapper.find(".validation-invalid");

//   expect(hiddenValidationError.length).toEqual(1);
// });

// it("accepts a validation object, and updates state to validation-valid upon successful validation criteria (text input simulation) \
// then validation-invalid upon additional changes failing validation criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       validation={greaterThanZero}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "a" } });
//   wrapper.find("input").simulate("change", { target: { value: "" } });

//   let hiddenValidationError = wrapper.find(".validation-invalid");

//   expect(hiddenValidationError.length).toEqual(1);
// });

it("accepts an onChange object, and updates the state of onChange with appropraite response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onChange={() => {
        return { result: true };
      }}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  expect(wrapper.state("onChangeCallback")).toEqual({ result: true });
});

it("accepts an onChange object [array of], and updates the state of onChange with the appropriate response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onChange={[
        () => {
          return { result: true };
        },
        () => {
          return { result: false };
        }
      ]}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  expect(wrapper.state("onChangeCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onChangeCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onChangeCallback")[1]).toEqual({ result: false });
});

it("accepts an onClick object, and updates the state of onClick with appropraite response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onClick={() => {
        return { result: true };
      }}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("click");

  expect(wrapper.state("onClickCallback")).toEqual({ result: true });
});

it("accepts an onClick object [array of], and updates the state of onClick with the appropriate response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onClick={[
        () => {
          return { result: true };
        },
        () => {
          return { result: false };
        }
      ]}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("click");

  expect(wrapper.state("onClickCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onClickCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onClickCallback")[1]).toEqual({ result: false });
});

it("accepts an onFocus object, and updates the state of onFocus with appropraite response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onFocus={() => {
        return { result: true };
      }}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");

  expect(wrapper.state("onFocusCallback")).toEqual({ result: true });
});

it("accepts an onFocus object [array of], and updates the state of onFocus with the appropriate response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onFocus={[
        () => {
          return { result: true };
        },
        () => {
          return { result: false };
        }
      ]}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");

  expect(wrapper.state("onFocusCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onFocusCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onFocusCallback")[1]).toEqual({ result: false });
});

it("accepts an onBlur object, and updates the state of onBlur with appropraite response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onBlur={() => {
        return { result: true };
      }}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");
  wrapper.find("input").simulate("blur");

  expect(wrapper.state("onBlurCallback")).toEqual({ result: true });
});

it("accepts an onBlur object [array of], and updates the state of onBlur with the appropriate response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onBlur={[
        () => {
          return { result: true };
        },
        () => {
          return { result: false };
        }
      ]}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  // Appears to have the same "focus" effect.
  wrapper.find("input").simulate("focus");
  wrapper.find("input").simulate("blur");

  expect(wrapper.state("onBlurCallback") instanceof Array).toEqual(true);

  expect(wrapper.state("onBlurCallback")[0]).toEqual({ result: true });
  expect(wrapper.state("onBlurCallback")[1]).toEqual({ result: false });
});

it("accepts an onComponentDidMount object, and updates the state of onComponentDidMount with appropraite response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onComponentDidMount={() => {
        return { result: true };
      }}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  expect(wrapper.state("onComponentDidMountCallback")).toEqual({
    result: true
  });
});

it("accepts an onComponentDidMount object [array of], and updates the state of onComponentDidMount with the appropriate response criteria", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      onComponentDidMount={[
        () => {
          return { result: true };
        },
        () => {
          return { result: false };
        }
      ]}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  expect(wrapper.state("onComponentDidMountCallback") instanceof Array).toEqual(
    true
  );

  expect(wrapper.state("onComponentDidMountCallback")[0]).toEqual({
    result: true
  });
  expect(wrapper.state("onComponentDidMountCallback")[1]).toEqual({
    result: false
  });
});

it("accepts an valueMask string, and updates the state with appropraite response criteria (Without value replacement) - not sure why you would ever want this lol", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      valueMask={"Test Input Value Mask"}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  expect(wrapper.state("value")).toEqual("Test Input Value Mask");
});

it("accepts an valueMask string, and updates the state with appropraite response criteria (With value replacement)", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      valueMask={"Test Input Value Mask {{value}}"}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  expect(wrapper.state("value")).toEqual("Test Input Value Mask a");
});
