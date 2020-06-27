import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../../components/video-player/video-player.jsx';

export const withVideoPlayer = (Component) => {
  class VideoPlayerHoc extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
        isInitialPlay: true,
      };

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleVideoPause = this._handleVideoPause.bind(this);
      this._timerId = null;
    }

    componentDidMount() {
      const {movie: {moviePreview, image}, isMuted} = this.props;
      const video = this._videoRef.current;
      video.src = moviePreview;
      video.muted = isMuted;
      video.poster = image;
    }

    _handleVideoPlay() {
      if (this.state.isInitialPlay) {
        this._timerId = setTimeout(() => {
          this.setState({
            isPlaying: true,
            isInitialPlay: false,
          });
        }, 1000);
      } else {
        this.setState({
          isPlaying: true,
        });
      }
    }

    _handleVideoPause() {
      if (this.state.isInitialPlay) {
        clearTimeout(this._timerId);
      }
      this.setState({
        isPlaying: false,
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.muted = null;
      video.poster = null;
      video.src = ``;
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

  VideoPlayerHoc.propTypes = {
    isMuted: PropTypes.bool.isRequired,
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      movieBackground: PropTypes.string.isRequired,
      movieGenre: PropTypes.string.isRequired,
      movieDate: PropTypes.string.isRequired,
      movieImage: PropTypes.string.isRequired,
      movieRatingScore: PropTypes.string.isRequired,
      movieRatingLevel: PropTypes.string.isRequired,
      movieRatingCount: PropTypes.string.isRequired,
      movieDirector: PropTypes.string.isRequired,
      movieStarring: PropTypes.string.isRequired,
      movieDescription: PropTypes.arrayOf(
          PropTypes.string.isRequired
      ),
      moviePreview: PropTypes.string.isRequired
    }),
  };

  return VideoPlayerHoc;
};

export default withVideoPlayer;
