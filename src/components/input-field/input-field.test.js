import React from 'react';
import renderer from 'react-test-renderer';
import InputField from './input-field.jsx';


it(`<InputField /> should match snapshot`, () => {
  const mockData = {
    id: `login`,
    label: `User login`,
    type: `text`,
    placeholder: `Type login, please`,
    value: ``,
    onChange: jest.fn(),
    isDisabled: false,
  };
  const {id, label, type, placeholder, value, onChange, isDisabled} = mockData;
  const tree = renderer
    .create(
        <InputField
          id={id}
          label={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          isDisabled={isDisabled}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
