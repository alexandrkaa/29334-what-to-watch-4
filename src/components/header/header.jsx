import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <React.Fragment>
      <h1 className="visually-hidden">WTW</h1>
      <header className={`page-header ${props.headerClassName}`}>
        <div className="logo">
          <NavLink className="logo__link" to="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </NavLink>
        </div>
        {props.children}
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  headerClassName: PropTypes.string,
  children: PropTypes.any,
};

Header.defaultProps = {
  headerClassName: `movie-card__head`,
};

export default Header;
