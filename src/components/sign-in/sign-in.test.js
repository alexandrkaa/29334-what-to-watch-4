import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {SignIn} from './sign-in.jsx';

const renderer = new ShallowRenderer();

const FieldsIds = {
  EMAIL_FIELD_ID: `user-email`,
  PASSWORD_FIELD_ID: `user-password`,
};

const SignInFields = [
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

const userEmail = {
  value: `qq@qq.ru`,
  isValid: true,
};

const userPassword = {
  value: `123456`,
  isValid: true,
};

const onInputChange = jest.fn();
const onFormSubmit = jest.fn();

const loginStatusCode = 200;

describe(`<SignIn /> should match snapshot`, () => {
  it(`<SignIn /> should match snapshot when no auth`, () => {

    renderer.render(
        <SignIn
          loginStatusCode={loginStatusCode}
          signInFields={SignInFields}
          user-email={userEmail}
          user-password={userPassword}
          isLoading={false}
          isAuthorized={false}
          onInputChange={onInputChange}
          onFormSubmit={onFormSubmit}
          login={() => {}}
          getUserFavoriteList={() => {}}
          isFormValid={true}
        />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it(`<SignIn /> should match snapshot when auth`, () => {

    renderer.render(
        <SignIn
          loginStatusCode={loginStatusCode}
          signInFields={SignInFields}
          user-email={userEmail}
          user-password={userPassword}
          isLoading={false}
          isAuthorized={true}
          onInputChange={onInputChange}
          onFormSubmit={onFormSubmit}
          login={() => {}}
          getUserFavoriteList={() => {}}
          isFormValid={true}
        />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
