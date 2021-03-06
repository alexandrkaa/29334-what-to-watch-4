import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GenreFilterItem extends PureComponent {
  constructor(props) {
    super(props);
    this._handleActiveItemChange = this._handleActiveItemChange.bind(this);
  }

  _handleActiveItemChange(evt) {
    const {movieGenre} = this.props;
    evt.preventDefault();
    this.props.onActiveItemChange(movieGenre);
  }

  render() {
    const {isActive, movieGenre} = this.props;

    return (
      <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`}>
        <a href="#" onClick={this._handleActiveItemChange} className="catalog__genres-link">{movieGenre}</a>
      </li>
    );
  }
}

GenreFilterItem.propTypes = {
  movieGenre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default GenreFilterItem;
