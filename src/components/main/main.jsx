import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../movie-list/movie-list.jsx';
import GenreFilterList from '../genre-filter-list/genre-filter-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import {moviesListType, movieType} from '../../types/types.js';
import TitleMovie from '../title-movie/title-movie.jsx';
import Footer from '../footer/footer.jsx';

const Main = (props) => {
  const {titleMovie, moviesList, onMovieTitleClick, activeGenre, moviesRenderLimit} = props;
  const isShowMore = !(moviesRenderLimit > moviesList.length);
  return (
    <React.Fragment>
      <TitleMovie movie={titleMovie} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreFilterList activeItem={activeGenre} />
          <div className="catalog__movies-list">
            <MoviesList
              moviesList={moviesList}
              onMovieTitleClick={onMovieTitleClick}
            />
          </div>
          {isShowMore && <ShowMore />}
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  titleMovie: movieType.isRequired,
  moviesList: moviesListType.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  moviesRenderLimit: PropTypes.number.isRequired,
};

export default Main;
