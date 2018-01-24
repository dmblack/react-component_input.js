import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Input from './Input';

let minLength = value => {
  return value.length > 0;
};

let greaterThanZero = {
  callback: minLength,
  validationErrorMessage:
    'Your input is too short. Expecting anything longer than 0'
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Input type="text" identifier="testInput" labelContent="Test Input" />,
    div
  );
});

it('Should have a container (div)', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let label = wrapper.find('#testInput');

  expect(label.length).toEqual(1);
});

it('Should have a label', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let label = wrapper.find('label').prop('children');

  expect(label).toContain('Test Input');
});

it('Should have an input', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let input = wrapper.find('input');

  expect(input.length).toEqual(1);
});

it('Accepts a placeholder', () => {
  const wrapper = shallow(
    <Input
      type="text"
      identifier="testInput"
      labelContent="Test Input"
      placeholder="Placeholder Text"
    />
  );

  let placeholder = wrapper.find('[placeholder="Placeholder Text"]');

  expect(placeholder.length).toEqual(1);
});

it('Accepts a placeholder, and ensures not false positive', () => {
  const wrapper = shallow(
    <Input
      type="text"
      identifier="testInput"
      labelContent="Test Input"
      placeholder="Placeholder Text"
    />
  );

  let placeholder = wrapper.find(
    '[placeholder="Placeholder Text That Doesn\'t Exist"]'
  );

  expect(placeholder.length).toEqual(0);
});

it("Should render without crashing, if there's a validation object", () => {
  const wrapper = shallow(
    <Input
      type="text"
      validation={greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );
  let hiddenValidationError = wrapper.find('.validation-invalid');

  expect(hiddenValidationError.length).toEqual(1);
});

it('Should remain valid after input text change', () => {
  const wrapper = shallow(
    <Input
      type="text"
      validation={greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find('input').simulate('change', { target: { value: 'a' } });

  let hiddenValidationError = wrapper.find('.validation-invalid');

  expect(hiddenValidationError.length).toEqual(0);
});

it('Should return invalid after input text change to nothing', () => {
  const wrapper = shallow(
    <Input
      type="text"
      validation={greaterThanZero}
      identifier="testInput"
      labelContent="Test Input"
    />
  );

  wrapper.find('input').simulate('change', { target: { value: 'a' } });
  wrapper.find('input').simulate('change', { target: { value: '' } });

  let hiddenValidationError = wrapper.find('.validation-invalid');

  expect(hiddenValidationError.length).toEqual(1);
});
