import React from 'react';
import {BrowserRouter, Router, Route, Switch, withRouter, Link} from 'react-router-dom';

const Tmp = (props) => {
  return (
    <>
      <h1>TMP</h1>
      <Link to={props.to}>{`props.to: ${props.to}`}</Link>
    </>
  );
};

export default Tmp;
