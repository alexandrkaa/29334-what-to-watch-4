import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {isValidField} from '../../utils/filters.js';
import {FiledsIds, AppRoutes} from '../../consts/consts.js';
import {Operation as CommentsOperation} from '../../reducer/data/comments-data/comments-data.js';
import PropTypes from 'prop-types';
import {getAuthorizationStatusBoolean} from '../../reducer/selectors.js';
import {Redirect} from 'react-router-dom';
import {Operation as UserOperation} from '../../reducer/user/user.js';

const withComment = (Component) => {
  class WithCommentHOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isFormValid: false,
        comment: ``,
        rating: 0,
      };
      this._handleRadioChange = this._handleRadioChange.bind(this);
      this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this.props.checkAuth();
    }

    _handleRadioChange(rating) {
      this.setState({
        rating
      });
    }

    _handleTextAreaChange(comment) {
      this.setState({
        comment
      });
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {rating, comment} = this.state;
      const {movieId, postComment} = this.props;
      postComment({
        movieId,
        rating,
        comment,
      });
    }

    componentDidUpdate(prevState) {
      if (prevState.comment !== this.state.comment || prevState.rating !== this.state.rating) {
        this.setState({
          isFormValid: isValidField(FiledsIds.RATING_FIELD_ID, this.state.rating) && isValidField(FiledsIds.COMMENTS_FIELD_ID, this.state.comment),
        });
      }
    }

    render() {
      const {comment, rating, isFormValid} = this.state;
      const {isAuthorized} = this.props;
      if (!isAuthorized) {
        return (
          <Redirect to={AppRoutes.MAIN_PAGE} />
        );
      }
      return (
        <Component
          {...this.props}
          onTextAreaChange={this._handleTextAreaChange}
          onRadioChange={this._handleRadioChange}
          onFormSubmit={this._handleFormSubmit}
          comment={comment}
          rating={rating}
          isFormValid={isFormValid}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthorized: getAuthorizationStatusBoolean(state),
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    postComment(commentData) {
      dispatch(CommentsOperation.postCommentData(commentData));
    },
    checkAuth() {
      dispatch(UserOperation.checkAuth());
    }
  });

  WithCommentHOC.propTypes = {
    movieId: PropTypes.number.isRequired,
    postComment: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    checkAuth: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithCommentHOC);
};

export default withComment;
