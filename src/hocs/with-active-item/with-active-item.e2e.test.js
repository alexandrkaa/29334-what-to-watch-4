import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from './with-active-item.js';
import PropTypes from 'prop-types';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {onActiveItemChange} = props;
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item movie-nav__item--active`}>
          <a href="#" onClick={onActiveItemChange.bind(null, `OVERVIEW`)} className="movie-nav__link">Overview</a>
        </li>
        <li className={`movie-nav__item`}>
          <a href="#" onClick={onActiveItemChange.bind(null, `DETAILS`)} className="movie-nav__link">Overview</a>
        </li>
        <li className={`movie-nav__item`}>
          <a href="#" onClick={onActiveItemChange.bind(null, `REVIEWS`)} className="movie-nav__link">Overview</a>
        </li>
      </ul>
    </nav>
  );
};

MockComponent.propTypes = {
  onActiveItemChange: PropTypes.func.isRequired,
};

const MockComponentWrapped = withActiveItem(MockComponent);


it(`Should withActiveTab state will be changed`, () => {
  const onClickMovieCardFullMenuTab = jest.fn();

  const main = mount(
      <MockComponentWrapped
        onClickMovieCardFullMenuTab={onClickMovieCardFullMenuTab}
        activeTab={`OVERVIEW`}
      />
  );

  expect(main.state(`activeTab`)).toBe(`OVERVIEW`);
  const secondTab = main.find(`.movie-nav__link`).at(1);
  expect(secondTab.length).toBe(1);
  secondTab.simulate(`click`);
  expect(main.state(`activeTab`)).toBe(`DETAILS`);

  const thirdTab = main.find(`.movie-nav__link`).at(2);
  expect(thirdTab.length).toBe(1);
  thirdTab.simulate(`click`);
  expect(main.state(`activeTab`)).toBe(`REVIEWS`);

});
