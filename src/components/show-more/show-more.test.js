import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`<ShowMore /> should match snapshot`, () => {
  const onIncreaseMoviesLimit = jest.fn();
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <ShowMore onIncreaseMoviesLimit={onIncreaseMoviesLimit}/>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
