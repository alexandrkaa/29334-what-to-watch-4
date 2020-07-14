import React from 'react';
import PropTypes from 'prop-types';
import {videoDementionType} from '../../types/types.js';

const VideoPlayer = React.forwardRef((props, ref) => {
  const {controls, autoplay, videoWidth, videoHeight} = props;
  return (
    <video
      ref={ref}
      controls={controls}
      autoPlay={autoplay}
      width={videoWidth}
      height={videoHeight}
      preload="metadata"
    />
  );
});

VideoPlayer.displayName = `VideoPlayer`;

VideoPlayer.defaultProps = {
  videoWidth: 280,
  videoHeight: 175,
};

VideoPlayer.propTypes = {
  controls: PropTypes.bool.isRequired,
  autoplay: PropTypes.bool.isRequired,
  videoHeight: videoDementionType.isRequired,
  videoWidth: videoDementionType.isRequired,
};

export default VideoPlayer;
