import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppRoutes, FiledsIds} from '../../consts/consts.js';
import {Operation as CommentsOperation, ActionCreator as CommentsActionCreator} from '../../reducer/data/comments-data/comments-data.js';
import PropTypes from 'prop-types';
import {getAuthorizationStatusBoolean, getIsPostCommentHasError, getIsPostCommentInProgress} from '../../reducer/selectors.js';
import {Redirect} from 'react-router-dom';
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

    componentDidUpdate(prevProps) {
      if (prevProps.postCommentInProgress !== this.props.postCommentInProgress && !this.props.postCommentError) {
        this.setState({
          isNeedRedirect: true,
        });
      }
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
      const {isAuthorized, postCommentInProgress, postCommentError} = this.props;
      const isFormValid = isValidField(FiledsIds.RATING_FIELD_ID, this.state.rating) && isValidField(FiledsIds.COMMENTS_FIELD_ID, this.state.comment);
      if (!isAuthorized) {
        return (
          <Redirect to={AppRoutes.LOGIN_PAGE} />
        );
      }
      if (this.state.isNeedRedirect) {
        return (
          <Redirect to={`${AppRoutes.FILM_PAGE}/${this.props.movieId}`} />
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
      postCommentInProgress: getIsPostCommentInProgress(state),
      postCommentError: getIsPostCommentHasError(state),
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    postComment(commentData) {
      dispatch(CommentsActionCreator.postComment());
      dispatch(CommentsOperation.postCommentData(commentData));
    },
  });

  WithCommentHOC.propTypes = {
    movieId: PropTypes.number.isRequired,
    postComment: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    postCommentInProgress: PropTypes.bool.isRequired,
    postCommentError: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithCommentHOC);
};

export default withComment;
