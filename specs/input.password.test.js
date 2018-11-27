/* global expect */
/* eslint-env yarn */

import React from "react";
import ReactDOM from "react-dom";
import { shallow, toEqual } from "enzyme";
import Input from "./../src";
import CommonValidation from "./common.helpers"

it("accepts a validation object, with default state validation-invalid", () => {
  const wrapper = shallow(
    <Input
      type="password"
      validation={CommonValidation.greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );
  let hiddenValidationError = wrapper.find(".validation-invalid");

  expect(hiddenValidationError.length).toEqual(1);
});

it("accepts a validation object, and updates state to validation-valid upon successful validation criteria (password input simulation)", () => {
  const wrapper = shallow(
    <Input
      type="password"
      validation={CommonValidation.greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  let hiddenValidationError = wrapper.find(".validation-invalid");

  expect(hiddenValidationError.length).toEqual(0);
});

it("accepts an array of validation objects, and updates state to validation-valid upon successful validation criteria (password input simulation)", () => {
  const wrapper = shallow(
    <Input
      type="password"
      validation={[CommonValidation.greaterThanZero, CommonValidation.lessThanTen]}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  let hiddenValidationError = wrapper.find(".validation-invalid");

  expect(hiddenValidationError.length).toEqual(0);
});

it("accepts an array of validation objects, and updates state to validation-invalid upon successful validation criteria of one, but failure in another (password input simulation)", () => {
  const wrapper = shallow(
    <Input
      type="password"
      validation={[CommonValidation.greaterThanZero, CommonValidation.lessThanTen]}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper
    .find("input")
    .simulate("change", { target: { value: "abcdefghijk" } });

  let hiddenValidationError = wrapper.find(".validation-invalid");

  expect(hiddenValidationError.length).toEqual(1);
});

it("accepts a validation object, and updates state to validation-valid upon successful validation criteria (password input simulation) \
then validation-invalid upon additional changes failing validation criteria", () => {
  const wrapper = shallow(
    <Input
      type="password"
      validation={CommonValidation.greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });
  wrapper.find("input").simulate("change", { target: { value: "" } });

  let hiddenValidationError = wrapper.find(".validation-invalid");

  expect(hiddenValidationError.length).toEqual(1);
});

it("accepts an valueMask string, and updates the state with appropraite response criteria (Without value replacement) - not sure why you would ever want this lol", () => {
  const wrapper = shallow(
    <Input
      type="password"
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
      type="password"
      valueMask={"Test Input Value Mask {{value}}"}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find("input").simulate("change", { target: { value: "a" } });

  expect(wrapper.state("value")).toEqual("Test Input Value Mask a");
});
