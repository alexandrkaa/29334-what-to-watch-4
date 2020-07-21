import React from 'react';
import Header from '../header/header.jsx';
import withMovie from '../../hocs/with-movie/with-movie.js';
import {movieType} from '../../types/types.js';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import AddCommentForm from '../add-comment-form/add-comment-form.jsx';
import UserProfile from '../user-profile/user-profile.jsx';
import {ComponentsKeys} from '../../consts/consts.js';

const AddComment = (props) => {
  const {
    id: movieId,
    title,
    movieImage,
    movieBackground,
  } = props.movie;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movieBackground} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header>
          <Breadcrumbs key={ComponentsKeys.BREADCRUMBS} movie={props.movie} />
          <UserProfile key={ComponentsKeys.USERPROFILE} />
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movieImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>
      <AddCommentForm movieId={movieId} />
    </section>

  );
};

AddComment.propTypes = {
  movie: movieType.isRequired,
};

export {AddComment};
export default withMovie(AddComment);
