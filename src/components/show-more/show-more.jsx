import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';

const ShowMore = (props) => {
  const {onIncreaseMoviesLimit, showMore} = props;
  if (!showMore) {
    return null;
  }
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

const mapStateToProps = (state) => ({
  showMore: state.showMore
});

const mapDispatchToProps = (dispatch) => ({
  onIncreaseMoviesLimit() {
    dispatch(ActionCreator.increaseMoviesLimit());
    dispatch(ActionCreator.getMoviesDataByGenre());
  },
});

ShowMore.propTypes = {
  onIncreaseMoviesLimit: PropTypes.func.isRequired,
  showMore: PropTypes.bool.isRequired,
};

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
