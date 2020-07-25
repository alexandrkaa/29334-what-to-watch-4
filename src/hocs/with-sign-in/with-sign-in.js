import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getAuthorizationStatusBoolean, getLoginStatusCode, getIsLoading} from '../../reducer/selectors.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator} from '../../reducer/user/user.js';
import {SignInFields, FiledsIds, AppRoutes} from '../../consts/consts.js';
import {isValidField} from '../../utils/filters.js';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const withSignIn = (Component) => {
  class WithSignInHOC extends PureComponent {
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
        <Component
          {...this.props}
          {...this.state}
          onFormSubmit={this._handleFormSubmit}
          onInputChange={this._handleInputChange}
          signInFields={SignInFields}
        />
      );
    }
  }

  WithSignInHOC.propTypes = {
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

  return connect(mapStateToProps, mapDispatchToProps)(WithSignInHOC);

};

export default withSignIn;
