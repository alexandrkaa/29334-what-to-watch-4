import React from 'react';
import PropTypes from 'prop-types';

const InputTextarea = (props) => {
  const {onTextAreaChange, comment, isDisabled} = props;
  const _onTextAreaChange = (evt) => {
    onTextAreaChange(evt.target.value);
  };
  return (
    <textarea disabled={isDisabled} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={_onTextAreaChange}></textarea>
  );
};

InputTextarea.propTypes = {
  onTextAreaChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default InputTextarea;
