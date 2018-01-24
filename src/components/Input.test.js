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

it('should have a html div container', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let container = wrapper.find('#testInput');

  expect(container.length).toEqual(1);
});

it('container has appropriate classes', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let container = wrapper.find('[className="input input-container input-text container-untouched  container-nofocus container-invalid"]');

  expect(container.length).toEqual(1);
});

it('container has appropriate classes when over-ridden with single string', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" containerClassNames="reniatnoc"/>
  );
  let container = wrapper.find('[className="reniatnoc container-untouched  container-nofocus container-invalid"]');

  expect(container.length).toEqual(1);
});

it('container has appropriate classes when over-ridden with array of strings', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" containerClassNames={["reniatnoc", "reniatno"]}/>
  );
  let container = wrapper.find('[className="reniatnoc reniatno container-untouched  container-nofocus container-invalid"]');

  expect(container.length).toEqual(1);
});

it('should have a html label element', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let label = wrapper.find('label').prop('children');

  expect(label).toContain('Test Input');
});

it('label should have appropraite classes', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let label = wrapper.find('[className="input input-label label-untouched  label-invalid"]');

  expect(label.length).toEqual(1);
});

it('label should have appropraite classes when over-ridden with an array of strings', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" labelClassNames={["lebal", "leba"]}/>
  );
  let label = wrapper.find('[className="lebal leba label-untouched  label-invalid"]');

  expect(label.length).toEqual(1);
});

it('should have a html input element', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let input = wrapper.find('input');

  expect(input.length).toEqual(1);
});

it('input should have appropriate classes', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let input = wrapper.find('[className="input input-input input-untouched  input-invalid"]');

  expect(input.length).toEqual(1);
});

it('input should have appropriate classes when over-ridden with an array of strings', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" inputClassNames={["tupni", "tupn"]}/>
  );
  let input = wrapper.find('[className="tupni tupn input-untouched  input-invalid"]');

  expect(input.length).toEqual(1);
});

it('should have a html p (validation) element', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let input = wrapper.find('p');

  expect(input.length).toEqual(1);
});

it('p (validation) should have appropriate classes', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" />
  );
  let input = wrapper.find('[className="input input-validation validation-untouched  validation-invalid"]');

  expect(input.length).toEqual(1);
});

it('p (validation) should have appropriate classes when over-ridden by an array of strings', () => {
  const wrapper = shallow(
    <Input type="text" identifier="testInput" labelContent="Test Input" validationClassNames={["noitadilav", "noitadila"]}/>
  );
  let input = wrapper.find('[className="noitadilav noitadila validation-untouched  validation-invalid"]');

  expect(input.length).toEqual(1);
});

it('accepts, and renders, placeholder property text', () => {
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

it('accepts, and renders, placeholder property text - control (ensures no false positive)', () => {
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

it("accepts a validation object, with default state validation-invalid", () => {
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

it('accepts a validation object, and updates state to validation-valid upon successful validation criteria (text input simulation)', () => {
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

it('accepts a validation object, and updates state to validation-valid upon successful validation criteria (text input simulation) \
then validation-invalid upon additional changes failing validation criteria', () => {
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
