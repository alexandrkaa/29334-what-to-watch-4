import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreFilterItem from './genre-filter-item.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`<GenreFilterItem /> actions should works correctly`, () => {
  const mockGenre = `Thriller`;
  const activeGenre = `Thriller`;
  const onActiveItemChange = jest.fn();

  const main = shallow(
      <GenreFilterItem
        movieGenre={mockGenre}
        activeItem={activeGenre}
        onActiveItemChange={onActiveItemChange}
      />
  );
  const genreLink = main.find(`.catalog__genres-link`);
  expect(genreLink).toHaveLength(1);
  genreLink.simulate(`click`, {
    preventDefault: () => {
    }
  });
  expect(onActiveItemChange).toHaveBeenCalledTimes(1);
});
