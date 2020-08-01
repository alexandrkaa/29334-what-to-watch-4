import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../input-field/input-field.jsx';

const SignInFields = (props) => {
  const {signInFields} = props;
  return (
    <div className="sign-in__fields">
      {
        signInFields.map((fld) => {
          return (
            <InputField
              key={fld.id}
              id={fld.id}
              label={fld.label}
              type={fld.type}
              placeholder={fld.placeholder}
              value={fld.value}
              onChange={props.onInputChange}
              isDisabled={props.isLoading}
            />
          );
        })
      }
    </div>
  );
};

SignInFields.propTypes = {
  signInFields: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
  ),
  isLoading: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SignInFields;
