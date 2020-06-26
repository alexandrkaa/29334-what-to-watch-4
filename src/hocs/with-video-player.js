import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';


export const withVideoPlayer = (Component) => {
  class VideoPlayerHoc extends PureComponent {
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
      const props = this.props;
      return (<Component ref={this._videoRef} {...props} />);
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

  VideoPlayerHoc.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
  };

  return VideoPlayerHoc;
};

export default withVideoPlayer;
