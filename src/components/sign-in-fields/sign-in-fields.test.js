import React from 'react';
import renderer from 'react-test-renderer';
import SignInFields from './sign-in-fields.jsx';

describe(`<SignInFields /> should match snapshot`, () => {
  const onInputChange = jest.fn();
  const FieldsIds = {
    EMAIL_FIELD_ID: `user-email`,
    PASSWORD_FIELD_ID: `user-password`,
  };

  const fields = [
    {
      id: FieldsIds.EMAIL_FIELD_ID,
      label: `Email address`,
      type: `email`,
      placeholder: `Email address`,
      value: ``,
    },
    {
      id: FieldsIds.PASSWORD_FIELD_ID,
      label: `Password`,
      type: `password`,
      placeholder: `Password`,
      value: ``,
    },
  ];
  it(`<AddCommentForm /> should match snapshot not disabled`, () => {
    const isLoading = false;
    const tree = renderer
      .create(
          <SignInFields
            signInFields={fields}
            isLoading={isLoading}
            onInputChange={onInputChange}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<AddCommentForm /> should match snapshot not disabled`, () => {
    const isLoading = true;
    const tree = renderer
      .create(
          <SignInFields
            signInFields={fields}
            isLoading={isLoading}
            onInputChange={onInputChange}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
