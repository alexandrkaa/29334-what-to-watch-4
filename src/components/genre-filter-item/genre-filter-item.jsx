import React from 'react';
import PropTypes from 'prop-types';
import {isEqual} from '../../utils/filters.js';

const GenreFilterItem = (props) => {
  const {movieGenre, activeItem, onActiveItemChange} = props;
  const _onActiveItemChange = onActiveItemChange.bind(null, movieGenre);
  return (
    <li className={`catalog__genres-item ${isEqual(movieGenre, activeItem) ? `catalog__genres-item--active` : ``}`}>
      <a href="#" onClick={_onActiveItemChange} className="catalog__genres-link">{movieGenre}</a>
    </li>
  );
};

GenreFilterItem.propTypes = {
  movieGenre: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default GenreFilterItem;
