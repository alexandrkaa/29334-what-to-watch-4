import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = React.forwardRef((props, ref) => {
  const {controls, autoplay} = props;
  return (
    <video
      ref={ref}
      controls={controls}
      autoPlay={autoplay}
      width="280"
      height="175"
    />
  );
});

VideoPlayer.displayName = `VideoPlayer`;

VideoPlayer.propTypes = {
  controls: PropTypes.bool.isRequired,
  autoplay: PropTypes.bool.isRequired,
};

export default VideoPlayer;
