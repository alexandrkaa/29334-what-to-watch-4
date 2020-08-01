import React from 'react';
import PropTypes from 'prop-types';
import InputRadioStar from '../input-radio-star/input-radio-star.jsx';

const AddCommentStars = (props) => {
  const {starsNumber, onRadioChange, isDisabled, rating} = props;
  const starsArray = [...Array(starsNumber).keys()].map((it) => (it + 1));
  return (
    starsArray.map((it) => <InputRadioStar isDisabled={isDisabled} key={it} id={it} isChecked={rating === (it)} onRadioChange={onRadioChange} />)
  );
};

AddCommentStars.propTypes = {
  starsNumber: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onRadioChange: PropTypes.func.isRequired,
};

export default React.memo(AddCommentStars);
