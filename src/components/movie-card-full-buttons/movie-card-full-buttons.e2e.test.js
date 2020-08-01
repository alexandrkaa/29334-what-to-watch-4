import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardFullButtons from './movie-card-full-buttons.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should MovieCardFullButtons handle actions correctly`, () => {
  const onPlay = jest.fn();
  const movieId = 10;
  const isAuthorized = true;
  const isFavorite = true;
  const addToUserFavoriteList = jest.fn();
  const removeFromUserFavoriteList = jest.fn();
  const isMainPage = true;
  const history = {};

  it(`Should MovieCardFullButtons play work correct`, () => {
    const main = mount(
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
    playBtn.simulate(`click`);
    expect(onPlay).toHaveBeenCalledTimes(1);
  });

  it(`Should MovieCardFullButtons add to favorite list`, () => {
    const main = mount(
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

    const addFavoriteBtn = main.find(`.btn--list`);
    addFavoriteBtn.simulate(`click`, {
      preventDefault: () => {}
    });
    expect(removeFromUserFavoriteList).toHaveBeenCalledTimes(1);

  });

  it(`Should MovieCardFullButtons remove from favorite list`, () => {
    const main = mount(
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

    const addFavoriteBtn = main.find(`.btn--list`);
    main.setProps({isInUserFavoriteList: false});
    main.update();
    addFavoriteBtn.simulate(`click`, {
      preventDefault: () => {}
    });
    expect(addToUserFavoriteList).toHaveBeenCalledTimes(1);
  });
});
