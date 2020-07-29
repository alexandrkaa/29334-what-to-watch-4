import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSignIn from './with-sign-in.js';
import PropTypes from 'prop-types';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  return (
    <form action="#" className="sign-in__form">
      <div className="sign-in__fields">
        {
          props.signInFields.map((fld) => {
            const onChange = (evt) => {
              props.onInputChange(fld.id, evt.target.value);
            };

            return (
              <div key={fld.id} className="sign-in__field">
                <input
                  disabled={props[fld.id].isLoading}
                  className="sign-in__input"
                  type={fld.type}
                  placeholder={fld.placeholder}
                  name={fld.id}
                  id={fld.id}
                  value={props[fld.id].value}
                  onChange={onChange}
                />
                <label className="sign-in__label visually-hidden" htmlFor={fld.id}>{fld.label}</label>
              </div>
            );
          })
        }
      </div>
      <div className="sign-in__submit">
        <button disabled={props.isLoading} className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

MockComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loginStatusCode: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  signInFields: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired
  ),
  login: PropTypes.func.isRequired,
  getUserFavoriteList: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
};

const MockComponentWrapped = withSignIn(MockComponent);

it(`Should withSignIn state will be changed`, () => {
  const main = mount(
      <MockComponentWrapped
        isLoading={false}
        loginStatusCode={0}
        isAuthorized={true}
        login={() => {}}
        getUserFavoriteList={() => {}}
      />
  );
  const emailInput = main.find(`#user-email`);
  expect(emailInput).toHaveLength(1);
  emailInput.simulate(`change`, {
    target: {
      value: `qq@qq.ru`
    },
    preventDefault: jest.fn()
  });
  expect(main.state(`user-email`).value).toBe(`qq@qq.ru`);

  const passwordInput = main.find(`#user-password`);
  expect(passwordInput).toHaveLength(1);
  passwordInput.simulate(`change`, {
    target: {
      value: `qwerty`
    },
    preventDefault: jest.fn()
  });
  expect(main.state(`user-password`).value).toBe(`qwerty`);
});
