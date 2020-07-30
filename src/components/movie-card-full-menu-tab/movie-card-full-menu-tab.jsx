import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class MovieCardFullMenuTab extends PureComponent {
  constructor(props) {
    super(props);
    this._onClickMovieCardFullMenuTab = this._onClickMovieCardFullMenuTab.bind(this);
  }

  _onClickMovieCardFullMenuTab(evt) {
    const {tab: {id}} = this.props;
    evt.preventDefault();
    this.props.onClickMovieCardFullMenuTab(id);
  }

  render() {
    const {tab: {name, isActive}} = this.props;
    return (
      <li className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}>
        <a href="#" onClick={this._onClickMovieCardFullMenuTab} className="movie-nav__link">{name}</a>
      </li>
    );
  }
}

MovieCardFullMenuTab.propTypes = {
  tab: PropTypes.exact({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }),
  onClickMovieCardFullMenuTab: PropTypes.func.isRequired,
};

export default MovieCardFullMenuTab;
