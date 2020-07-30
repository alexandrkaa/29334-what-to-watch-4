import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class InputRadioStar extends PureComponent {
  constructor(props) {
    super(props);
    this._onRadioChange = this._onRadioChange.bind(this);
  }

  _onRadioChange() {
    this.props.onRadioChange(this.props.id);
  }

  render() {
    const {id, isChecked, isDisabled} = this.props;

    return (
      <React.Fragment>
        <input className="rating__input" disabled={isDisabled} id={`star-${id}`} type="radio" name="rating" value={id} onChange={this._onRadioChange} checked={isChecked} />
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
