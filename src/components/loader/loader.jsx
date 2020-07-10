import React from 'react';

const Loader = () => {
  return (
    <div style={{width: `100vw`, height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{margin: `auto`}}
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <path
          fill="#e15b64"
          d="M85.141 70.133a40 40 0 00-71.194-36.487A42 40-62.865 0185.14 70.133"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 51;360 50 51"
          ></animateTransform>
        </path>
      </svg>
    </div>
  );
};

export default Loader;
