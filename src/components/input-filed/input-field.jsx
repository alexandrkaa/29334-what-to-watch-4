import React from 'react';

const InputField = () => {
  return (
    <div className="sign-in__field">
      <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
      <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
    </div>
  );
};

export default InputField;
