import React, {PureComponent} from 'react';
// import {ReviewTextLength} from '../../consts/consts.js';

const withReview = (Component) => {
  class WithReviewHOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isFormValid: false,
        review: ``,
        rating: 0,
      };
      this._handleRadioChange = this._handleRadioChange.bind(this);
      this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
    }

    _handleRadioChange(rating) {
      this.setState({
        rating
      });
    }

    _handleTextAreaChange(review) {
      this.setState({
        review
      });
    }

    render() {
      const {review, rating, isFormValid} = this.state;
      return (
        <Component
          {...this.props}
          onTextAreaChange={this._handleTextAreaChange}
          onRadioChange={this._handleRadioChange}
          review={review}
          rating={rating}
          isFormValid={isFormValid}
        />
      );
    }
  }
  return WithReviewHOC;
};

export default withReview;
