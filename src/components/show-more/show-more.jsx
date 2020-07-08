import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/movie/movie.js';
import {MOVIES_LIMIT} from '../../consts/consts.js';

const ShowMore = (props) => {
  const {onIncreaseMoviesLimit} = props;
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onIncreaseMoviesLimit}
      >
        Show more
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   showMore: state.showMore
// });

const mapDispatchToProps = (dispatch) => ({
  onIncreaseMoviesLimit() {
    dispatch(ActionCreator.updateMoviesLimit(MOVIES_LIMIT));
    // dispatch(ActionCreator.getMoviesDataByGenre());
  },
});

ShowMore.propTypes = {
  onIncreaseMoviesLimit: PropTypes.func.isRequired,
};

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
