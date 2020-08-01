import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {FieldsIds, AppRoutes} from '../../consts/consts.js';
import {hasUserLogined, getLoginStatusCode, getIsLoading} from '../../reducer/selectors.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator} from '../../reducer/user/user.js';
import {Operation as MovieDataOperation, ActionCreator as MovieDataActionCreator} from '../../reducer/data/movies-data/movies-data.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import {NetworkErrors} from '../../consts/consts.js';
import withSignIn from '../../hocs/with-sign-in/with-sign-in.js';
import UserProfile from '../user-profile/user-profile.jsx';
import SignInFields from '../sign-in-fields/sign-in-fields.jsx';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {login, isFormValid} = this.props;
    if (isFormValid) {
      login({
        email: this.props[FieldsIds.EMAIL_FIELD_ID].value,
        password: this.props[FieldsIds.PASSWORD_FIELD_ID].value,
      });
    }
  }

  componentDidMount() {
    if (this.props.isAuthorized) {
      this.props.getUserFavoriteList();
    }
  }

  render() {
    if (this.props.isAuthorized) {
      return (
        <Redirect to={AppRoutes.MAIN_PAGE} />
      );
    }
    const signInFields = this.props.signInFields.map((it) => {
      it.value = this.props[it.id].value;
      return it;
    });
    const {isLoading, onInputChange} = this.props;

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
            <SignInFields
              signInFields={signInFields}
              isLoading={isLoading}
              onInputChange={onInputChange}
            />
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
  isAuthorized: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  signInFields: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
  ),
  login: PropTypes.func.isRequired,
  getUserFavoriteList: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: hasUserLogined(state),
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

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(withSignIn(SignIn));
