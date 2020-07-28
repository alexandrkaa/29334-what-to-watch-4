import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardFullButtons from './movie-card-full-buttons.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should MovieCardFullButtons handle actions correctly`, () => {
  const onPlay = jest.fn();
  const movieId = 10;
  const isAuthorized = true;
  const isFavorite = true;
  const addToUserFavoriteList = jest.fn();
  const removeFromUserFavoriteList = jest.fn();
  const isMainPage = true;
  const history = {};
  const main = shallow(
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
  );

  const playBtn = main.find(`.btn--play`);
  expect(playBtn).toHaveLength(1);
  playBtn.simulate(`click`);
  expect(onPlay).toHaveBeenCalledTimes(1);

  const addFavoriteBtn = main.find(`.btn--list`);
  expect(addFavoriteBtn).toHaveLength(1);
});
