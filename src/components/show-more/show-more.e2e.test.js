import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowMore} from './show-more.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should ShowMore click will be handled correctly`, () => {
  const onIncreaseMoviesLimit = jest.fn();
  const main = shallow(
      <ShowMore
        onIncreaseMoviesLimit={onIncreaseMoviesLimit}
      />
  );

  const btn = main.find(`.catalog__button`);
  expect(btn).toHaveLength(1);
  btn.simulate(`click`);
  expect(onIncreaseMoviesLimit).toHaveBeenCalledTimes(1);
});
