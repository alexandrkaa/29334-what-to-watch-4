import React from 'react';
import {Link} from 'react-router-dom';

const Tmp = () => {
  return (
    <>
      <h1>TMP</h1>
      <Link to="/">{`props.to: /`}</Link>
    </>
  );
};

export default Tmp;
