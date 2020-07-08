import React from 'react';
import PropTypes from 'prop-types';
import {removeSpaces} from '../../utils/common.js';
import GenreFilterItem from '../genre-filter-item/genre-filter-item.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/movie/movie.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
import {getGenres, getActiveGenre} from '../../reducer/selectors.js';

const GenreFilterList = (props) => {
  const {movieGenres, onActiveItemChange, activeItem} = props;
  const _onActiveItemChange = (movieGenre) => {
    onActiveItemChange(movieGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {movieGenres.map((genre) => {
        return (
          <GenreFilterItem
            key={removeSpaces(genre).toLowerCase()}
            movieGenre={genre}
            activeItem={activeItem}
            onActiveItemChange={_onActiveItemChange}
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
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeItem: getActiveGenre(state),
  movieGenres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  onActiveItemChange(movieGenre) {
    dispatch(ActionCreator.changeActiveGenre(movieGenre));
    dispatch(ActionCreator.resetMoviesLimit());
  },
});

export {GenreFilterList};
const WrappedGenreFilterList = withActiveItem(GenreFilterList);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedGenreFilterList);
