import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      timeoutId: null,
    };

    const {movie, onMovieTitleClick} = this.props;
    this._onMovieTitleClick = onMovieTitleClick.bind(null, movie);
    this._onMovieCardMouseEnter = this._onMovieCardMouseEnter.bind(this, movie);
    this._onMovieCardMouseLeave = this._onMovieCardMouseLeave.bind(this, movie);
  }

  _onMovieCardMouseEnter(movie, evt) {
    evt.preventDefault();
    this.setState({
      isPlaying: true,
    });
  }

  _onMovieCardMouseLeave(movie, evt) {
    evt.preventDefault();
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
          {/* <img src={image} alt={title} width="280" height="175" /> */}
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

// const MovieCard = (props) => {
//   const {movie, onMovieCardMouseEnter, onMovieTitleClick} = props;
//   const {title, image, moviePreview} = movie;

//   // const _onMovieCardMouseEnter = onMovieCardMouseEnter.bind(null, movie);
//   _onMovieCardMouseEnter = () => {

//   }
//   const _onMovieTitleClick = onMovieTitleClick.bind(null, movie);
//   return (
//     <article className="small-movie-card catalog__movies-card" onMouseEnter={_onMovieCardMouseEnter}>
//       <div className="small-movie-card__image" onClick={_onMovieTitleClick}>
//         {/* <img src={image} alt={title} width="280" height="175" /> */}
//         <VideoPlayer isMuted={true} isPlaying={false} src={moviePreview} poster={image} />
//       </div>
//       <h3 className="small-movie-card__title" onClick={_onMovieTitleClick}>
//         <a
//           className="small-movie-card__link"
//           href="movie-page.html"
//         >{title}</a>
//       </h3>
//     </article>
//   );
// };

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
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
