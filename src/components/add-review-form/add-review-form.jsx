import React from 'react';
import PropTypes from 'prop-types';
import InputRadioStar from '../input-radio-star/input-radio-star.jsx';
import InputTextarea from '../input-textarea/input-textarea.jsx';
import {REVIEW_STARS_NUMBER} from '../../consts/consts.js';
import withReview from '../../hocs/with-comment/with-comment.js';

const AddReviewForm = (props) => {
  const {
    onTextAreaChange,
    onRadioChange,
    comment,
    rating,
    isFormValid,
    onFormSubmit
  } = props;
  return (
    <div className="add-review">
      <form onSubmit={onFormSubmit} className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              new Array(REVIEW_STARS_NUMBER).fill(``).map((it, idx) => <InputRadioStar key={idx} id={idx + 1} isChecked={rating === (idx + 1)} onRadioChange={onRadioChange} />)
            }
          </div>
        </div>

        <div className="add-review__text">
          <InputTextarea onTextAreaChange={onTextAreaChange} comment={comment} />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isFormValid}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  onRadioChange: PropTypes.func.isRequired,
  onTextAreaChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export {AddReviewForm};
export default withReview(AddReviewForm);
