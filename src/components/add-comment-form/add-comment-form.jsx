import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Operation as CommentsOperation, ActionCreator as CommentsActionCreator} from '../../reducer/data/comments-data/comments-data.js';
import {getAuthorizationStatusBoolean, getIsPostCommentHasError, getIsPostCommentInProgress} from '../../reducer/selectors.js';
import InputRadioStar from '../input-radio-star/input-radio-star.jsx';
import InputTextarea from '../input-textarea/input-textarea.jsx';
import {REVIEW_STARS_NUMBER} from '../../consts/consts.js';
import withComment from '../../hocs/with-comment/with-comment.js';
import Error from '../error/error.jsx';
import {AppRoutes} from '../../consts/consts.js';

class AddCommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const {postComment, movieId, rating, comment} = this.props;
    postComment({
      movieId,
      rating,
      comment,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postCommentInProgress !== this.props.postCommentInProgress && !this.props.postCommentError) {
      this.props.history.push(`${AppRoutes.FILM_PAGE}/${this.props.movieId}`);
    }
  }

  render() {
    const {
      onTextAreaChange,
      onRadioChange,
      comment,
      rating,
      postCommentInProgress,
      postCommentError,
      isFormValid,
    } = this.props;
    if (postCommentError) {
      return (
        <Error />
      );
    }
    return (
      <div className="add-review">
        <form onSubmit={this.handleFormSubmit} className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {
                new Array(REVIEW_STARS_NUMBER).fill(``).map((it, idx) => <InputRadioStar isDisabled={postCommentInProgress} key={idx} id={idx + 1} isChecked={rating === (idx + 1)} onRadioChange={onRadioChange} />)
              }
            </div>
          </div>

          <div className="add-review__text">
            <InputTextarea onTextAreaChange={onTextAreaChange} isDisabled={postCommentInProgress} comment={comment} />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={!isFormValid || postCommentInProgress}>Post</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

AddCommentForm.propTypes = {
  onRadioChange: PropTypes.func.isRequired,
  onTextAreaChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  postCommentInProgress: PropTypes.bool.isRequired,
  postCommentError: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  movieId: PropTypes.number.isRequired,
  postComment: PropTypes.func.isRequired,
};

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

export {AddCommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withComment(AddCommentForm)));
