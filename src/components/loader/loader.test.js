import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './loader.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`<Loader /> should match snapshot`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
      userData: {
        id: 1,
        email: `qwe@qwe.ru`,
        name: `qwe`,
        avatarUrl: `/img/avatar.jpg`
      }
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Loader />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
