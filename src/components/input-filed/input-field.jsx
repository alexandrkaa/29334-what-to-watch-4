import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {id, label, type, placeholder, value, isDisabled} = props;
  const onChange = (evt) => {
    evt.preventDefault();
    props.onChange(id, evt.target.value);
  };

  return (
    <div className="sign-in__field">
      <input disabled={isDisabled} className="sign-in__input" type={type} placeholder={placeholder} name={id} id={id} value={value} onChange={onChange} />
      <label className="sign-in__label visually-hidden" htmlFor={id}>{label}</label>
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default React.memo(InputField);
