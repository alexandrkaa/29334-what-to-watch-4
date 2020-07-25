import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withComment from './with-comment.js';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
// import {BrowserRouter} from 'react-router-dom';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {onRadioChange, onFormSubmit, onTextAreaChange, isFormValid} = props;
  const onFirstRadioChange = () => {
    onRadioChange(1);
  };

  const onSecondRadioChange = () => {
    onRadioChange(2);
  };

  return (
    <form onSubmit={onFormSubmit} className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" onChange={onFirstRadioChange} id="star-1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
          <input className="rating__input" onChange={onSecondRadioChange} id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={onTextAreaChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button disabled={isFormValid} className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

MockComponent.propTypes = {
  onRadioChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
  onTextAreaChange: PropTypes.func.isRequired,
};

const MockComponentWrapped = withComment(MockComponent);


it.skip(`Should withComment state will be changed`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: `AUTH`,
      userData: {
        id: 1,
        email: `qwe@qwe.ru`,
        name: `qwe`,
        avatarUrl: `/img/avatar.jpg`
      }
    },
    COMMENTS_DATA: {
      loadingComments: false,
      loadingCommentsError: false,
      moviesComments: {},
      postCommentInProgress: false,
      postCommentError: false,
    }
  });
  const main = mount(
      <Provider store={store}>
        <MockComponentWrapped movieId={1} />
      </Provider>
  );

  expect(main.state(`comment`)).toBe(``);

  // expect(main.state(`activeItem`)).toBe(`OVERVIEW`);
  // const secondTab = main.find(`.movie-nav__link`).at(1);
  // expect(secondTab.length).toBe(1);
  // secondTab.simulate(`click`);
  // expect(main.state(`activeItem`)).toBe(`DETAILS`);

  // const thirdTab = main.find(`.movie-nav__link`).at(2);
  // expect(thirdTab.length).toBe(1);
  // thirdTab.simulate(`click`);
  // expect(main.state(`activeItem`)).toBe(`REVIEWS`);

});
