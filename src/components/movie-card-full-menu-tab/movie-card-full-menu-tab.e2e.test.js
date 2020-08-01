import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardFullMenuTab from './movie-card-full-menu-tab.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should MovieCardFullMenuTab change will be handled correctly`, () => {
  const mockTab = {
    id: `TAB1`,
    name: `Tab1`,
    isActive: true,
  };
  const onClickMovieCardFullMenuTab = jest.fn();
  const main = shallow(
      <MovieCardFullMenuTab
        onClickMovieCardFullMenuTab={onClickMovieCardFullMenuTab}
        tab={mockTab}
        key={mockTab.id}
      />
  );

  const tabLink = main.find(`.movie-nav__link`);
  expect(tabLink).toHaveLength(1);

  tabLink.simulate(`click`, {
    preventDefault: () => {}
  });
  expect(onClickMovieCardFullMenuTab).toHaveBeenCalledTimes(1);
});
