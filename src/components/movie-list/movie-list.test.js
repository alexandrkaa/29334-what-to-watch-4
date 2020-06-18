// npm run test.jest -- -u
import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movie-list.jsx';

const moviesList = [
  {
    id: 0,
    title: `Теория большого взрыва: Откровение ринита`,
    image: `https://avatars.mds.yandex.net/get-ott/223007/2a000001693961696d02f2e3d4cb33a98658/672x438`,
  },
  {
    id: 1,
    title: `Звездный путь`,
    image: `https://avatars.mds.yandex.net/get-ott/224348/2a000001612712a3848cc18d4a955a72054a/672x438`,
  },
  {
    id: 2,
    title: `Рик и Морти: Риконечная Мортистория`,
    image: `https://avatars.mds.yandex.net/get-ott/1531675/2a00000171ded04a30a4b8fdeb0097d8a54f/672x438`,
  },
];

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<WelcomeScreen /> should render 5 erros'
// npm run test.jest -- --updateSnapshot

it(`<MovieCard /> should render 3 movie cards`, () => {
  const onMovieCardMouseEnter = jest.fn();
  const onMovieTitleClick = jest.fn();
  const tree = renderer
    .create(
        <MoviesList
          moviesList={moviesList}
          onMovieTitleClick={onMovieTitleClick}
          onMovieCardMouseEnter={onMovieCardMouseEnter}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

