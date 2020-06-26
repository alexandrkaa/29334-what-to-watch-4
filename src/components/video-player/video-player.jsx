import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = React.forwardRef((ref) => {
  return (
    <video ref={ref} controls={false} autoPlay={false} width="280" height="175" />
  );
});

VideoPlayer.displayName = `VideoPlayer`;

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  videoRef: PropTypes.object,
};

export default VideoPlayer;
