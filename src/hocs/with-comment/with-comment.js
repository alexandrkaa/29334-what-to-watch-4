import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppRoutes} from '../../consts/consts.js';
import {Operation as CommentsOperation} from '../../reducer/data/comments-data/comments-data.js';
import PropTypes from 'prop-types';
import {getAuthorizationStatusBoolean, isPostCommentHasError, isPostCommentInProgress} from '../../reducer/selectors.js';
import {Redirect} from 'react-router-dom';
import {Operation as UserOperation} from '../../reducer/user/user.js';

const withComment = (Component) => {
  class WithCommentHOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isFormValid: false,
        comment: ``,
        rating: 5,
      };
      this._handleRadioChange = this._handleRadioChange.bind(this);
      this._handleTextAreaChange = this._handleTextAreaChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _handleRadioChange(rating) {
      this.setState({rating});
    }

    _handleTextAreaChange(comment) {
      this.setState({comment});
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

    componentDidMount() {
      this.props.checkAuth();
    }

    render() {
      const {comment, rating, isFormValid} = this.state;
      const {isAuthorized, postCommentInProgress, postCommentError} = this.props;
      if (!isAuthorized) {
        return (
          <Redirect to={AppRoutes.LOGIN_PAGE} />
        );
      }
      return (
        <Component
          {...this.props}
          onTextAreaChange={this._handleTextAreaChange}
          onRadioChange={this._handleRadioChange}
          onFormSubmit={this._handleFormSubmit}
          postCommentInProgress={postCommentInProgress}
          postCommentError={postCommentError}
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
      postCommentInProgress: isPostCommentInProgress(state),
      postCommentError: isPostCommentHasError(state),
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
    postCommentInProgress: PropTypes.bool.isRequired,
    postCommentError: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithCommentHOC);
};

export default withComment;
