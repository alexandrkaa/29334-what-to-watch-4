import React, {PureComponent} from 'react';
import {FieldsIds} from '../../consts/consts.js';
import PropTypes from 'prop-types';
import {isValidField} from '../../utils/filters.js';

const withComment = (Component) => {
  class WithCommentHOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        comment: ``,
        rating: 5,
        isNeedRedirect: false,
      };
      this._handleRadioChange = this._handleRadioChange.bind(this);
      this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
    }

    _handleRadioChange(rating) {
      this.setState({rating});
    }

    _handleTextAreaChange(comment) {
      this.setState({comment});
    }

    componentWillUnmount() {
      this.setState({
        comment: ``,
        rating: 5,
        isNeedRedirect: false,
      });
    }

    render() {
      const {comment, rating} = this.state;
      const isFormValid = isValidField(FieldsIds.RATING_FIELD_ID, this.state.rating) && isValidField(FieldsIds.COMMENTS_FIELD_ID, this.state.comment);

      return (
        <Component
          {...this.props}
          onTextAreaChange={this._handleTextAreaChange}
          onRadioChange={this._handleRadioChange}
          comment={comment}
          rating={rating}
          isFormValid={isFormValid}
        />
      );
    }
  }

  WithCommentHOC.propTypes = {
    movieId: PropTypes.number.isRequired,
    postComment: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
  };

  return WithCommentHOC;
};

export default withComment;
