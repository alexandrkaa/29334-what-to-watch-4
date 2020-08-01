import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTitle from './movie-card-title.jsx';


it(`<MovieCardTitle /> should match snapshot`, () => {
  const title = `Movie title`;
  const movieGenre = `Comedy`;
  const movieDate = 2020;
  const tree = renderer
    .create(
        <MovieCardTitle
          title={title}
          movieGenre={movieGenre}
          movieDate={movieDate}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
