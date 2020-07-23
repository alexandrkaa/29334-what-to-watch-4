import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {moviesListType} from '../../types/types.js';
import {connect} from 'react-redux';
import {AppRoutes} from '../../consts/consts.js';
import {Redirect} from 'react-router-dom';
import {
  getMoviesDataFromMyList,
  getAuthorizationStatusBoolean
} from '../../reducer/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import MoviesList from '../movie-list/movie-list.jsx';
import UserProfile from '../user-profile/user-profile.jsx';

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkAuth();
  }

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

MyList.propTypes = {
  moviesList: moviesListType,
  isAuthorized: PropTypes.bool.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    moviesList: getMoviesDataFromMyList(state),
    isAuthorized: getAuthorizationStatusBoolean(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
