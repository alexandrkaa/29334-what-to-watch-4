import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import UserProfile from './user-profile.jsx';

it(`<Loader /> should match snapshot`, () => {
  const userData = {
    id: 1,
    email: `qwe@qwe.ru`,
    name: `qwe`,
    avatarUrl: `/img/avatar.jpg`
  };
  const tree = renderer
    .create(
        <BrowserRouter>
          <UserProfile userData={userData} isAuthorized={true} />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
