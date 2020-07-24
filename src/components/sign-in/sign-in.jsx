import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import InputField from '../input-filed/input-field.jsx';
import {NetworkErrors} from '../../consts/consts.js';
import withSignIn from '../../hocs/with-sign-in/with-sign-in.js';
import UserProfile from '../user-profile/user-profile.jsx';

const SignIn = (props) => {
  return (
    <div className="user-page">

      <Header headerClassName="user-page__head" >
        <h1 className="page-title user-page__title">Sign in</h1>
        <UserProfile />
      </Header>

      <div className="sign-in user-page__content">
        {(props.loginStatusCode === NetworkErrors.UNAUTHORIZED || props.loginStatusCode === NetworkErrors.BAD_REQUEST) &&
        <div className="sign-in__message">
          <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
        </div>
        }
        <form onSubmit={props.onFormSubmit} className="sign-in__form">
          <div className="sign-in__fields">
            {
              props.signInFields.map((fld) => {
                return (
                  <InputField
                    key={fld.id}
                    id={fld.id}
                    label={fld.label}
                    type={fld.type}
                    placeholder={fld.placeholder}
                    value={props[fld.id].value}
                    onChange={props.onInputChange}
                    isDisabled={props.isLoading}
                  />
                );
              })
            }
          </div>
          <div className="sign-in__submit">
            <button disabled={props.isLoading} className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />

    </div>
  );

};

SignIn.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loginStatusCode: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  signInFields: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired
  )
};

export {SignIn};
export default withSignIn(SignIn);
