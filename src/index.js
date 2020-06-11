import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const titleFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const init = () => {
  ReactDOM.render(
      <App title={titleFilm.title} genre={titleFilm.genre} releaseDate={titleFilm.releaseDate} />,
      document.querySelector(`#root`)
  );
};

init();
