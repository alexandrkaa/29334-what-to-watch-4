import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCardFullButtons} from './movie-card-full-buttons.jsx';
import {BrowserRouter} from 'react-router-dom';

const onPlay = jest.fn();
const movieId = 10;
const isAuthorized = true;
const addToUserFavoriteList = jest.fn();
const removeFromUserFavoriteList = jest.fn();
const history = {};

describe(`<MovieCardFullButtons /> should render correctly`, () => {
  it(`<MovieCardFullButtons /> should render correctly then main page and favorite`, () => {
    const isMainPage = true;
    const isFavorite = true;
    const tree = renderer
      .create(
          <BrowserRouter>
            <MovieCardFullButtons
              onPlay={onPlay}
              movieId={movieId}
              isAuthorized={isAuthorized}
              isInUserFavoriteList={isFavorite}
              addToUserFavoriteList={addToUserFavoriteList}
              removeFromUserFavoriteList={removeFromUserFavoriteList}
              isMainPage={isMainPage}
              history={history}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<MovieCardFullButtons /> should render correctly then not main page and not favorite`, () => {
    const isMainPage = false;
    const isFavorite = false;
    const tree = renderer
      .create(
          <BrowserRouter>
            <MovieCardFullButtons
              onPlay={onPlay}
              movieId={movieId}
              isAuthorized={isAuthorized}
              isInUserFavoriteList={isFavorite}
              addToUserFavoriteList={addToUserFavoriteList}
              removeFromUserFavoriteList={removeFromUserFavoriteList}
              isMainPage={isMainPage}
              history={history}
            />
          </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

