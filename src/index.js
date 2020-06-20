import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import moviesList from './mocks/film.js';

const titleMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const init = () => {
  ReactDOM.render(
      <App titleMovie={titleMovie} moviesList={moviesList} />,
      document.querySelector(`#root`)
  );
};

init();
