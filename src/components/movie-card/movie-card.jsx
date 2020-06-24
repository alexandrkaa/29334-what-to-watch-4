import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isInitialPlay: true,
    };

    const {movie, onMovieTitleClick} = this.props;
    this._onMovieTitleClick = onMovieTitleClick.bind(null, movie);
    this._onMovieCardMouseEnter = this._onMovieCardMouseEnter.bind(this);
    this._onMovieCardMouseLeave = this._onMovieCardMouseLeave.bind(this);
    this._timerId = null;
  }

  _onMovieCardMouseEnter(evt) {
    evt.preventDefault();
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

  _onMovieCardMouseLeave(evt) {
    evt.preventDefault();
    if (this._timerId) {
      clearTimeout(this._timerId);
    }
    this.setState({
      isPlaying: false,
    });
  }

  render() {
    const {movie} = this.props;
    const {title, image, moviePreview} = movie;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._onMovieCardMouseEnter} onMouseLeave={this._onMovieCardMouseLeave} >
        <div className="small-movie-card__image" onClick={this._onMovieTitleClick}>
          <VideoPlayer isMuted={true} isPlaying={this.state.isPlaying} src={moviePreview} poster={image} />
        </div>
        <h3 className="small-movie-card__title" onClick={this._onMovieTitleClick}>
          <a
            className="small-movie-card__link"
            href="movie-page.html"
          >{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
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
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
