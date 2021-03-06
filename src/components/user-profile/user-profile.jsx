import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, useLocation, Link} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.js';
import {connect} from 'react-redux';
import {hasUserLogined, getUserData} from '../../reducer/selectors.js';

const UserProfile = (props) => {
  const {userData, isAuthorized} = props;
  const location = useLocation();
  return (
    <div className="user-block">
      {
        (isAuthorized && userData) &&
        <div className="user-block__avatar">
          <Link to={AppRoutes.USERFAVORITE_PAGE}>
            <img src={userData.avatarUrl} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      }
      {
        (!isAuthorized && location.pathname !== AppRoutes.LOGIN_PAGE) &&
        <NavLink style={{textDecoration: `none`}} className="page-title" to="/login">Sign In</NavLink>
      }
    </div>
  );
};

UserProfile.propTypes = {
  userData: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }),
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: hasUserLogined(state),
    userData: getUserData(state),
  };
};

export {UserProfile};
export default connect(mapStateToProps)(UserProfile);
