import React from 'react';
import PropTypes from 'prop-types';

const InputTextarea = (props) => {
  const {onTextAreaChange, review} = props;
  const _onTextAreaChange = (evt) => {
    onTextAreaChange(evt.target.value);
  };
  return (
    <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={review} onChange={_onTextAreaChange}></textarea>
  );
};

InputTextarea.propTypes = {
  onTextAreaChange: PropTypes.func.isRequired,
  review: PropTypes.string.isRequired,
};

export default InputTextarea;
