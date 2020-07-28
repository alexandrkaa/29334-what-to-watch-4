import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardBackground from './movie-card-background.jsx';

it(`<MovieCardBackground /> should match snapshot`, () => {
  const movieBackground = `img/image1.jpg`;
  const title = `Movie title`;
  const tree = renderer
    .create(
        <MovieCardBackground
          movieBackground={movieBackground}
          title={title}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
