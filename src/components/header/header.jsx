import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserProfile from '../user-profile/user-profile.jsx';
import {getAuthorizationStatus, getUserData} from '../../reducer/selectors.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  const {userData, renderBreadCrumbs} = props;
  const _isAuthorized = (AuthorizationStatus.AUTH === props.authorizationStatus);
  return (
    <React.Fragment>
      {_isAuthorized && <h1 className="visually-hidden">WTW</h1>}
      <header className={`page-header ${props.headerClassName}`}>
        <div className="logo">
          <NavLink className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </NavLink>
        </div>
        {renderBreadCrumbs()}
        <UserProfile userData={userData} isAuthorized={_isAuthorized} />
        {props.children}
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  headerClassName: PropTypes.string,
  children: PropTypes.element,
  userData: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }),
  renderBreadCrumbs: PropTypes.func
};

Header.defaultProps = {
  headerClassName: `movie-card__head`,
  renderBreadCrumbs: () => {},
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    userData: getUserData(state),
  };
};

export {Header};
export default connect(mapStateToProps)(Header);
