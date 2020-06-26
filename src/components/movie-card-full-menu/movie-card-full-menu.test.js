import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardFullMenu from './movie-card-full-menu.jsx';

const mockTabs = [
  {
    id: `TAB1`,
    name: `Tab1`,
    isActive: true,
  },
  {
    id: `TAB2`,
    name: `Tab2`,
    isActive: false,
  },
  {
    id: `TAB3`,
    name: `Tab3`,
    isActive: false,
  },
];

it(`<MovieCardFullMenu /> should match snapshot`, () => {
  const onClickMovieCardFullMenuTab = jest.fn();
  const tree = renderer
    .create(
        <MovieCardFullMenu
          tabs={mockTabs}
          onClickMovieCardFullMenuTab={onClickMovieCardFullMenuTab}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
