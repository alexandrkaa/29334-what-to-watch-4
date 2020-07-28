import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {SignInFields} from '../../consts/consts.js';
import {SignIn} from './sign-in.jsx';
const renderer = new ShallowRenderer();

it(`<SignIn /> should match snapshot`, () => {
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
      />
  );
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
