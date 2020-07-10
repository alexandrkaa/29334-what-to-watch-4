import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../components/video-player/video-player.jsx';
import {movieType, videoDementionType} from '../../types/types.js';

export const withVideoPlayer = (Component) => {
  class VideoPlayerHoc extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
        isEnded: false,
        isFullScreen: false,
        currentTime: 0,
      };

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleVideoPause = this._handleVideoPause.bind(this);
      this._startPlay = this._startPlay.bind(this);
      this._stopPlay = this._stopPlay.bind(this);
      this._timerId = null;
      this._duration = 0;
      this._handleFullscreenToggle = this._handleFullscreenToggle.bind(this);
    }

    componentDidMount() {
      const {movie: {image}, isMuted, videoSrc} = this.props;
      // console.log(`src: ${src}`, `moviePreview: ${moviePreview}`);
      const video = this._videoRef.current;
      video.src = videoSrc;
      video.muted = isMuted;
      video.poster = image;
      video.ontimeupdate = () => this.setState({
        currentTime: Math.floor(video.currentTime),
      });
      video.onended = () => this.setState({
        isPlaying: false,
        isEnded: true,
      });
      video.onloadedmetadata = () => {
        this._duration = video.duration;
      };
    }

    _handleFullscreenToggle() {
      const video = this._videoRef.current;
      if (!document.fullscreenElement) {
        video.requestFullscreen()
        .then(() => {
          this.setState({
            isFullScreen: true,
          });
        });
      } else {
        document.exitFullscreen()
        .then(() => {
          this.setState({
            isFullScreen: false,
          });
        });
      }
    }

    _startPlay() {
      this.setState({
        isPlaying: true,
        isEnded: false,
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
      video.ontimeupdate = null;
      this._duration = 0;
      video.onended = null;
      video.onloadedmetadata = null;
    }

    render() {
      const props = this.props;
      return (
        <Component
          onPlay={this._handleVideoPlay}
          onPause={this._handleVideoPause}
          isPlaying={this.state.isPlaying}
          isEnded={this.state.isEnded}
          isFullScreen={this.state.isFullScreen}
          onFullscreenToggle={this._handleFullscreenToggle}
          duration={this._duration}
          currentTime = {this.state.currentTime}
          {...props}
        >
          <VideoPlayer controls={false} autoplay={false} videoWidth={props.videoWidth} videoHeight={props.videoHeight} ref={this._videoRef} />
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
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
    videoHeight: videoDementionType.isRequired,
    videoWidth: videoDementionType.isRequired,
    videoSrc: PropTypes.string.isRequired
  };

  return VideoPlayerHoc;
};

export default withVideoPlayer;
