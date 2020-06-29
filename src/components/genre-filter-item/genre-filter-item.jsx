import React from 'react';
import PropTypes from 'prop-types';
import {isEqual} from '../../utils/filters.js';
import {getMoviesByGenre} from '../../utils/filters.js';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
// import {movieGenres} from '../../mocks/film.js';

const GenreFilterItem = (props) => {
  const {movieGenre, activeGenre, onChangeActiveGenre, moviesList} = props;
  const _onChangeActiveGenre = onChangeActiveGenre.bind(null, movieGenre, moviesList);
  return (
    <li className={`catalog__genres-item ${isEqual(movieGenre, activeGenre) ? `catalog__genres-item--active` : ``}`}>
      <a href="#" onClick={_onChangeActiveGenre} className="catalog__genres-link">{movieGenre}</a>
    </li>
  );
};

GenreFilterItem.propTypes = {
  movieGenre: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeActiveGenre: PropTypes.func.isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.exact({
        movieDescription: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        movieDirector: PropTypes.string.isRequired,
        movieStarring: PropTypes.string.isRequired,
        movieImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        movieGenre: PropTypes.string.isRequired,
        movieDate: PropTypes.string.isRequired,
        movieBackground: PropTypes.string.isRequired,
        movieRatingScore: PropTypes.string.isRequired,
        movieRatingLevel: PropTypes.string.isRequired,
        movieRatingCount: PropTypes.string.isRequired,
        movieRunTime: PropTypes.number,
        moviePreview: PropTypes.string.isRequired,
      })).isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  moviesList: state.moviesList,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveGenre(movieGenre, movies) {
    dispatch(ActionCreator.changeActiveGenre(movieGenre));
    dispatch(ActionCreator.getMoviesDataByGenre(getMoviesByGenre(movies, movieGenre)));
  },
});

export {GenreFilterItem};
export default connect(mapStateToProps, mapDispatchToProps)(GenreFilterItem);
