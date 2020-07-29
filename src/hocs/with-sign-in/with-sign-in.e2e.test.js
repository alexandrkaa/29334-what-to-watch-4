import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSignIn from './with-sign-in.js';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {


  return (
    <form action="#" className="sign-in__form">
      <div className="sign-in__fields">
        {
          props.signInFields.map((fld) => {
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
                  onChange={props.onInputChange}
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
  signInFields: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired
  ),
  isLoading: PropTypes.bool.isRequired,
  loginStatusCode: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

const MockComponentWrapped = withSignIn(MockComponent);

it(`Should withSignIn state will be changed`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `NO_AUTH`,
      isLoading: false,
      userData: null,
      loginStatusCode: 0,
    }
  });
  const main = shallow(
      <Provider store={store}>
        <MockComponentWrapped />
      </Provider>
  );

});
