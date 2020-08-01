import React from 'react';
import renderer from 'react-test-renderer';
import GenreFilterItem from './genre-filter-item.jsx';

it(`<GenreFilterItem /> should match snapshot`, () => {
  const mockGenre = `Thriller`;
  const onActiveItemChange = jest.fn();
  const tree = renderer
    .create(
        <GenreFilterItem
          movieGenre={mockGenre}
          isActive={true}
          onActiveItemChange={onActiveItemChange}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
