/* global expect */
/* eslint-env yarn */

import React from "react";
import ReactDOM from "react-dom";
import { shallow, toEqual } from "enzyme";
import Input from "./../src";
import CommonValidation from "./common.helpers";


// it("component contains a radio-focus class upon receiving focus", () => {
//   const wrapper = shallow(
//     <Input type="radio" identifier="testInput" labelContent="Test Input" />
//   );

//   let hasNoFocus = wrapper.find(".radio-nofocus");

//   expect(hasNoFocus.length).toEqual(1);

//   wrapper.find("input").simulate("focus");

//   let nowHasFocus = wrapper.find(".radio-focus");

//   expect(nowHasFocus.length).toEqual(1);
// });

// it("component contains a radio-nofocus class upon receiving focus, then again losing focus", () => {
//   const wrapper = shallow(
//     <Input type="radio" identifier="testInput" labelContent="Test Input" />
//   );

//   let hasNoFocus = wrapper.find(".radio-nofocus");
//   expect(hasNoFocus.length).toEqual(1);

//   wrapper.find("input").simulate("focus");
//   let nowHasFocus = wrapper.find(".radio-focus");
//   expect(nowHasFocus.length).toEqual(1);

//   wrapper.find("input").simulate("blur");
//   let noLongerHasFocus = wrapper.find(".radio-nofocus");
//   expect(noLongerHasFocus.length).toEqual(1);
// });

it("component contains a radio-untouched class default", () => {
  const wrapper = shallow(
    <Input type="radio" identifier="testInput" labelContent="Test Input" />
  );

  let hasNoTouched = wrapper.find(".radio-untouched");

  expect(hasNoTouched.length).toEqual(1);
});

// it("component contains a radio-focus class upon change (touched)", () => {
//   const wrapper = shallow(
//     <Input type="radio" identifier="testInput" labelContent="Test Input" />
//   );

//   let hasNoTouched = wrapper.find(".radio-untouched");

//   expect(hasNoTouched.length).toEqual(1);

//   wrapper.find("input").simulate("change", { target: { value: "a" } });

//   let nowHasTouched = wrapper.find(".radio-touched");

//   expect(nowHasTouched.length).toEqual(1);
// });

// it("component contains a radio-untouched class upon change (Touched), and is retained on blur", () => {
//   const wrapper = shallow(
//     <Input type="radio" identifier="testInput" labelContent="Test Input" />
//   );

//   let hasNoTouched = wrapper.find(".radio-untouched");
//   expect(hasNoTouched.length).toEqual(1);

//   wrapper.find("input").simulate("change", { target: { value: "a" } });
//   let nowHasTouched = wrapper.find(".radio-touched");
//   expect(nowHasTouched.length).toEqual(1);

//   wrapper.find("input").simulate("blur");
//   let stillRetainsTouched = wrapper.find(".radio-touched");
//   expect(stillRetainsTouched.length).toEqual(1);
// });

