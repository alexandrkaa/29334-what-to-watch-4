import React from 'react';
import PropTypes from 'prop-types';
import {removeSpaces} from '../../utils/common.js';
import GenreFilterItem from '../genre-filter-item/genre-filter-item.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';

const GenreFilterList = (props) => {
  const {movieGenres, onChangeActiveGenre, activeGenre} = props;
  const _onChangeActiveGenre = (movieGenre) => {
    onChangeActiveGenre(movieGenre);
  };

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
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  movieGenres: state.movieGenres
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveGenre(movieGenre) {
    dispatch(ActionCreator.changeActiveGenre(movieGenre));
  },
});

export {GenreFilterList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreFilterList);
