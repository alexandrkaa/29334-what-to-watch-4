import React from 'react';
import PropTypes from 'prop-types';
import {isEqual} from '../../utils/filters.js';

const GenreFilterItem = (props) => {
  const {movieGenre, activeGenre, onChangeActiveGenre} = props;
  const _onChangeActiveGenre = onChangeActiveGenre.bind(null, movieGenre);
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
};

export default GenreFilterItem;
