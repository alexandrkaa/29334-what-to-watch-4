import React from 'react';
import PropTypes from 'prop-types';

const InputRadioStar = (props) => {
  const {id, isChecked, onRadioChange, isDisabled} = props;
  const _onRadioChange = () => {
    onRadioChange(id);
  };

  return (
    <React.Fragment>
      <input className="rating__input" disabled={isDisabled} id={`star-${id}`} type="radio" name="rating" value={id} onChange={_onRadioChange} checked={isChecked} />
      <label className="rating__label" htmlFor={`star-${id}`}>{`Rating ${id}`}</label>
    </React.Fragment>
  );
};

InputRadioStar.propTypes = {
  id: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export {InputRadioStar};
export default React.memo(InputRadioStar);
