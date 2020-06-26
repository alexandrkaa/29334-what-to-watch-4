import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullMenuTab from './movie-card-full-menu-tab.jsx';

const mockTab = {
  id: `TAB1`,
  name: `Tab1`,
  isActive: true,
};

it(`<MovieCardFullMenu /> should match snapshot`, () => {
  const onClickMovieCardFullMenuTab = jest.fn();
  const tree = renderer
    .create(
        <MovieCardFullMenuTab
          onClickMovieCardFullMenuTab={onClickMovieCardFullMenuTab}
          tab={mockTab}
          key={mockTab.id}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
