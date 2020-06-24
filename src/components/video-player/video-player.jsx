import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
      isMuted: props.isMuted,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    video.src = src;

    video.oncanplay = () => {
      this.setState({
        isLoading: false
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime,
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.oncanplay = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    const {poster, src} = this.props;
    return (
      <video ref={this._videoRef} poster={poster} controls={false} autoPlay={false} width="280" height="175">
        <source src={src} />
      </video>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
