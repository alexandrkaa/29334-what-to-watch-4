import React from 'react';
import PropTypes from 'prop-types';
import withVideoPlayer from '../../hocs/with-video-player.js';

const VideoPlayer = React.forwardRef((props, ref) => {
  const {poster, src} = props;
  return (
    <video ref={ref} poster={poster} controls={false} autoPlay={false} width="280" height="175">
      <source src={src} />
    </video>
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

export default withVideoPlayer(VideoPlayer);
