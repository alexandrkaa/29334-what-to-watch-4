import React from 'react';
import PropTypes from 'prop-types';
import {removeSpaces} from '../../utils/common.js';
import GenreFilterItem from '../genre-filter-item/genre-filter-item.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';
import {getMoviesByGenre} from '../../utils/filters.js';

const GenreFilterList = (props) => {
  const {movieGenres, moviesList, onChangeActiveGenre, activeGenre} = props;
  const _onChangeActiveGenre = (movieGenre) => {
    onChangeActiveGenre(movieGenre, moviesList);
  }
  return (
    <ul className="catalog__genres-list">
      {movieGenres.map((genre) => {
        return (
          <GenreFilterItem
            key={removeSpaces(genre).toLowerCase()}
            movieGenre={genre}
            activeGenre={activeGenre}
            onChangeActiveGenre={_onChangeActiveGenre}
          />
        );
      })}
    </ul>
  );
};

GenreFilterList.propTypes = {
  movieGenres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
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
  movieGenres: state.movieGenres
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveGenre(movieGenre, movies) {
    dispatch(ActionCreator.changeActiveGenre(movieGenre));
    dispatch(ActionCreator.getMoviesDataByGenre(getMoviesByGenre(movies, movieGenre)));
  },
});

export {GenreFilterList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreFilterList);
