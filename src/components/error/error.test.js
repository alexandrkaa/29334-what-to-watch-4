import React from 'react';
import renderer from 'react-test-renderer';
import Error from './error.jsx';

it(`<Error /> should match snapshot`, () => {
  const tree = renderer
    .create(
        <Error />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