it("accepts a validation object, with default state validation-invalid", () => {
  const wrapper = shallow(
    <Input
      type="radio"
      validation={CommonValidation.greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );
  let hiddenValidationError = wrapper.find(".validation-invalid");

  expect(hiddenValidationError.length).toEqual(1);
});

// it("component accepts disabled propery, which inhibits changing value", () => {
//   const wrapper = shallow(
//     <Input type="radio" identifier="testInput" labelContent="Test Input" disabled={true}/>
//   );

//   let hasNoTouched = wrapper.find(".radio-untouched");

//   expect(hasNoTouched.length).toEqual(1);

//   expect(wrapper.find("input").html().includes('disabled')).toEqual(true);

//   wrapper.find("input").simulate("simulate", { target: { value: "ab" } });

//   let nowHasTouched = wrapper.find(".radio-untouched");

//   expect(nowHasTouched.length).toEqual(1);

//   expect (wrapper.state('value')).toEqual('');
// });

// it("accepts an onChange object, and updates the state of onChange with appropraite response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onChange={() => {
//         return { result: true };
//       }}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "a" } });

//   expect(wrapper.state("onChangeCallback")).toEqual({ result: true });
// });

// it("accepts an onChange object [array of], and updates the state of onChange with the appropriate response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onChange={[
//         () => {
//           return { result: true };
//         },
//         () => {
//           return { result: false };
//         }
//       ]}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "a" } });

//   expect(wrapper.state("onChangeCallback") instanceof Array).toEqual(true);

//   expect(wrapper.state("onChangeCallback")[0]).toEqual({ result: true });
//   expect(wrapper.state("onChangeCallback")[1]).toEqual({ result: false });
// });

// it("accepts an onClick object, and updates the state of onClick with appropraite response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onClick={() => {
//         return { result: true };
//       }}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("click");

//   expect(wrapper.state("onClickCallback")).toEqual({ result: true });
// });

// it("accepts an onClick object [array of], and updates the state of onClick with the appropriate response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onClick={[
//         () => {
//           return { result: true };
//         },
//         () => {
//           return { result: false };
//         }
//       ]}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("click");

//   expect(wrapper.state("onClickCallback") instanceof Array).toEqual(true);

//   expect(wrapper.state("onClickCallback")[0]).toEqual({ result: true });
//   expect(wrapper.state("onClickCallback")[1]).toEqual({ result: false });
// });

// it("accepts an onFocus object, and updates the state of onFocus with appropraite response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onFocus={() => {
//         return { result: true };
//       }}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   // Appears to have the same "focus" effect.
//   wrapper.find("input").simulate("focus");

//   expect(wrapper.state("onFocusCallback")).toEqual({ result: true });
// });

// it("accepts an onFocus object [array of], and updates the state of onFocus with the appropriate response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onFocus={[
//         () => {
//           return { result: true };
//         },
//         () => {
//           return { result: false };
//         }
//       ]}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   // Appears to have the same "focus" effect.
//   wrapper.find("input").simulate("focus");

//   expect(wrapper.state("onFocusCallback") instanceof Array).toEqual(true);

//   expect(wrapper.state("onFocusCallback")[0]).toEqual({ result: true });
//   expect(wrapper.state("onFocusCallback")[1]).toEqual({ result: false });
// });

// it("accepts an onBlur object, and updates the state of onBlur with appropraite response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onBlur={() => {
//         return { result: true };
//       }}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   // Appears to have the same "focus" effect.
//   wrapper.find("input").simulate("focus");
//   wrapper.find("input").simulate("blur");

//   expect(wrapper.state("onBlurCallback")).toEqual({ result: true });
// });

// it("accepts an onBlur object [array of], and updates the state of onBlur with the appropriate response criteria", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       onBlur={[
//         () => {
//           return { result: true };
//         },
//         () => {
//           return { result: false };
//         }
//       ]}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   // Appears to have the same "focus" effect.
//   wrapper.find("input").simulate("focus");
//   wrapper.find("input").simulate("blur");

//   expect(wrapper.state("onBlurCallback") instanceof Array).toEqual(true);

//   expect(wrapper.state("onBlurCallback")[0]).toEqual({ result: true });
//   expect(wrapper.state("onBlurCallback")[1]).toEqual({ result: false });
// });

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

// it("accepts an valueMask string, and updates the state with appropraite response criteria (Without value replacement) - not sure why you would ever want this lol", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       valueMask={"Test Input Value Mask"}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "a" } });

//   expect(wrapper.state("value")).toEqual("Test Input Value Mask");
// });

// it("accepts an valueMask string, and updates the state with appropraite response criteria (With value replacement)", () => {
//   const wrapper = shallow(
//     <Input
//       type="radio"
//       valueMask={"Test Input Value Mask {{value}}"}
//       identifier="testInput"
//       labelContent="Test Input"
//     />
//   );

//   wrapper.find("input").simulate("change", { target: { value: "a" } });

//   expect(wrapper.state("value")).toEqual("Test Input Value Mask a");
// });
