import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";

const movie = {
  id: 1,
  title: `Теория большого взрыва: Откровение ринита`,
  image: `https://avatars.mds.yandex.net/get-ott/223007/2a000001693961696d02f2e3d4cb33a98658/672x438`,
};

it(`<MovieCard /> should render Big Bang Theory movie`, () => {
  const onMovieCardMouseEnter = jest.fn();
  const onMovieTitleClick = jest.fn();
  const tree = renderer
    .create(
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={movie.image}
          onMovieCardMouseEnter={onMovieCardMouseEnter}
          onMovieTitleClick={onMovieTitleClick}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

