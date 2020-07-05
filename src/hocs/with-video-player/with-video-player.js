import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../components/video-player/video-player.jsx';
import {movieType} from '../../types/types.js';

export const withVideoPlayer = (Component) => {
  class VideoPlayerHoc extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
      };

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleVideoPause = this._handleVideoPause.bind(this);
      this._startPlay = this._startPlay.bind(this);
      this._stopPlay = this._stopPlay.bind(this);
      this._timerId = null;
    }

    componentDidMount() {
      const {movie: {moviePreview, image}, isMuted} = this.props;
      const video = this._videoRef.current;
      video.src = moviePreview;
      video.muted = isMuted;
      video.poster = image;
    }

    _startPlay() {
      this.setState({
        isPlaying: true,
      });
    }

    _stopPlay() {
      this.setState({
        isPlaying: false,
      });
    }

    _handleVideoPlay() {
      const {isCanStart, onStart} = this.props;
      if (isCanStart) {
        this._startPlay();
      } else {
        onStart(this._startPlay);
      }
    }

    _handleVideoPause() {
      const {isCanStart, onStop} = this.props;
      if (!isCanStart) {
        onStop();
      }
      this._stopPlay();
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.muted = null;
      video.poster = null;
      video.src = ``;
      clearTimeout(this._timerId);
      this._timerId = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    render() {
      const props = this.props;
      return (
        <Component onPlay={this._handleVideoPlay} onPause={this._handleVideoPause} {...props}>
          <VideoPlayer controls={false} autoplay={false} ref={this._videoRef} />
        </Component>
      );
    }
  }

  VideoPlayerHoc.defaultProps = {
    onStart: () => {},
    onStop: () => {},
    isCanStart: true,
  };

  VideoPlayerHoc.propTypes = {
    isMuted: PropTypes.bool.isRequired,
    movie: movieType.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    isCanStart: PropTypes.bool.isRequired,
  };

  return VideoPlayerHoc;
};

export default withVideoPlayer;
