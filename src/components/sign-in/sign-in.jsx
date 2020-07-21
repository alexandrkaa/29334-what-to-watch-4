import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import InputField from '../input-filed/input-field.jsx';
import {SignInFields, FiledsIds, NetworkErrors, AppRoutes} from '../../consts/consts.js';
import {isValidField} from '../../utils/filters.js';
import {connect} from 'react-redux';
import {getAuthorizationStatusBoolean, getLoginStatusCode, getIsLoading} from '../../reducer/selectors.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator} from '../../reducer/user/user.js';
import {Redirect} from 'react-router-dom';

import UserProfile from '../user-profile/user-profile.jsx';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    const initialState = {};
    SignInFields.forEach((fld) => {
      initialState[fld.id] = {
        value: ``,
        isValid: false,
      };
    });
    this.state = initialState;
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleInputChange(id, value) {
    this.setState({
      [id]: {
        value,
        isValid: isValidField(id, value)
      }
    });
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {login} = this.props;
    let isFormValid = true;
    for (const key in this.state) {
      if (this.state[key].isValid === false) {
        isFormValid = false;
        break;
      }
    }
    if (isFormValid) {
      login({
        email: this.state[FiledsIds.EMAIL_FIELD_ID].value,
        password: this.state[FiledsIds.PASSWORD_FIELD_ID].value,
      });
    }
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    if (this.props.isAuthorized) {
      return (
        <Redirect to={AppRoutes.MAIN_PAGE} />
      );
    }
    return (
      <div className="user-page">

        <Header headerClassName="user-page__head" >
          <h1 className="page-title user-page__title">Sign in</h1>
          <UserProfile />
        </Header>

        <div className="sign-in user-page__content">
          {(this.props.loginStatusCode === NetworkErrors.UNAUTHORIZED || this.props.loginStatusCode === NetworkErrors.BAD_REQUEST) &&
          <div className="sign-in__message">
            <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
          </div>
          }
          <form onSubmit={this._handleFormSubmit} className="sign-in__form">
            <div className="sign-in__fields">
              {
                SignInFields.map((fld) => {
                  return (
                    <InputField
                      key={fld.id}
                      id={fld.id}
                      label={fld.label}
                      type={fld.type}
                      placeholder={fld.placeholder}
                      value={this.state[fld.id].value}
                      onChange={this._handleInputChange}
                      isDisabled={this.props.isLoading}
                    />
                  );
                })
              }
            </div>
            <div className="sign-in__submit">
              <button disabled={this.props.isLoading} className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />

      </div>
    );
  }
}

SignIn.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loginStatusCode: PropTypes.number.isRequired,
  login: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatusBoolean(state),
  loginStatusCode: getLoginStatusCode(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserActionCreator.setAuthorizationProgress(true));
    dispatch(UserOperation.login(authData));
  },
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
