import React from 'react';
import {movieType} from '../../types/types.js';
import {NavLink} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.js';

const Breadcrumbs = (props) => {
  const {movie} = props;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <NavLink className="breadcrumbs__link" to={`${AppRoutes.FILM_PAGE}/${movie.id}`}>
            {movie.title}
          </NavLink>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  movie: movieType,
};

export default Breadcrumbs;
