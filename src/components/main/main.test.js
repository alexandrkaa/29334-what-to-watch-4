// npm run test.jest -- -u
import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const mockData = {
  titleMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },

  moviesList: [
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`
  ],

  moviesListSecond: [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`
  ],

  onTitleClick: (evt) => {
    evt.preventDefault();
  },
};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<WelcomeScreen /> should render 5 erros'
describe(`<Main /> should render`, () => {

  it(`<Main /> should render The Grand Budapest Hotel title film and 3 films from movieList`, () => {
    const {titleMovie, moviesList, onTitleClick} = mockData;
    const tree = renderer
      .create(
          <Main
            titleMovie={titleMovie}
            moviesList={moviesList}
            onTitleClick={onTitleClick}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<Main /> should render The Grand Budapest Hotel title film and 5 films from movieListSecond`, () => {
    const {titleMovie, moviesListSecond} = mockData;
    const tree = renderer
      .create(
          <Main titleMovie={titleMovie} moviesList={moviesListSecond} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
