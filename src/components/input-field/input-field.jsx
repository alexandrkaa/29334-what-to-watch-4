import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class InputField extends PureComponent {
  constructor(props) {
    super(props);
    this._handleFieldChange = this._handleFieldChange.bind(this);
  }

  _handleFieldChange(evt) {
    const {id} = this.props;
    evt.preventDefault();
    this.props.onChange(id, evt.target.value);
  }

  render() {
    const {id, label, type, placeholder, value, isDisabled} = this.props;
    return (
      <div className="sign-in__field">
        <input disabled={isDisabled} className="sign-in__input" type={type} placeholder={placeholder} name={id} id={id} value={value} onChange={this._handleFieldChange} />
        <label className="sign-in__label visually-hidden" htmlFor={id}>{label}</label>
      </div>
    );
  }
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default InputField;
