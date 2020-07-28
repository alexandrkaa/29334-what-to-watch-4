import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputField from './input-field.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockData = {
  id: `login`,
  label: `User login`,
  type: `text`,
  placeholder: `Type login, please`,
  value: ``,
  isDisabled: false,
};

it(`Should input change will be handled correctly`, () => {
  const {id, label, type, placeholder, value, isDisabled} = mockData;
  const onChange = jest.fn();
  const main = shallow(
      <InputField
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
      />
  );

  const inputField = main.find(`.sign-in__input`);
  expect(inputField).toHaveLength(1);

  inputField.simulate(`change`, {
    target: {
      value: `t`
    },
    preventDefault: jest.fn()
  });
  inputField.simulate(`change`, {
    target: {
      value: `te`
    },
    preventDefault: jest.fn()
  });
  expect(onChange).toHaveBeenCalledTimes(2);
});
