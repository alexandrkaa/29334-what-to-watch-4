import React from 'react';
import PropTypes from 'prop-types';

const MovieCardFullMenuTab = (props) => {
  const {tab: {name, id, isActive}} = props;
  const onClickMovieCardFullMenuTab = (evt) => {
    evt.preventDefault();
    props.onClickMovieCardFullMenuTab(id);
  };

  return (
    <li className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}>
      <a href="#" onClick={onClickMovieCardFullMenuTab} className="movie-nav__link">{name}</a>
    </li>
  );
};

MovieCardFullMenuTab.propTypes = {
  tab: PropTypes.exact({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }),
  onClickMovieCardFullMenuTab: PropTypes.func.isRequired,
};

export default MovieCardFullMenuTab;
