import React from 'react';
import renderer from 'react-test-renderer';
import GenreFilterItem from './genre-filter-item.jsx';

it(`<GenreFilterItem /> should match snapshot`, () => {
  const mockGenre = `Thriller`;
  const activeGenre = `Thriller`;
  const onChangeActiveGenre = jest.fn();
  const tree = renderer
    .create(
        <GenreFilterItem
          movieGenre={mockGenre}
          activeGenre={activeGenre}
          onChangeActiveGenre={onChangeActiveGenre}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
