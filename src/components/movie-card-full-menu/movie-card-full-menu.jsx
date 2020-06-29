import React from 'react';
import PropTypes from 'prop-types';
import MovieCardFullMenuTab from '../movie-card-full-menu-tab/movie-card-full-menu-tab.jsx';

const MovieCardFullMenu = (props) => {
  const {tabs, onClickMovieCardFullMenuTab} = props;
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab) => {
          return (
            <MovieCardFullMenuTab
              onClickMovieCardFullMenuTab={onClickMovieCardFullMenuTab}
              tab={tab}
              key={tab.id}
            />
          );
        })}
      </ul>
    </nav>
  );
};

MovieCardFullMenu.propTypes = {
  tabs: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
      })
  ),
  onClickMovieCardFullMenuTab: PropTypes.func.isRequired,
};

export default MovieCardFullMenu;
