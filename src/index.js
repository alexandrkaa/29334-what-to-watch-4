import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const titleMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const moviesList = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`
];

const init = () => {
  ReactDOM.render(
      <App titleMovie={titleMovie} moviesList={moviesList} />,
      document.querySelector(`#root`)
  );
};

init();
