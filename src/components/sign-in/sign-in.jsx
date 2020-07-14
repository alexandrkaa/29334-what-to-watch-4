import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import InputField from '../input-filed/input-field.jsx';
import {SignInFields} from '../../consts/consts.js';
import {isValidField} from '../../utils/common.js';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    const initialState = {};
    SignInFields.forEach((fld) => {
      initialState[fld.id] = {
        value: ``,
        isValid: false
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

  _handleFormSubmit(evt) {
    evt.preventDefault();
    // const _keys = Object.keys(this.state);
    let isFormValid = true;
    for (const key in this.state) {
      if (this.state[key].isValid === false) {
        isFormValid = false;
        break;
      }
    }
  }

  render() {
    return (
      <div className="user-page">

        <Header headerClassName="user-page__head" >
          {<h1 className="page-title user-page__title">Sign in</h1>}
        </Header>

        <div className="sign-in user-page__content">
          {/* <div className="sign-in__message">
            <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
          </div> */}
          <form action="#" onSubmit={_handleFormSubmit} className="sign-in__form">
            <div className="sign-in__fields">
              {
                SignInFields.map((fld) => {
                  return (
                    <InputField
                      key={fld.id}
                      id={fld.id}
                      label={fld.label}
                      type={fld.type}
                      placeholder={fld.placeholder}
                      value={this.state[fld.id].value}
                      onChange={this._handleInputChange}
                    />
                  );
                })
              }
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />

      </div>
    );
  }
}

export default SignIn;
