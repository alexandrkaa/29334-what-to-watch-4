import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getAuthorizationStatusBoolean, getLoginStatusCode, getIsLoading} from '../../reducer/selectors.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator} from '../../reducer/user/user.js';
import {Operation as MovieDataOperation, ActionCreator as MovieDataActionCreator} from '../../reducer/data/movies-data/movies-data.js';
import {SignInFields, FieldsIds, AppRoutes} from '../../consts/consts.js';
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
          email: this.state[FieldsIds.EMAIL_FIELD_ID].value,
          password: this.state[FieldsIds.PASSWORD_FIELD_ID].value,
        });
      }
    }

    render() {
      if (this.props.isAuthorized) {
        this.props.getUserFavoriteList();
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
    isAuthorized: PropTypes.bool.isRequired,
    getUserFavoriteList: PropTypes.func.isRequired,
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
    getUserFavoriteList() {
      dispatch(MovieDataActionCreator.fetchUserFavoriteList());
      dispatch(MovieDataOperation.fetchUserFavoriteListData());
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithSignInHOC);

};

export default withSignIn;
