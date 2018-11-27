/* global expect */
/* eslint-env yarn */

import React from "react";
import ReactDOM from "react-dom";
import { shallow, toEqual } from "enzyme";
import Input from "./../src";
import CommonValidation from "./common.helpers"

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
