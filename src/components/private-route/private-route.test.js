import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {PrivateRoute} from './private-route.jsx';

it(`<PrivateRoute /> should match snapshot`, () => {
  const mockRender = () => {
    return <h1>Header</h1>;
  };

  const tree = renderer
    .create(
        <BrowserRouter>
          <PrivateRoute
            render={mockRender}
            isAuthorized={true}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
