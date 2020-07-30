import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends PureComponent {
  constructor(props) {
    super(props);
    this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
  }

  _handleTextAreaChange(evt) {
    this.props.onTextAreaChange(evt.target.value);
  }

  render() {
    const {comment, isDisabled} = this.props;
    return (
      <textarea disabled={isDisabled} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={comment} onChange={this._handleTextAreaChange}></textarea>
    );
  }
}

InputTextarea.propTypes = {
  onTextAreaChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default InputTextarea;
