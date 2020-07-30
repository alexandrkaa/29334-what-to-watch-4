import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {removeSpaces} from '../../utils/common.js';
import GenreFilterItem from '../genre-filter-item/genre-filter-item.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/movie/movie.js';
import {getGenres, getActiveGenre} from '../../reducer/selectors.js';
import {isSameText} from '../../utils/filters.js';

class GenreFilterList extends PureComponent {
  constructor(props) {
    super(props);
    this._onActiveItemChange = this._onActiveItemChange.bind(this);
  }

  _onActiveItemChange(movieGenre) {
    this.props.onActiveItemChange(movieGenre);
  }

  render() {
    const {movieGenres, activeItem} = this.props;
    return (
      <ul className="catalog__genres-list">
        {movieGenres.map((genre) => {
          return (
            <GenreFilterItem
              key={removeSpaces(genre).toLowerCase()}
              movieGenre={genre}
              isActive={isSameText(genre, activeItem)}
              onActiveItemChange={this._onActiveItemChange}
            />
          );
        })}
      </ul>
    );
  }
}

GenreFilterList.propTypes = {
  movieGenres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  activeItem: PropTypes.string.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeItem: getActiveGenre(state),
  movieGenres: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  onActiveItemChange(movieGenre) {
    dispatch(ActionCreator.changeActiveGenre(movieGenre));
    dispatch(ActionCreator.resetMoviesLimit());
  },
});

export {GenreFilterList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreFilterList);
