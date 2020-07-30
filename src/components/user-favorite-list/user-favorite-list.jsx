import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {moviesListType} from '../../types/types.js';
import {connect} from 'react-redux';
import {AppRoutes} from '../../consts/consts.js';
import {Redirect} from 'react-router-dom';
import {getMoviesDataFromUserFavoriteList, hasUserLogined} from '../../reducer/selectors.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import MoviesList from '../movie-list/movie-list.jsx';
import UserProfile from '../user-profile/user-profile.jsx';

class UserFavoriteList extends PureComponent {

  render() {
    const {moviesList, isAuthorized} = this.props;
    if (!isAuthorized) {
      return (
        <Redirect to={AppRoutes.LOGIN_PAGE} />
      );
    }

    return (
      <div className="user-page">
        <Header headerClassName={`user-page__head`}>
          <h1 className="page-title user-page__title">My list</h1>
          <UserProfile />
        </Header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__movies-list">
            <MoviesList
              moviesList={moviesList}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

UserFavoriteList.propTypes = {
  moviesList: moviesListType,
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    moviesList: getMoviesDataFromUserFavoriteList(state),
    isAuthorized: hasUserLogined(state),
  };
};

export {UserFavoriteList};
export default connect(mapStateToProps)(UserFavoriteList);
