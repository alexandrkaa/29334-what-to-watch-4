import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import cloneDeep from 'lodash.clonedeep';
import {AppRoutes} from '../../consts/consts.js';
import {getAuthorizationStatusBoolean} from '../../reducer/selectors.js';

const PrivateRoute = (props) => {
  const {isAuthorized, render} = props;
  const childProps = cloneDeep(props);
  delete childProps.isAuthorized;
  return (
    <Route
      {...childProps}
      render={(routeProps) => {
        return isAuthorized ? render(routeProps) : <Redirect to={`${AppRoutes.LOGIN_PAGE}`} />;
      }}
    />);
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatusBoolean(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
