import React from 'react';
import {Link} from 'react-router-dom';

const Tmp2 = () => {
  return (
    <>
      <h1>TMP</h1>
      <Link to="/player/1">{`props.to: /player/1`}</Link>
    </>
  );
};

export default Tmp2;
