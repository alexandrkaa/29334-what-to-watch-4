import React from 'react';
import PropTypes from 'prop-types';
import {isSameText} from '../../utils/filters.js';

const GenreFilterItem = (props) => {
  const {movieGenre, activeItem} = props;
  const onActiveItemChange = (evt) => {
    evt.preventDefault();
    props.onActiveItemChange(movieGenre);
  };

  return (
    <li className={`catalog__genres-item ${isSameText(movieGenre, activeItem) ? `catalog__genres-item--active` : ``}`}>
      <a href="#" onClick={onActiveItemChange} className="catalog__genres-link">{movieGenre}</a>
    </li>
  );
};

GenreFilterItem.propTypes = {
  movieGenre: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default GenreFilterItem;
