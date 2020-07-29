import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from './sign-in.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

const userEmail = {
  value: `qq@qq.ru`,
  isValid: true,
};

const userPassword = {
  value: `123456`,
  isValid: true,
};

const onInputChange = jest.fn();
const login = jest.fn();

const loginStatusCode = 200;

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
  },
  {
    id: FieldsIds.PASSWORD_FIELD_ID,
    label: `Password`,
    type: `password`,
    placeholder: `Password`,
  },
];

it(`Should SignIn handlers work correctly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `NO_AUTH`,
      userData: null
    }
  });

  const main = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn
            loginStatusCode={loginStatusCode}
            signInFields={SignInFields}
            user-email={userEmail}
            user-password={userPassword}
            isLoading={false}
            isAuthorized={false}
            onInputChange={onInputChange}
            login={login}
            getUserFavoriteList={() => {}}
            isFormValid={true}
          />
        </BrowserRouter>
      </Provider>
  );
  const form = main.find(`form`).first();
  form.simulate(`submit`);
  expect(login).toHaveBeenCalledTimes(1);
});
