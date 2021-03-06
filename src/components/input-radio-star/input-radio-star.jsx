import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class InputRadioStar extends PureComponent {
  constructor(props) {
    super(props);
    this._handleRadioChange = this._handleRadioChange.bind(this);
  }

  _handleRadioChange() {
    this.props.onRadioChange(this.props.id);
  }

  render() {
    const {id, isChecked, isDisabled} = this.props;

    return (
      <React.Fragment>
        <input className="rating__input" disabled={isDisabled} id={`star-${id}`} type="radio" name="rating" value={id} onChange={this._handleRadioChange} checked={isChecked} />
        <label className="rating__label" htmlFor={`star-${id}`}>{`Rating ${id}`}</label>
      </React.Fragment>
    );
  }
}

InputRadioStar.propTypes = {
  id: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default InputRadioStar;
