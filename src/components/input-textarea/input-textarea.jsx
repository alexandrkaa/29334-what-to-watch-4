import React from 'react';
import PropTypes from 'prop-types';

const InputTextarea = (props) => {
  const {comment, isDisabled} = props;
  const onTextAreaChange = (evt) => {
    const curComment = evt.target.value;
    props.onTextAreaChange(curComment);
  };
  return (
    <textarea disabled={isDisabled} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={onTextAreaChange}></textarea>
  );
};

InputTextarea.propTypes = {
  onTextAreaChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export {InputTextarea};
export default React.memo(InputTextarea);
