import React, {PureComponent} from 'react';
import {SignInFields} from '../../consts/consts.js';
import {isValidField} from '../../utils/filters.js';

const withSignIn = (Component) => {
  class WithSignInHOC extends PureComponent {
    constructor(props) {
      super(props);
      const initialState = {};
      SignInFields.forEach((fld) => {
        initialState[fld.id] = {
          value: ``,
          isValid: false,
        };
      });
      this.state = initialState;
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(id, value) {
      this.setState({
        [id]: {
          value,
          isValid: isValidField(id, value)
        }
      });
    }

    render() {

      let isFormValid = true;
      for (const key in this.state) {
        if (this.state[key].isValid === false) {
          isFormValid = false;
          break;
        }
      }

      return (
        <Component
          {...this.props}
          {...this.state}
          onFormSubmit={this._handleFormSubmit}
          onInputChange={this._handleInputChange}
          signInFields={SignInFields}
          isFormValid={isFormValid}
        />
      );
    }
  }

  return WithSignInHOC;

};

export default withSignIn;
