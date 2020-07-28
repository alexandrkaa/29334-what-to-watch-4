import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withComment from './with-comment.js';
import PropTypes from 'prop-types';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {onRadioChange, onFormSubmit, onTextAreaChange, isFormValid, comment} = props;
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
        <textarea onChange={onTextAreaChange} className="add-review__textarea" name="review-text" id="review-text" value={comment} placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button disabled={isFormValid} className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

MockComponent.propTypes = {
  onRadioChange: PropTypes.func.isRequired,
  onTextAreaChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  postCommentInProgress: PropTypes.bool.isRequired,
  postCommentError: PropTypes.bool.isRequired,
};

const MockComponentWrapped = withComment(MockComponent);

it(`Should withComment state will be changed`, () => {
  const main = mount(
      <MockComponentWrapped
        movieId={1}
        isAuthorized={true}
        onFormSubmit={() => {}}
        postCommentInProgress={false}
        postCommentError={false}
      />
  );

  const firstCheckBox = main.find(`.rating__input`).at(0);
  expect(firstCheckBox).toHaveLength(1);
  firstCheckBox.simulate(`change`);
  expect(main.state(`rating`)).toBe(1);

  const textArea = main.find(`.add-review__textarea`);
  expect(textArea).toHaveLength(1);
  // const evt = {
  //   target: {
  //     value: `text`
  //   },
  //   preventDefault: () => {},
  // };
  // textArea.simulate(`change`, evt);
});
